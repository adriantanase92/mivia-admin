import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./components/layout/layout.component";
import {DoctorComponent} from "./pages/doctor/doctor.component";
import {DoctorsComponent} from "./pages/doctors/doctors.component";
import {PatientsComponent} from "./pages/patients/patients.component";
import {StaffComponent} from "./pages/staff/staff.component";

const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {path: "staff", component: StaffComponent},
            {path: "patients", component: PatientsComponent},
            {path: "doctors", component: DoctorsComponent},
            {path: "doctor/:id", component: DoctorComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
