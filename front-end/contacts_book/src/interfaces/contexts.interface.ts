import { IClient, IClientLogin, IClientRegister } from "./client.interface";
import { IContact, ICreateContact, IUpdateContact } from "./contact.interface";
import { ICreateType, IType } from "./type.interface";

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
  contact: IContact[] | null;
  setContact: React.Dispatch<React.SetStateAction<IContact[] | null>>;
  showAddContact: boolean;
  setShowAddContact: React.Dispatch<React.SetStateAction<boolean>>;
  showEditContact: boolean;
  setShowEditContact: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteContact: boolean;
  setShowDeleteContact: React.Dispatch<React.SetStateAction<boolean>>;
  createContact: (data: IContact) => Promise<void>;
  // updateContact: (data: IUpdateContact, id: string) => Promise<void>;
  // deleteContact: (id: string) => Promise<void>;
}

export interface ITypeContext {
  type: IType[] | null;
  setType: React.Dispatch<React.SetStateAction<IType[] | null>>;
  showAddType: boolean;
  setShowAddType: React.Dispatch<React.SetStateAction<boolean>>;
  showEditType: boolean;
  setShowEditType: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteType: boolean;
  setShowDeleteType: React.Dispatch<React.SetStateAction<boolean>>;
  createType: (data: IType) => Promise<void>;
  // updateType: (data: IUpdateType, id: string) => Promise<void>;
  // deleteType: (id: string) => Promise<void>;
}
