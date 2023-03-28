import { createContext, useEffect, useState } from "react";
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
      const response = await ApiRequests.post("/client", data);
      navigate("/");
      setClient(response.data);
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
      const response = await ApiRequests.post("/login", data);
      localStorage.setItem("@contactland:token", response.data.token);
      const contacts = await ApiRequests.get("/contacts", {
        headers: { Authorization: `Bearer ${response.data.token}` },
      });
      localStorage.setItem("@contactland:contact", JSON.stringify(contacts.data))
      await profile();
      toast.success("Login realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Email e/ou senha são inválidos");
    }
  };

  const clientLogout = () => {
    setClient(null);
    localStorage.removeItem("@contactland:token");
    localStorage.removeItem("@contactland:token");
    toast("Desconectado com sucesso!");
    navigate("/");
  };

  const profile = async () => {
    try {
      const token = localStorage.getItem("@contactland:token");
      const { data } = await ApiRequests.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClient(data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await profile();
    })();
  }, []);

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
