import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./components/layout/layout.component";
import {DoctorComponent} from "./pages/doctor/doctor.component";
import {DoctorsComponent} from "./pages/doctors.component";
import {PatientsComponent} from "./pages/patients.component";
import {StaffComponent} from "./pages/staff.component";

const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {path: "staff", component: StaffComponent, pathMatch: "full"},
            {path: "patients", component: PatientsComponent, pathMatch: "full"},
            {path: "doctors", component: DoctorsComponent, pathMatch: "full"},
            {path: "doctor/:id", component: DoctorComponent, pathMatch: "full"}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
