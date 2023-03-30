import { useContext } from "react";

import { TypeContext } from "../../contexts/TypeContext";

import { IoRemoveCircleOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { IType } from "../../interfaces/type.interface";

export const TypeCard = ({ type }: any) => {
  const { setShowEditType, setCurrentType, deleteType } =
    useContext(TypeContext);

  const editType = (type: IType) => {
    setShowEditType(true);
    setCurrentType({ ...type });
  };

  return (
    <li>
      {type.name}
      <div className="button-li">
        <button onClick={() => editType(type)}>
          <AiOutlineEdit />
        </button>
        <button onClick={() => deleteType(type?.id)}>
          <IoRemoveCircleOutline />
        </button>
      </div>
    </li>
  );
};
