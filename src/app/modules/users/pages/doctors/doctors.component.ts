import {Component, AfterViewInit, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {AddUserModalComponent} from "../../components/add-user-modal/add-user-modal.component";
import {QuickEditUserModalComponent} from "../../components/quick-edit-user-modal/quick-edit-user-modal.component";

export interface UserData {
    id: string;
    fullName: string;
    specializations: string[];
    email: string;
    phone: string;
}

@Component({
    templateUrl: "./doctors.component.html"
})
export class DoctorsComponent implements AfterViewInit {
    displayedColumns: string[] = [
        "position",
        "fullName",
        "specializations",
        "email",
        "phone",
        "actions"
    ];
    doctors = [
        {
            id: "1",
            fullName: "FirstNameDoctor1 LastNameDoctor1",
            specializations: ["cardiology", "cardiac surgery"],
            email: "namedoctor1@gmail.com",
            phone: "0770 234 521"
        },
        {
            id: "2",
            fullName: "FirstNameDoctor2 LastNameDoctor2",
            specializations: ["cardiology", "cardiac surgery"],
            email: "namedoctor2@gmail.com",
            phone: "0770 234 521"
        },
        {
            id: "3",
            fullName: "FirstNameDoctor3 LastNameDoctor3",
            specializations: ["pediatrics"],
            email: "namedoctor3@gmail.com",
            phone: "0770 234 521"
        },
        {
            id: "4",
            fullName: "FirstNameDoctor4 LastNameDoctor4",
            specializations: ["pediatrics"],
            email: "namedoctor4@gmail.com",
            phone: "0770 244 521"
        },
        {
            id: "5",
            fullName: "FirstNameDoctor5 LastNameDoctor5",
            specializations: ["pediatrics"],
            email: "namedoctor5@gmail.com",
            phone: "0770 254 521"
        },
        {
            id: "6",
            fullName: "FirstNameDoctor6 LastNameDoctor6",
            specializations: ["pediatrics"],
            email: "namedoctor6@gmail.com",
            phone: "0770 264 521"
        },
        {
            id: "7",
            fullName: "FirstNameDoctor7 LastNameDoctor7",
            specializations: ["pediatrics"],
            email: "namedoctor7@gmail.com",
            phone: "0770 274 521"
        },
        {
            id: "8",
            fullName: "FirstNameDoctor8 LastNameDoctor8",
            specializations: ["pediatrics"],
            email: "namedoctor8@gmail.com",
            phone: "0770 284 521"
        },
        {
            id: "9",
            fullName: "FirstNameDoctor1 LastNameDoctor1",
            specializations: ["cardiology", "cardiac surgery"],
            email: "namedoctor1@gmail.com",
            phone: "0770 234 521"
        },
        {
            id: "10",
            fullName: "FirstNameDoctor2 LastNameDoctor2",
            specializations: ["cardiology", "cardiac surgery"],
            email: "namedoctor2@gmail.com",
            phone: "0770 234 521"
        },
        {
            id: "11",
            fullName: "FirstNameDoctor3 LastNameDoctor3",
            specializations: ["pediatrics"],
            email: "namedoctor3@gmail.com",
            phone: "0770 234 521"
        },
        {
            id: "12",
            fullName: "FirstNameDoctor4 LastNameDoctor4",
            specializations: ["pediatrics"],
            email: "namedoctor4@gmail.com",
            phone: "0770 244 521"
        },
        {
            id: "13",
            fullName: "FirstNameDoctor5 LastNameDoctor5",
            specializations: ["pediatrics"],
            email: "namedoctor5@gmail.com",
            phone: "0770 254 521"
        },
        {
            id: "14",
            fullName: "FirstNameDoctor6 LastNameDoctor6",
            specializations: ["pediatrics"],
            email: "namedoctor6@gmail.com",
            phone: "0770 264 521"
        },
        {
            id: "15",
            fullName: "FirstNameDoctor7 LastNameDoctor7",
            specializations: ["pediatrics"],
            email: "namedoctor7@gmail.com",
            phone: "0770 274 521"
        },
        {
            id: "16",
            fullName: "FirstNameDoctor8 LastNameDoctor8",
            specializations: ["pediatrics"],
            email: "namedoctor8@gmail.com",
            phone: "0770 284 521"
        }
    ];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
    @ViewChild(MatSort) sort: MatSort | null = null;

    constructor(public modal: MatDialog) {
        this.dataSource = new MatTableDataSource(this.doctors);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    openAddUserModal() {
        this.modal.open(AddUserModalComponent, {
            data: {
                title: "Add new doctor",
                userType: "doctor"
            }
        });
    }

    openQuickEditUserModal(selectedUser: UserData) {
        this.modal.open(QuickEditUserModalComponent, {
            data: {
                ...selectedUser
            }
        });
    }
}
