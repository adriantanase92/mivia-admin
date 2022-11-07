import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: "app-quick-edit-user-form",
    templateUrl: "./quick-edit-user-form.component.html"
})
export class QuickEditUserFormComponent implements OnInit {
    user = {
        firstName: "FirstNameDoctor1",
        lastName: "LastNameDoctor1",
        phone: "0770564123",
        email: "asd@asda.com"
    };

    form;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            firstName: [
                this.user.firstName,
                [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
            ],
            lastName: [
                this.user.lastName,
                [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
            ],
            phone: [this.user.phone, Validators.required],
            email: [
                this.user.email,
                [
                    Validators.required,
                    Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                ]
            ]
        });
    }

    get firstName() {
        return this.form.get("firstName");
    }

    get lastName() {
        return this.form.get("lastName");
    }

    get phone() {
        return this.form.get("phone");
    }

    get email() {
        return this.form.get("email");
    }

    quickEditUser() {}

    ngOnInit(): void {}
}
