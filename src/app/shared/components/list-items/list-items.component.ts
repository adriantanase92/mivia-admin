import {HelpersService} from "./../../../core/services/helpers.service";
import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AbstractHttpService} from "src/app/core/http/abstract-http.service";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    finalize,
    fromEvent,
    merge,
    tap,
    throwError
} from "rxjs";
import {NotificationService} from "src/app/core/notifications/notification.service";
import {ModalWithFormComponent} from "../modal-with-form/modal-with-form.component";
import {ListItemsData} from "./list-items.interface";

@Component({
    selector: "app-list-items",
    templateUrl: "./list-items.component.html"
})
export class ListItemsComponent implements OnInit, AfterViewInit {
    @Input() collation: string = "";
    @Input() data!: ListItemsData;

    displayedColumns: string[] = [];
    items: any[] = [];
    loading = false;
    resultsLength = 0;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild("search") search!: ElementRef;

    constructor(
        private httpService: AbstractHttpService,
        public modal: MatDialog,
        public helpersService: HelpersService,
        public notificationService: NotificationService
    ) {}

    ngOnInit(): void {
        this.displayedColumns = this.data.tableColumns.map((column) => column.name);
        this.loadItemsPage();
    }

    ngAfterViewInit(): void {
        // server-side search
        fromEvent(this.search.nativeElement, "keyup")
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;
                    this.loadItemsPage();
                })
            )
            .subscribe();

        // reset the paginator after sorting
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 1));

        // on sort or paginate events, load a new page
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(tap(() => this.loadItemsPage()))
            .subscribe();
    }

    loadItemsPage() {
        this.loading = true;
        const page = (this.paginator?.pageIndex ?? 0) + 1;
        let params: any = {page, limit: this.paginator?.pageSize ?? 10};
        if (this.data?.type !== undefined) {
            params["type"] = this.data.type;
        }
        if (
            this.search?.nativeElement !== undefined &&
            this.search?.nativeElement.value.length > 2
        ) {
            params["search"] = this.search.nativeElement.value;
        }
        if (this.sort?.active !== undefined) {
            params["sortName"] = this.sort?.active ?? "";
            params["sortOrder"] = this.sort?.direction ?? "asc";
        }

        this.httpService
            .getAll(this.collation, params)
            .pipe(
                tap((res: any) => {
                    this.items = res.data;
                    this.resultsLength = res.total;
                }),
                catchError((err) => {
                    console.log("Error loading items", err);
                    alert("Error loading items.");
                    return throwError(err);
                }),
                finalize(() => (this.loading = false))
            )
            .subscribe();
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

    deleteItem(id: string) {
        this.httpService.deleteOne(this.collation, id).subscribe({
            next: (res) => {
                console.log(res);
                this.notificationService.success(
                    `${this.helpersService.capitalize(this.data.single)} deleted successfully`
                );
                this.loadItemsPage();
            },
            error: (e) => console.error(e)
        });
    }

    openAddItemModal() {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = this.data.modal;

        this.modal.open(ModalWithFormComponent, dialogConfig);
    }
}
