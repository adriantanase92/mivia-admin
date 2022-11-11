import {Injectable} from "@angular/core";
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition
} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {AlertDialogComponent} from "./alert-dialog.component";
import {ConfirmationDialogComponent} from "./confirm-dialog.component";

export type CustomSnackBarOptions = {
    classes?: string;
    duration?: number;
    horizontalPosition?: MatSnackBarHorizontalPosition;
    verticalPosition?: MatSnackBarVerticalPosition;
};

@Injectable({
    providedIn: "root"
})
export class NotificationService {
    constructor(private readonly snackBar: MatSnackBar, public dialog: MatDialog) {}

    /**
     * Presents a toast displaying the message with a green background
     * @param message Message to display
     * @example
     * this.notificationService.success("Confirm oked");
     */
    success(message: string) {
        this.openSnackBar(message, "", {classes: "notification notification--success"});
    }

    /**
     * Presents a toast displaying the message with a red background
     * @param message Message to display
     * @example
     * this.notificationService.error("Confirm canceled");
     */
    error(message: string) {
        this.openSnackBar(message, "", {classes: "notification notification--error"});
    }

    /**
     * Presents a toast displaying the message with an orange background
     * @param message Message to display
     * @example
     * this.notificationService.warn("This action will open a new tab");
     */
    warn(message: string) {
        this.openSnackBar(message, "", {classes: "notification notification--warn"});
    }

    /**
     * Presents a toast displaying the message with a blue background
     * @param message Message to display
     * @example
     * this.notificationService.info("Both doctor and hospital can have their own investigations");
     */
    info(message: string) {
        this.openSnackBar(message, "", {classes: "notification notification--info"});
    }

    /**
     * Shows a confirmation modal, presenting the user with
     * an OK and Cancel button. 
     * @param message Body of the modal
     * @param okCallback Optional function to call when the user clicks Ok
     * @param title Optional modal title
     * @param cancelCallback Option function to call when the user clicks Cancel
     * @example
     * //displays a success or error message depending on what button is clicked.
     * this.notificationService.confirmation(
     * 'it will be gone forever', //message body
     *  () => { //okCallback
            this.notificationService.success("confirm oked");
        }, 'Are you sure?', //title
        () => { //cancelCallback
            this.notificationService.error("confirm canceled");
        });
    */
    confirmation(
        message: string,
        okCallback: () => void,
        title = "Are you sure?",
        cancelCallback: () => any = () => {}
    ) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: "250px",
            data: {message: message, title: title}
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result && okCallback) {
                okCallback();
            }
            if (!result && cancelCallback) {
                cancelCallback();
            }
        });
    }

    /**
     * Shows a modal, presenting the user with an OK button.
     * @param message Body of the modal
     * @param okCallback Optional function to call when the user clicks Ok
     * @param title Optional modal title
     * @example
     * //displays a success when the Ok button is clicked.
     *  this.notificationService.alert("an alert", "notice", () => {
         this.notificationService.success("alert oked");
        });
    */
    alert(message: string, title = "Notice", okCallback: () => void = () => {}) {
        const dialogRef = this.dialog.open(AlertDialogComponent, {
            width: "250px",
            data: {message: message, title: title},
            disableClose: true
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result && okCallback) {
                okCallback();
            }
        });
    }

    /**
     * Displays a toast with provided message
     * @param message Message to display
     * @param action Action text, e.g. Close, Done, etc
     * @param options Options, please see this type CustomSnackBarOptions for details
     */
    openSnackBar(message: string, action: string, options?: CustomSnackBarOptions) {
        const snackBarOptions = {
            duration: options && options.duration ? options.duration : 3500,
            classes:
                options && options.classes && options.classes.length > 0
                    ? options.classes.split(" ")
                    : "",
            horizontalPosition:
                options && options.horizontalPosition ? options.horizontalPosition : "right",
            verticalPosition: options && options.verticalPosition ? options.verticalPosition : "top"
        };
        this.snackBar.open(message, action, {
            duration: snackBarOptions.duration,
            panelClass: snackBarOptions.classes,
            horizontalPosition: snackBarOptions.horizontalPosition,
            verticalPosition: snackBarOptions.verticalPosition
        });
    }
}
