import {Component} from "@angular/core";
import {UsersService} from "../services/users.service";

@Component({
    template: `
        <app-list-items
            [collation]="collation"
            [data]="staffListData"
        ></app-list-items>
    `
})
export class StaffComponent {
    collation = "";
    staffListData: any;

    constructor(private usersService: UsersService) {
        this.collation = this.usersService.colattion;
        this.staffListData = this.usersService.getStaffListData();
    }
}
