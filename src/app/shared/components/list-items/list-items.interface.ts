import {ValidatorFn} from "@angular/forms";

export interface TableColumn {
    name: string;
    subname?: string;
    label: string;
    sticky: boolean;
    sortable: boolean;
    singleRouteUrl?: string;
}

export interface DynamicFieldIconOptions {
    position: "left" | "right";
    name: string;
}

export interface DynamicFormField {
    id: string;
    label: string;
    type:
        | "tel"
        | "number"
        | "text"
        | "password"
        | "email"
        | "radio"
        | "checkbox"
        | "textarea"
        | "select";
    value: string | number | null;
    validators: ValidatorFn[];
    icon?: DynamicFieldIconOptions;
    disabled: boolean;
    options?: {[key: string]: string};
    classes: {
        columns: string;
        field: string;
    };
}

export interface DynamicFormGroup {
    name: string;
    classes: string;
    rows: DynamicFormGroupRow[];
}

export interface DynamicFormGroupRow {
    classes: string;
    fields: DynamicFormField[];
}

export interface DynamicForm {
    classes: string;
    groups: DynamicFormGroup[];
}

export interface Modal {
    title: string;
    closeBtn: string;
    actionBtn: string;
    form: DynamicForm;
}

export interface ListItemsData {
    pageTitle: string;
    searchLabel: string;
    type?: string;
    single: string;
    plural: string;
    tableColumns: TableColumn[];
    addItemBtn: string;
    modal: Modal;
}
