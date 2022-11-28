import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class HelpersService {
    constructor() {}

    capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    isObjectValue(val: any): boolean {
        return typeof val === "object";
    }
}
