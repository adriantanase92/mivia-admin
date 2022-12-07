import {Component, Input} from "@angular/core";
// import {FormControl} from "@angular/forms";

@Component({
    selector: "app-dynamic-form-error",
    templateUrl: "./dynamic-form-error.component.html",
    styles: [
        `
            :host {
                display: contents;
            }
        `
    ]
})
export class DynamicFormErrorComponent {
    @Input() ctrl!: any;

    errorMessages: any = {
        required: () => `This field is required.`,
        minlength: (par: any) =>
            `This field should have a minimum of ${par.requiredLength} characters.`,
        maxLength: (par: any) =>
            `This field should have a maximum of ${par.requiredLength} characters.`,
        min: (par: any) => `This field should be minimum ${par.min} characters.`
    };

    constructor() {}

    shouldShowErrors(): boolean | null {
        return this.ctrl && this.ctrl.errors && this.ctrl.touched;
    }

    listOfErrors(): string[] {
        return Object.keys(this.ctrl.errors || {}).map((err) =>
            this.errorMessages[err](this.ctrl.getError(err))
        );
    }
}
