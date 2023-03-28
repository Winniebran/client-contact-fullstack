import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { IChildren, ITypeContext } from "../interfaces/contexts.interface";
import { IType, IUpdateType } from "../interfaces/type.interface";
import { ApiRequests } from "../services/ApiRequest";

export const TypeContext = createContext({} as ITypeContext);

export const TypeProvider = ({ children }: IChildren) => {
  const [type, setType] = useState<IType[] | null>(null);
  const [showAddType, setShowAddType] = useState(false);
  const [showEditType, setShowEditType] = useState(false);
  const [currentType, setCurrentType] = useState<IType | null>(null);

  const createType = async (data: IType) => {
    try {
      const token = localStorage.getItem("@contactland:token");
      const response = await ApiRequests.post("/type", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      type && setType([...type, response.data]);

      toast.success("Filtro criado com sucesso.");
      setShowAddType(false);
    } catch (error) {
      console.log(error);
      toast.error("Esse filtro já foi criado, é possível editá-lo.");
    }
  };

  const listType = async () => {
    try {
      const token = localStorage.getItem("@contactland:token");
      const response = await ApiRequests.get("/type", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setType([...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateType = async (data: IUpdateType, id: string) => {
    try {
      const token = localStorage.getItem("@contactland:token");
      await ApiRequests.patch(`/type/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newType = type?.map((type: IType) => {
        if (type.id === id) {
          return { ...type, ...data };
        } else {
          return type;
        }
      });
      type && setType({ ...type, ...newType });

      toast.success("Filtro editado com sucesso.");
      setShowEditType(false);
    } catch (error) {
      console.log(error);
      toast.error("Esse filtro não pôde ser editado.");
    }
  };

  const deleteType = async (id: string) => {
    try {
      const token = localStorage.getItem("@contactland:token");
      await ApiRequests.delete(`/type/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newType = type?.filter((type: IType) => type.id !== id);
      type && setType({ ...type, ...newType });

      toast.success("Filtro excluído com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Esse filtro não pôde ser excluído.");
    }
  };

  return (
    <TypeContext.Provider
      value={{
        type,
        setType,
        showAddType,
        setShowAddType,
        showEditType,
        setShowEditType,
        currentType,
        setCurrentType,
        createType,
        updateType,
        deleteType,
        listType,
      }}
    >
      {children}
    </TypeContext.Provider>
  );
};
