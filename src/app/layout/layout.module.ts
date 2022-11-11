import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import { TemporaryComponent } from './components/temporary/temporary.component';

@NgModule({
    declarations: [
    TemporaryComponent
  ],
    imports: [CommonModule, SharedModule]
})
export class LayoutModule {}
