import { IType } from "./type.interface";

export interface IContact {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    cellPhone: string;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
    type: IType;
}
  
export interface ICreateContact {
    firstName: string;
    lastName: string;
    email: string;
    cellPhone: string;
    image?: string;
}

export interface IUpdateContact {
    firstName?: string;
    lastName?: string;
    email?: string;
    cellPhone?: string;
    image?: string;
}
  