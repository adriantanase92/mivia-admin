import {Component} from "@angular/core";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";

@Component({
    selector: "app-nav",
    templateUrl: "./nav.component.html"
})
export class NavComponent {
    darkTheme = false;
    menuItems = [
        {name: "Dashboard", url: "dashboard", iconName: "dashboard_customize"},
        {name: "Patients", url: "users/patients", iconName: "personal_injury"},
        {name: "Doctors", url: "users/doctors", iconName: "medical_information"},
        {name: "Staff", url: "users/staff", iconName: "group"},
        {name: "Investigations", url: "investigations", iconName: "vaccines"},
        {name: "Specializations", url: "specializations", iconName: "medical_services"},
        {name: "Places", url: "places", iconName: "location_city"}
    ];

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map((result) => result.matches),
        shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver) {}
}
