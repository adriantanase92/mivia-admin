import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

interface ModalData {
    title: string;
    userType: string;
}

@Component({
    selector: "app-add-user-modal",
    templateUrl: "./add-user-modal.component.html"
})
export class AddUserModalComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) private data: ModalData) {}

    ngOnInit(): void {}

    get modalData(): ModalData {
        return this.data;
    }
}
