import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {MiscComponent} from "./misc/misc.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {CenteredContentLayoutComponent} from "./centered-content-layout/centered-content-layout.component";

@NgModule({
    declarations: [MiscComponent, MainLayoutComponent, CenteredContentLayoutComponent],
    imports: [CommonModule, SharedModule]
})
export class LayoutModule {}
