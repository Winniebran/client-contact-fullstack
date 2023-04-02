import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import {
  IClient,
  IClientLogin,
  IClientRegister,
  IClientUpdate,
} from "../interfaces/client.interface";
import { IChildren, IClientContext } from "../interfaces/contexts.interface";
import { ApiRequests } from "../services/ApiRequest";
import toast from "react-hot-toast";

export const ClientContext = createContext({} as IClientContext);

export const ClientProvider = ({ children }: IChildren) => {
  const [client, setClient] = useState<IClient | null>(null);
  const [showEditClient, setShowEditClient] = useState(false);

  const navigate = useNavigate();

  const clientRegister = async (data: IClientRegister) => {
    try {
      const response = await ApiRequests.post("/client", data);
      setClient(response.data);

      navigate("/");
      toast.success("Cadastro realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("E-mail já cadastrado");
    }
  };

  const clientLogin = async (data: IClientLogin) => {
    try {
      const client = await ApiRequests.post("/login", data);
      localStorage.setItem("@contactland:token", client.data.token);

      const contacts = await ApiRequests.get("/contacts", {
        headers: { Authorization: `Bearer ${client.data.token}` },
      });
      localStorage.setItem(
        "@contactland:contact",
        JSON.stringify(contacts.data)
      );

      await profile();
      toast.success("Login realizado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Email e/ou senha são inválidos");
    }
  };

  const updateClient = async (data: IClientUpdate) => {
    try {
      const token = localStorage.getItem("@contactland:token");
      const response = await ApiRequests.patch(`/client/${client?.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClient(response.data);

      toast.success("Perfil editado com sucesso.");
      setShowEditClient(false)
    } catch (error) {
      console.log(error);
      toast.error("Perfil não pôde ser editado");
    }
  };

  const deleteClient = async () => {
    try {
      const token = localStorage.getItem("@contactland:token");
      const response = await ApiRequests.delete(`/client/${client?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClient(response.data);

      navigate("/");
      toast.success("Perfil excluído com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Perfil não pôde ser excluído");
    }
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
    profile();
  }, []);

  const clientLogout = () => {
    setClient(null);
    localStorage.removeItem("@contactland:token");
    localStorage.removeItem("@contactland:token");
    toast("Desconectado com sucesso!");
    navigate("/");
  };

  return (
    <ClientContext.Provider
      value={{
        client,
        setClient,
        clientLogin,
        clientLogout,
        clientRegister,
        updateClient,
        deleteClient,
        showEditClient,
        setShowEditClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
