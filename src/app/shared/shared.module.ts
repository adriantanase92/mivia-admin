import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavComponent} from "./components/nav/nav.component";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [NavComponent, PageNotFoundComponent],
    exports: [
        NavComponent,
        PageNotFoundComponent,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatSelectModule,
        MatMenuModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatSelectModule,
        MatMenuModule
    ]
})
export class SharedModule {}
