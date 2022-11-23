import {Component} from "@angular/core";
import {UsersService} from "../../services/users.service";

@Component({
    templateUrl: "./doctors.component.html"
})
export class DoctorsComponent {
    collation = "";
    doctorsListData: any;

    constructor(private usersService: UsersService) {
        this.collation = this.usersService.colattion;
        this.doctorsListData = this.usersService.doctorsListData;
    }
}
