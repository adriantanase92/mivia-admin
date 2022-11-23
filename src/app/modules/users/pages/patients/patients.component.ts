import {UsersService} from "./../../services/users.service";
import {Component} from "@angular/core";

@Component({
    templateUrl: "./patients.component.html"
})
export class PatientsComponent {
    collation = "";
    patientsListData: any;

    constructor(private usersService: UsersService) {
        this.collation = this.usersService.colattion;
        this.patientsListData = this.usersService.patientsListData;
    }
}
