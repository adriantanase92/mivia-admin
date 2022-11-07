import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Observable} from "rxjs";

@Component({
    templateUrl: "./doctor.component.html"
})
export class DoctorComponent implements OnInit {
    id: string | null = "";
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.id = params.get("id");
        });
    }
}
