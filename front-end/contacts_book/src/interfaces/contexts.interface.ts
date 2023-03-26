import { IClient, IClientLogin, IClientRegister } from "./client.interface";
import { IContact, ICreateContact, IUpdateContact } from "./contact.interface";

export interface IChildren {
    children: React.ReactNode;
}

export interface IClientContext {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    client: IClient | null;
    setClient: React.Dispatch<React.SetStateAction<IClient | null>>;
    clientLogin: (data: IClientLogin) => Promise<void>;
    clientLogout: () => void;
    clientRegister: (data: IClientRegister) => Promise<void>;
}

export interface IContactContext {
    contact: IContact | null;
    setContact: React.Dispatch<React.SetStateAction<IContact | null>>;
    // listContact: () => void;
    // createContact: (data: ICreateContact) => Promise<void>;
    // updateContact: (data: IUpdateContact, id: string) => Promise<void>;
    // deleteContact: (id: string) => Promise<void>;
}