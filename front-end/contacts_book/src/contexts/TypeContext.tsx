import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { IChildren, ITypeContext } from "../interfaces/contexts.interface";
import { ICreateType, IType, IUpdateType } from "../interfaces/type.interface";
import { ApiRequests } from "../services/ApiRequest";

export const TypeContext = createContext({} as ITypeContext);

export const TypeProvider = ({ children }: IChildren) => {
  const [type, setType] = useState<IType[] | null>(null);
  const [showAddType, setShowAddType] = useState(false);
  const [showEditType, setShowEditType] = useState(false);
  const [showDeleteType, setShowDeleteType] = useState(false);

  const createType = async (data: IType) => {
    try {
      const response = await ApiRequests.post("/type", data);
      toast.success("Filtro criado com sucesso.");
      setShowAddType(false);
      if (type) {
        setType([...type, response.data]);
      }
    } catch (error) {
      console.log(error);
      toast.error("Esse filtro já foi criado, é possível editá-lo.");
    }
  };

  const updateType = async (data: IUpdateType, id: string) => {
    try {
      await ApiRequests.post(`/type/${id}`, data);
      toast.success("Filtro editado com sucesso.");
      setShowEditType(false);
      if (type) {
        const newType = type.map((type: IType) => {
          if (type.id === id) {
            return { ...type, ...data };
          } else {
            return type;
          }
        });
        setType({ ...type, ...newType });
      }
    } catch (error) {
      console.log(error);
      toast.error("Esse filtro não pôde ser editado.");
    }
  };

  const deleteType = async (id: string) => {
    try {
      await ApiRequests.post(`/type/${id}`);
      toast.success("Filtro excluído com sucesso.");
      setShowDeleteType(false);
      if (type) {
        const newType = type.filter((type: IType) => type.id !== id);
        setType({ ...type, ...newType });
      }
    } catch (error) {
      console.log(error);
      toast.error("Esse filtro não pôde ser excluído.");
    }
  };

  useEffect(() => {
    const listType = async () => {
      try {
        const response = await ApiRequests.get("/type");
        setType([...response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    listType();
  }, []);

  return (
    <TypeContext.Provider
      value={{
        type,
        setType,
        showAddType,
        setShowAddType,
        showEditType,
        setShowEditType,
        showDeleteType,
        setShowDeleteType,
        createType,
        updateType,
        deleteType,
      }}
    >
      {children}
    </TypeContext.Provider>
  );
};
