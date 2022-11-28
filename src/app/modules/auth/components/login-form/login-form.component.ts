import {Component} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {UsernameValidators} from "./username.validators";

@Component({
    selector: "app-login-form",
    templateUrl: "./login-form.component.html"
})
export class LoginFormComponent {
    hide = true;
    form;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            account: fb.group({
                username: [
                    "",
                    [
                        Validators.required,
                        Validators.minLength(3),
                        UsernameValidators.cannotContainSpace
                    ],
                    UsernameValidators.shouldBeUnique
                ],
                password: ["", Validators.required]
            })
        });
    }

    get username() {
        return this.form.get("account.username");
    }

    login() {
        this.form.setErrors({
            invalidLogin: true
        });
    }
}
