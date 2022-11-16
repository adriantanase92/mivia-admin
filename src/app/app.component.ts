import {Component} from "@angular/core";

export enum Layouts {
    CentredContent,
    Main
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    title = "admin";
}
