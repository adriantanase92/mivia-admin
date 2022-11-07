import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./pages/login/login.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "src/app/shared/shared.module";

@NgModule({
    declarations: [LoginComponent, LoginFormComponent],
    imports: [ReactiveFormsModule, CommonModule, SharedModule]
})
export class AuthModule {}
