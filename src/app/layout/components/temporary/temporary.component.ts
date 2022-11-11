import {Component, OnInit} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NotificationService} from "src/app/core/notifications/notification.service";

@Component({
    templateUrl: "./temporary.component.html"
})
export class TemporaryComponent implements OnInit {
    constructor(public notificationService: NotificationService, private snackBar: MatSnackBar) {}

    openSnackBar(message: string, action: string, className: string) {
        this.snackBar.open(message, action, {
            duration: 0,
            panelClass: [className]
        });
    }

    showAlert() {
        this.notificationService.alert("an alert", "notice", () => {
            this.notificationService.success("alert oked");
        });
    }

    showConfirm() {
        this.notificationService.confirmation(
            "it will be gone forever",
            () => {
                this.notificationService.success("confirm oked");
            },
            "Are you sure?",
            () => {
                this.notificationService.error("confirm canceled");
            }
        );
    }

    ngOnInit(): void {}
}
