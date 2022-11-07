import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface UserData {
    id: string;
    fullName: string;
    specializations: string[];
    email: string;
    phone: string;
}

@Component({
    selector: "app-quick-edit-user-modal",
    templateUrl: "./quick-edit-user-modal.component.html"
})
export class QuickEditUserModalComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) private data: UserData) {}

    ngOnInit(): void {}

    get modalData(): UserData {
        return this.data;
    }
}
