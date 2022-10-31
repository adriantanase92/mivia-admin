import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {PublicRoutingModule} from "./public-routing.module";
import {PublicComponent} from "./public.component";
import {SharedModule} from "src/app/shared/shared.module";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [PublicComponent, NotFoundComponent, LoginComponent],
    imports: [CommonModule, PublicRoutingModule, SharedModule]
})
export class PublicModule {}
