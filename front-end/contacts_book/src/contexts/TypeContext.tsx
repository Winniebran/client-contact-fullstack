import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { IChildren, ITypeContext } from "../interfaces/contexts.interface";
import { ICreateType, IType } from "../interfaces/type.interface";
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
      }}
    >
      {children}
    </TypeContext.Provider>
  );
};
