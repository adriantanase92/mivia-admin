import {DynamicForm, DynamicFormField} from "./../list-items/list-items.interface";
import {Component, Inject, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DynamicFormGroup, Modal} from "../list-items/list-items.interface";

@Component({
    selector: "app-modal-with-form",
    templateUrl: "./modal-with-form.component.html"
})
export class ModalWithFormComponent implements OnInit {
    myForm!: FormGroup;
    dynamicFormFields!: DynamicFormField[];
    formData!: DynamicForm;
    modalData: Modal;

    constructor(
        private dialogRef: MatDialogRef<ModalWithFormComponent>,
        @Inject(MAT_DIALOG_DATA) data: any,
        private fb: FormBuilder
    ) {
        this.modalData = data;
    }

    getFormFieldsFromFormData(formGroups: DynamicFormGroup[]) {
        return formGroups.flatMap((group) => group.rows.flatMap((row) => row.fields));
    }

    ngOnInit(): void {
        this.myForm = this.fb.group({});
        this.formData = this.modalData.form;
        this.dynamicFormFields = this.getFormFieldsFromFormData(this.modalData.form.groups);

        this.dynamicFormFields.forEach((formItem) => {
            const formControl = this.fb.control(
                {value: formItem.value, disabled: formItem.disabled},
                formItem.validators
            );
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
