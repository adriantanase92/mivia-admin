import {Item} from "src/app/core/interfaces/item.interface";
import {Address} from "./address.interface";

export interface User extends Item {
    first_name: string;
    last_name: string;
    phone: string;
    address: Address;
    email: string;
}
