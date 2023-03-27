import { useContext } from "react";

import { TypeContext } from "../../contexts/TypeContext";

import { IoRemoveCircleOutline } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";
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
      <div></div>
      {type.name}
      <button>
        <GrEdit onClick={() => editType(type)} />
      </button>
      <button>
        <IoRemoveCircleOutline onClick={() => deleteType(type?.id)} />
      </button>
    </li>
  );
};
