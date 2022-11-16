import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./modules/auth/auth.module";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {UsersModule} from "./modules/users/users.module";
import {InvestigationsModule} from "./modules/investigations/investigations.module";
import {SpecializationsModule} from "./modules/specializations/specializations.module";
import {PlacesModule} from "./modules/places/places.module";
import {SettingsModule} from "./modules/settings/settings.module";
import {HttpClientModule} from "@angular/common/http";
import {ErrorInterceptorProvider} from "./core/interceptors/error.interceptor";
import {LayoutModule} from "./layout/layout.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoreModule,
        SharedModule,
        LayoutModule,
        AuthModule,
        DashboardModule,
        UsersModule,
        InvestigationsModule,
        SpecializationsModule,
        PlacesModule,
        SettingsModule
    ],
    providers: [ErrorInterceptorProvider],
    bootstrap: [AppComponent]
})
export class AppModule {}
