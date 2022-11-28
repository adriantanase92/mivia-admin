import {Component, Inject, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DynamicFormField} from "../dynamic-form-field/dynamic-form-field.interface";

@Component({
    selector: "app-modal-with-form",
    templateUrl: "./modal-with-form.component.html"
})
export class ModalWithFormComponent implements OnInit {
    myForm!: FormGroup;
    dynamicFormFields!: DynamicFormField[];

    constructor(
        private dialogRef: MatDialogRef<ModalWithFormComponent>,
        @Inject(MAT_DIALOG_DATA) data: any,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.myForm = this.fb.group({});
        this.dynamicFormFields = [
            {
                id: "dynamicSelect",
                label: "My label",
                type: "select",
                options: {
                    item1: "Item 1",
                    item2: "Item 2",
                    item3: "Item 3",
                    item4: "Item 4"
                },
                value: null
            },
            {
                id: "dynamicText",
                label: "My label2",
                type: "text",
                value: null,
                validators: [Validators.required],
                icon: {
                    name: "phone",
                    position: "right"
                }
            },
            {
                id: "dynamicText2",
                label: "My label3",
                type: "text",
                value: null,
                icon: {
                    name: "phone",
                    position: "left"
                }
            }
        ];

        this.dynamicFormFields.forEach((formItem) => {
            const formControl = this.fb.control(formItem.value, formItem.validators);
            this.myForm.addControl(formItem.id, formControl);
        });
    }

    save() {
        // this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }
}
