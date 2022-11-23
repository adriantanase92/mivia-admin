import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: "app-add-user-form",
    templateUrl: "./add-user-form.component.html"
})
export class AddUserFormComponent implements OnInit {
    roles = [
        {name: "manager", id: "6358485c829c6b2446a29a01"},
        {name: "operator", id: "6358485c829c6b2446a29a02"},
        {name: "doctor", id: "6358485c829c6b2446a29a03"},
        {name: "patient", id: "6358485c829c6b2446a29a04"},
        {name: "unclassified", id: "6358485c829c6b2446a29a05"}
    ];
    form;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            firstName: [
                "",
                [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
            ],
            lastName: [
                "",
                [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
            ],
            phone: ["", Validators.required],
            email: [
                "",
                [
                    Validators.required,
                    Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                ]
            ],
            password: [
                "",
                [
                    Validators.required,
                    Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/)
                ]
            ],
            role: ["", Validators.required],
            address: fb.group({
                country: [
                    "",
                    [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
                ],
                county: [
                    "",
                    [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
                ],
                city: [
                    "",
                    [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
                ],
                street: [
                    "",
                    [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
                ],
                locationNumber: [null, [Validators.required, Validators.min(0)]],
                zipCode: [
                    "",
                    [Validators.required, Validators.minLength(2), Validators.maxLength(100)]
                ]
            })
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

    get password() {
        return this.form.get("password");
    }

    get role() {
        return this.form.get("role");
    }

    get country() {
        return this.form.get("address.country");
    }

    get county() {
        return this.form.get("address.county");
    }

    get city() {
        return this.form.get("address.city");
    }

    get street() {
        return this.form.get("address.street");
    }

    get locationNumber() {
        return this.form.get("address.locationNumber");
    }

    get zipCode() {
        return this.form.get("address.zipCode");
    }

    addUser() {}

    ngOnInit(): void {}
}
