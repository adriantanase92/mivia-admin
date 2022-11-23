import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavComponent} from "./components/nav/nav.component";

import {RouterModule} from "@angular/router";
import {MaterialModule} from "./material/material.module";
import {ListItemsComponent} from "./components/list-items/list-items.component";
import {SingleItemComponent} from "./components/single-item/single-item.component";

@NgModule({
    declarations: [NavComponent, PageNotFoundComponent, ListItemsComponent, SingleItemComponent],
    exports: [
        NavComponent,
        PageNotFoundComponent,
        MaterialModule,
        ListItemsComponent,
        SingleItemComponent
    ],
    imports: [RouterModule, CommonModule, MaterialModule]
})
export class SharedModule {}
