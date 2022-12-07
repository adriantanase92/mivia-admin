import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavComponent} from "./components/nav/nav.component";

import {RouterModule} from "@angular/router";
import {MaterialModule} from "./material/material.module";
import {ListItemsComponent} from "./components/list-items/list-items.component";
import {SingleItemComponent} from "./components/single-item/single-item.component";
import {DynamicFormFieldComponent} from "./components/dynamic-form-field/dynamic-form-field.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ModalWithFormComponent} from "./components/modal-with-form/modal-with-form.component";
import { DynamicFormErrorComponent } from './components/dynamic-form-error/dynamic-form-error.component';

@NgModule({
    declarations: [
        NavComponent,
        PageNotFoundComponent,
        ListItemsComponent,
        SingleItemComponent,
        DynamicFormFieldComponent,
        ModalWithFormComponent,
        DynamicFormErrorComponent
    ],
    exports: [
        NavComponent,
        PageNotFoundComponent,
        MaterialModule,
        ListItemsComponent,
        SingleItemComponent
    ],
    imports: [RouterModule, CommonModule, ReactiveFormsModule, MaterialModule]
})
export class SharedModule {}
