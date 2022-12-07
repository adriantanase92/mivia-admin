import {Component} from "@angular/core";
import {UsersService} from "../services/users.service";

@Component({
    template: `
        <app-list-items
            [collation]="collation"
            [data]="doctorsListData"
        ></app-list-items>
    `
})
export class DoctorsComponent {
    collation = "";
    doctorsListData: any;

    constructor(private usersService: UsersService) {
        this.collation = this.usersService.colattion;
        this.doctorsListData = this.usersService.getDoctorsListData();
    }
}
