import {Component, Input} from "@angular/core";
import {FormGroup, FormGroupDirective} from "@angular/forms";
import {DynamicFormField} from "./dynamic-form-field.interface";

@Component({
    selector: "app-dynamic-form-field",
    templateUrl: "./dynamic-form-field.component.html"
})
export class DynamicFormFieldComponent {
    @Input() formItem!: DynamicFormField;
    form!: FormGroup;

    constructor(private rootFormGroup: FormGroupDirective) {
        this.form = this.rootFormGroup.control;
    }
}
