import {ValidatorFn} from "@angular/forms";

interface FieldIconOptions {
    position: "left" | "right";
    name: string;
}

export interface DynamicFormField {
    id: string;
    type: "tel" | "text" | "password" | "email" | "radio" | "checkbox" | "textarea" | "select";
    label: string;
    value: null | string;
    options?: {[key: string]: string};
    validators?: ValidatorFn[];
    icon?: FieldIconOptions;
}
