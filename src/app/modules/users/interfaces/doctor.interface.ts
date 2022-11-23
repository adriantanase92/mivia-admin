import {Investigation} from "./../../investigations/interfaces/investigation.interface";
import {Specialization} from "./../../specializations/interfaces/specialization.interface";
import {User} from "./user.interface";

interface DoctorInvestigation extends Investigation {
    custom_price?: boolean;
}

export interface Doctor extends User {
    specializations: Specialization[];
    investigations?: DoctorInvestigation[];
}
