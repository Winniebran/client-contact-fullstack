import { createContext, useState } from "react";
import { useNavigate } from "react-router";

import {
  IClient,
  IClientLogin,
  IClientRegister,
} from "../interfaces/client.interface";
import { IChildren, IClientContext } from "../interfaces/contexts.interface";
import { ApiRequests } from "../services/ApiRequest";
import toast from "react-hot-toast";

export const ClientContext = createContext({} as IClientContext);

export const ClientProvider = ({ children }: IChildren) => {
  const [client, setClient] = useState<IClient | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const clientRegister = async (data: IClientRegister) => {
    try {
      setLoading(true);
      await ApiRequests.post("/client", data);
      navigate("/");
      toast.success("Cadastro realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("E-mail já cadastrado");
    } finally {
      setLoading(false);
    }
  };

  const clientLogin = async (data: IClientLogin) => {
    try {
      setLoading(true);
      const response = await ApiRequests.post("/login", data);
      localStorage.setItem("@contactland:token", response.data.token);
      setClient(response.data);
      navigate("/dashboard");
      toast.success("Login realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Email e/ou senha são inválidos");
    } finally {
      setLoading(false);
    }
  };

  const clientLogout = () => {
    setClient(null);

    localStorage.removeItem("@contactland:token");
  };

  return (
    <ClientContext.Provider
      value={{
        loading,
        setLoading,
        client,
        setClient,
        clientLogin,
        clientLogout,
        clientRegister,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
