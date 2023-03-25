import { IClient, IClientLogin, IClientRegister } from "./client.interface";

export interface IChildren {
    children: React.ReactNode;
}

export interface iClientContext {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    client: IClient | null;
    setClient: React.Dispatch<React.SetStateAction<IClient | null>>;
    clientLogin: (data: IClientLogin) => Promise<void>;
    clientLogout: () => void;
    clientRegister: (data: IClientRegister) => Promise<void>;
  }