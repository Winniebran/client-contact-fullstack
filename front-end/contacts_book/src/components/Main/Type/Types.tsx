import { useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { TypeContext } from "../../../contexts/TypeContext";
import { TypeCard } from "../../Card/TypeCard";
import { EditTypeModal } from "../../Modal/ModalType/EditTypeModal";

export const Types = () => {
  const { type, setShowAddType, showEditType } =
    useContext(TypeContext);

  return (
    <div>
      <h3>Meus Filtros:</h3>
      <button onClick={() => setShowAddType(true)}>
        <IoAddCircleOutline />
      </button>
      {!type?.length ? (
        <p> Ainda não possui nenhum filtro!</p>
      ) : (
        <ul>
          {type?.map((type) => (
            <TypeCard type={type} key={type.id} />
          ))}
          {showEditType && <EditTypeModal />}
        </ul>
      )}
    </div>
  );
};
