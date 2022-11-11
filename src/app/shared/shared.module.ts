import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavComponent} from "./components/nav/nav.component";

import {RouterModule} from "@angular/router";
import {MaterialModule} from "./material/material.module";

@NgModule({
    declarations: [NavComponent, PageNotFoundComponent],
    exports: [NavComponent, PageNotFoundComponent, MaterialModule],
    imports: [RouterModule, CommonModule, MaterialModule]
})
export class SharedModule {}
