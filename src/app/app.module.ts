import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {MatSliderModule} from "@angular/material/slider";
import {PrivateModule} from "./modules/private/private.module";
import {PublicModule} from "./modules/public/public.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        MatSliderModule,
        PublicModule,
        PrivateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
