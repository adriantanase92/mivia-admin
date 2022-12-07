import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DoctorsComponent} from "./pages/doctors.component";
import {StaffComponent} from "./pages/staff.component";
import {SharedModule} from "src/app/shared/shared.module";
import {DoctorComponent} from "./pages/doctor/doctor.component";
import {PatientsComponent} from "./pages/patients.component";
import {AddUserFormComponent} from "./components/add-user-form/add-user-form.component";
import {AddUserModalComponent} from "./components/add-user-modal/add-user-modal.component";
import {ReactiveFormsModule} from "@angular/forms";
import {QuickEditUserModalComponent} from "./components/quick-edit-user-modal/quick-edit-user-modal.component";
import {QuickEditUserFormComponent} from "./components/quick-edit-user-form/quick-edit-user-form.component";
import {UsersRoutingModule} from "./users-routing-routing.module";
import {LayoutComponent} from "./components/layout/layout.component";

@NgModule({
    declarations: [
        DoctorsComponent,
        StaffComponent,
        DoctorComponent,
        PatientsComponent,
        AddUserFormComponent,
        AddUserModalComponent,
        QuickEditUserModalComponent,
        QuickEditUserFormComponent,
        LayoutComponent
    ],
    imports: [CommonModule, RouterModule, SharedModule, ReactiveFormsModule, UsersRoutingModule]
})
export class UsersModule {}
