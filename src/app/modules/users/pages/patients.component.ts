import {UsersService} from "../services/users.service";
import {Component} from "@angular/core";

@Component({
    template: `
        <app-list-items
            [collation]="collation"
            [data]="patientsListData"
        ></app-list-items>
    `
})
export class PatientsComponent {
    collation = "";
    patientsListData: any;

    constructor(private usersService: UsersService) {
        this.collation = this.usersService.colattion;
        this.patientsListData = this.usersService.getPatientsListData();
    }
}
