import {
  IClient,
  IClientLogin,
  IClientRegister,
  IClientUpdate,
} from "./client.interface";
import { IContact, ICurrentContact, IUpdateContact } from "./contact.interface";
import { IType, IUpdateType } from "./type.interface";

export interface IChildren {
  children: React.ReactNode;
}

export interface IClientContext {
  client: IClient | null;
  setClient: React.Dispatch<React.SetStateAction<IClient | null>>;
  clientLogin: (data: IClientLogin) => Promise<void>;
  clientLogout: () => void;
  clientRegister: (data: IClientRegister) => Promise<void>;
  updateClient: (data: IClientUpdate) => Promise<void>;
  deleteClient: () => Promise<void>;
  showEditClient: boolean;
  setShowEditClient: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IContactContext {
  contact: IContact[] | null;
  showAddContact: boolean;
  setShowAddContact: React.Dispatch<React.SetStateAction<boolean>>;
  showEditContact: boolean;
  setShowEditContact: React.Dispatch<React.SetStateAction<boolean>>;
  currentContact: ICurrentContact | null;
  setCurrentContact: React.Dispatch<
    React.SetStateAction<ICurrentContact | null>
  >;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  createContact: (data: IContact) => Promise<void>;
  updateContact: (data: IUpdateContact, id: string) => Promise<void>;
  deleteContact: (id: string) => Promise<void>;
  filterSearchContact: IContact[] | undefined;
}

export interface ITypeContext {
  type: IType[] | null;
  setType: React.Dispatch<React.SetStateAction<IType[] | null>>;
  showAddType: boolean;
  setShowAddType: React.Dispatch<React.SetStateAction<boolean>>;
  showEditType: boolean;
  setShowEditType: React.Dispatch<React.SetStateAction<boolean>>;
  currentType: IType | null;
  setCurrentType: React.Dispatch<React.SetStateAction<IType | null>>;
  createType: (data: IType) => Promise<void>;
  updateType: (data: IUpdateType, id: string) => Promise<void>;
  deleteType: (id: string) => Promise<void>;
  listType: () => Promise<void>;
}
