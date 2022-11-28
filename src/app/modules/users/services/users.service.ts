import {Injectable} from "@angular/core";
import {AbstractHttpService} from "src/app/core/http/abstract-http.service";

@Injectable({
    providedIn: "root"
})
export class UsersService {
    colattion = "users";
    doctorsListData = {
        searchLabel: "Search doctors",
        type: "doctor",
        single: "doctor",
        plural: "doctors",
        tableColumnsData: [
            {
                name: "position",
                label: "No.",
                sticky: true,
                sortable: false
            },
            {
                name: "full_name",
                label: "Full Name",
                sticky: true,
                sortable: true
            },
            {
                name: "doctor",
                subname: "specializations",
                label: "Specializations",
                sticky: false,
                sortable: true
            },
            {
                name: "email",
                label: "Email",
                sticky: false,
                sortable: true
            },
            {
                name: "phone",
                label: "Phone",
                sticky: false,
                sortable: true
            },
            {
                name: "actions",
                label: "Actions",
                sticky: false,
                sortable: false,
                singleRouteUrl: "/users/doctor"
            }
        ]
    };
    patientsListData = {
        type: "patient",
        tableColumnsData: [
            {
                name: "position",
                label: "No.",
                sticky: true,
                sortable: false
            },
            {
                name: "full_name",
                label: "Full Name",
                sticky: true,
                sortable: true
            },
            {
                name: "email",
                label: "Email",
                sticky: false,
                sortable: true
            },
            {
                name: "phone",
                label: "Phone",
                sticky: false,
                sortable: false
            },
            {
                name: "actions",
                label: "Actions",
                sticky: false,
                sortable: false,
                singleRouteUrl: "/users/patient"
            }
        ]
    };

    constructor(private httpService: AbstractHttpService) {}
}
