import {NgModule, Optional, SkipSelf} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AbstractHttpService} from "./http/abstract-http.service";
import {NotificationService} from "./notifications/notification.service";

@NgModule({
    declarations: [],
    providers: [AbstractHttpService, NotificationService],
    imports: [CommonModule]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error("CoreModule is already loaded. Import it in the AppModule only.");
        }
    }
}
