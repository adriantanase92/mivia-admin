import {TemporaryComponent} from "./layout/components/temporary/temporary.component";
import {DashboardComponent} from "./modules/dashboard/pages/dashboard/dashboard.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./modules/auth/pages/login/login.component";
import {InvestigationsComponent} from "./modules/investigations/pages/investigations/investigations.component";
import {SpecializationsComponent} from "./modules/specializations/pages/specializations/specializations.component";
import {PlacesComponent} from "./modules/places/pages/places/places.component";
import {SettingsComponent} from "./modules/settings/pages/settings/settings.component";
import {PageNotFoundComponent} from "./shared/pages/page-not-found/page-not-found.component";

const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "settings", component: SettingsComponent},
    {path: "investigations", component: InvestigationsComponent},
    {path: "specializations", component: SpecializationsComponent},
    {path: "places", component: PlacesComponent},
    {
        path: "users",
        loadChildren: () => import("./modules/users/users.module").then((m) => m.UsersModule)
    },
    {path: "temporary", component: TemporaryComponent},
    {path: "**", component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
