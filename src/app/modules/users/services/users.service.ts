import {DynamicFormGroup} from "./../../../shared/components/list-items/list-items.interface";
import {Injectable} from "@angular/core";
import {Validators} from "@angular/forms";
import {AbstractHttpService} from "src/app/core/http/abstract-http.service";
import {ListItemsData} from "src/app/shared/components/list-items/list-items.interface";

@Injectable({
    providedIn: "root"
})
export class UsersService {
    colattion = "users";

    getUserFormGroups(): DynamicFormGroup[] {
        return [
            {
                name: "Base information:",
                classes: "m-b-md",
                rows: [
                    {
                        classes: "flx-row flx-between-xs",
                        fields: [
                            {
                                id: "firstName",
                                label: "First Name",
                                type: "text",
                                value: null,
                                validators: [
                                    Validators.required,
                                    Validators.minLength(3),
                                    Validators.maxLength(100)
                                ],
                                icon: {
                                    name: "person",
                                    position: "right"
                                },
                                disabled: false,
                                classes: {
                                    columns: "flx-col-xs-4",
                                    field: "form__field form__field--block"
                                }
                            },
                            {
                                id: "lastName",
                                label: "Last Name",
                                type: "text",
                                value: null,
                                validators: [
                                    Validators.required,
                                    Validators.minLength(3),
                                    Validators.maxLength(100)
                                ],
                                icon: {
                                    name: "person",
                                    position: "right"
                                },
                                disabled: false,
                                classes: {
                                    columns: "flx-col-xs-4",
                                    field: "form__field form__field--block"
                                }
                            },
                            {
                                id: "role",
                                label: "Role",
                                type: "select",
                                options: {
                                    manager: "Manager",
                                    operator: "Operator",
                                    doctor: "Doctor",
                                    patient: "Patient",
                                    unclassified: "Unclassified"
                                },
                                value: "doctor",
                                validators: [Validators.required],
                                icon: {
                                    name: "assignment_ind",
                                    position: "right"
                                },
                                disabled: true,
                                classes: {
                                    columns: "flx-col-xs-4",
                                    field: "form__field form__field--block"
                                }
                            }
                        ]
                    },
                    {
                        classes: "flx-row flx-between-xs",
                        fields: [
                            {
                                id: "phone",
                                label: "Phone",
                                type: "text",
                                value: null,
                                validators: [Validators.required],
                                icon: {
                                    name: "phone_iphone",
                                    position: "right"
                                },
                                disabled: false,
                                classes: {
                                    columns: "flx-col-xs-4",
                                    field: "form__field form__field--block"
                                }
                            },
                            {
                                id: "email",
                                label: "Email",
                                type: "email",
                                value: null,
                                validators: [
                                    Validators.required,
                                    Validators.pattern(
                                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                    )
                                ],
                                icon: {
                                    name: "mail",
                                    position: "right"
                                },
                                disabled: false,
                                classes: {
                                    columns: "flx-col-xs-4",
                                    field: "form__field form__field--block"
                                }
                            },
                            {
                                id: "password",
                                label: "Password",
                                type: "password",
                                value: null,
                                validators: [
                                    Validators.required,
                                    Validators.pattern(
                                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/
                                    )
                                ],
                                icon: {
                                    name: "password",
                                    position: "right"
                                },
                                disabled: false,
                                classes: {
                                    columns: "flx-col-xs-4",
                                    field: "form__field form__field--block"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                name: "Address:",
                classes: "m-b-md",
                rows: [
                    {
                        classes: "flx-row flx-between-xs",
                        fields: [
                            {
                                id: "country",
                                label: "Country",
                                type: "text",
                                value: null,
                                validators: [
                                    Validators.required,
                                    Validators.minLength(2),
                                    Validators.maxLength(100)
                                ],
                                icon: {
                                    name: "location_on",
                                    position: "right"
                                },
                                disabled: false,
                                classes: {
                                    columns: "flx-col-xs-4",
                                    field: "form__field form__field--block"
                                }
                            },
                            {
                                id: "county",
                                label: "County",
                                type: "text",
                                value: null,
                                validators: [
                                    Validators.required,
                                    Validators.minLength(2),
                                    Validators.maxLength(100)
                                ],
                                icon: {
                                    name: "location_on",
                                    position: "right"
                                },
                                disabled: false,
                                classes: {
                                    columns: "flx-col-xs-4",
                                    field: "form__field form__field--block"
                                }
                            },
                            {
                                id: "city",
                                label: "City",
                                type: "text",
                                value: null,
                                validators: [
                                    Validators.required,
                                    Validators.minLength(2),
                                    Validators.maxLength(100)
                                ],
                                icon: {
                                    name: "location_on",
                                    position: "right"
                                },
                                disabled: false,
                                classes: {
                                    columns: "flx-col-xs-4",
                                    field: "form__field form__field--block"
                                }
                            }
                        ]
                    },
                    {
                        classes: "flx-row flx-between-xs",
                        fields: [
                            {
                                id: "street",
                                label: "Street",
                                type: "text",
                                value: null,
                                validators: [
                                    Validators.required,
                                    Validators.minLength(2),
                                    Validators.maxLength(100)
                                ],
                                icon: {
                                    name: "location_on",
                                    position: "right"
                                },
                                disabled: false,
                                classes: {
                                    columns: "flx-col-xs-4",
                                    field: "form__field form__field--block"
                                }
                            },
                            {
                                id: "locationNumber",
                                label: "Location Number",
                                type: "number",
                                value: null,
                                validators: [Validators.required, Validators.min(0)],
                                icon: {
                                    name: "location_on",
                                    position: "right"
                                },
                                disabled: false,
                                classes: {
                                    columns: "flx-col-xs-4",
                                    field: "form__field form__field--block"
                                }
                            },
                            {
                                id: "zipCode",
                                label: "Zip Code",
                                type: "text",
                                value: null,
                                validators: [
                                    Validators.required,
                                    Validators.minLength(2),
                                    Validators.maxLength(100)
                                ],
                                icon: {
                                    name: "location_on",
                                    position: "right"
                                },
                                disabled: false,
                                classes: {
                                    columns: "flx-col-xs-4",
                                    field: "form__field form__field--block"
                                }
                            }
                        ]
                    }
                ]
            }
        ];
    }

    getDoctorsListData(): ListItemsData {
        return {
            pageTitle: "Doctors",
            searchLabel: "Search doctors",
            type: "doctor",
            single: "doctor",
            plural: "doctors",
            tableColumns: [
                {
                    name: "position",
                    label: "No.",
                    sticky: true,
                    sortable: false
                },
                {
                    name: "full_name",
                    label: "Full Name",
                    sticky: true,
                    sortable: true
                },
                {
                    name: "doctor",
                    subname: "specializations",
                    label: "Specializations",
                    sticky: false,
                    sortable: true
                },
                {
                    name: "email",
                    label: "Email",
                    sticky: false,
                    sortable: true
                },
                {
                    name: "phone",
                    label: "Phone",
                    sticky: false,
                    sortable: true
                },
                {
                    name: "actions",
                    label: "Actions",
                    sticky: false,
                    sortable: false,
                    singleRouteUrl: "/users/doctor"
                }
            ],
            addItemBtn: "Add doctor",
            modal: {
                title: "Add doctor",
                closeBtn: "Cancel",
                actionBtn: "Save",
                form: {
                    classes: "form",
                    groups: [...this.getUserFormGroups()]
                }
            }
        };
    }

    getPatientsListData(): ListItemsData {
        return {
            pageTitle: "Patients",
            searchLabel: "Search patients",
            type: "patient",
            single: "patient",
            plural: "patients",
            tableColumns: [
                {
                    name: "position",
                    label: "No.",
                    sticky: true,
                    sortable: false
                },
                {
                    name: "full_name",
                    label: "Full Name",
                    sticky: true,
                    sortable: true
                },
                {
                    name: "email",
                    label: "Email",
                    sticky: false,
                    sortable: true
                },
                {
                    name: "phone",
                    label: "Phone",
                    sticky: false,
                    sortable: false
                },
                {
                    name: "actions",
                    label: "Actions",
                    sticky: false,
                    sortable: false,
                    singleRouteUrl: "/users/patient"
                }
            ],
            addItemBtn: "Add patient",
            modal: {
                title: "Add patient",
                closeBtn: "Cancel",
                actionBtn: "Save",
                form: {
                    classes: "form",
                    groups: [...this.getUserFormGroups()]
                }
            }
        };
    }

    getStaffListData(): ListItemsData {
        return {
            pageTitle: "Staff",
            searchLabel: "Search staff members",
            type: "staff",
            single: "staff member",
            plural: "staff members",
            tableColumns: [
                {
                    name: "position",
                    label: "No.",
                    sticky: true,
                    sortable: false
                },
                {
                    name: "full_name",
                    label: "Full Name",
                    sticky: true,
                    sortable: true
                },
                {
                    name: "email",
                    label: "Email",
                    sticky: false,
                    sortable: true
                },
                {
                    name: "phone",
                    label: "Phone",
                    sticky: false,
                    sortable: false
                },
                {
                    name: "actions",
                    label: "Actions",
                    sticky: false,
                    sortable: false,
                    singleRouteUrl: "/users/patient"
                }
            ],
            addItemBtn: "Add staff member",
            modal: {
                title: "Add staff member",
                closeBtn: "Cancel",
                actionBtn: "Save",
                form: {
                    classes: "form",
                    groups: [...this.getUserFormGroups()]
                }
            }
        };
    }

    constructor(private httpService: AbstractHttpService) {}
}
