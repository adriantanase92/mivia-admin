import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AbstractHttpService} from "src/app/core/http/abstract-http.service";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {fromEvent, merge, Observable, of as observableOf} from "rxjs";
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    map,
    startWith,
    switchMap,
    tap
} from "rxjs/operators";
import {ListDataResponse} from "src/app/core/interfaces/list-data-response.interface";
import {Item} from "src/app/core/interfaces/item.interface";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: "app-list-items",
    templateUrl: "./list-items.component.html"
})
export class ListItemsComponent implements OnInit, AfterViewInit {
    @Input() collation: string = "";
    @Input() data!: {
        searchLabel: string;
        type?: string;
        tableColumnsData: any[];
    };
    dataSource!: MatTableDataSource<Item>;
    displayedColumns: string[] = [];

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;
    noData = true;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild("search") search!: ElementRef;

    constructor(public modal: MatDialog, private httpService: AbstractHttpService) {}

    ngOnInit(): void {
        this.displayedColumns = this.data.tableColumnsData.map((column) => column.name);
    }

    ngAfterViewInit() {
        // server-side search
        fromEvent(this.search.nativeElement, "keyup")
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;
                })
            )
            .subscribe((data: any) => this.handleItems(data));

        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    let query = `page=${this.paginator.pageIndex + 1}&limit=${
                        this.paginator.pageSize
                    }`;
                    if (this.data.type) {
                        query = query.concat(`&type=${this.data.type}`);
                    }
                    // if(search?.length > 0) { query = query.concat(`&s=${search}`); }
                    if (this.sort.active) {
                        query = query.concat(`&sortName=${this.sort.active}`);
                    }
                    if (this.sort.direction) {
                        query = query.concat(`&sortOrder=${this.sort.direction || "asc"}`);
                    }

                    return this.httpService
                        .getAll<ListDataResponse<Item>>(this.collation, query)
                        .pipe(catchError(() => observableOf(null)));
                }),
                map((res: ListDataResponse<Item> | null) => {
                    // Flip flag to show that loading has finished.
                    this.isLoadingResults = false;
                    this.isRateLimitReached = res === null;

                    if (res === null) {
                        return [];
                    }

                    // Only refresh the result length if there is new data. In case of rate
                    // limit errors, we do not want to reset the paginator to zero, as that
                    // would prevent users from re-triggering requests.
                    this.resultsLength = res.total;
                    console.log("rezultate: ", res.data);
                    return res.data;
                })
            )
            // .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
            .subscribe((data) => this.handleItems(data));
    }

    handleItems(items: Item[]) {
        this.dataSource = new MatTableDataSource(items);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = this.sortingDataAccessor;
        this.dataSource.sort = this.sort;
    }

    deleteItem(id: string) {
        this.httpService.deleteOne(this.collation, id).subscribe({
            next: (res) => {
                console.log(res);
                // this.refreshList();
                //   this.router.navigate(['/tutorials']);
            },
            error: (e) => console.error(e)
        });
    }

    applyFilter(event: Event) {
        console.log("search input event: ", event);
    }

    openAddItemModal() {
        console.log("open addItemModal");
    }

    isObjectValue(val: any): boolean {
        return typeof val === "object";
    }

    sortingDataAccessor(item: any, property: any) {
        if (property.includes(".")) {
            return item[property.split(".")[1]];
        }
        return item[property];
    }

    checkSortValues(column: any) {
        return column.subname !== undefined ? `${column.name}.${column.subname}` : column.name;
    }
}
