import { useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { TypeContext } from "../../../contexts/TypeContext";
import { StyledButtonDashboard } from "../../../styles/button";
import { StyledDivType } from "../../../styles/div";
import { StyledList } from "../../../styles/list";
import { StyledTitle } from "../../../styles/typography";
import { TypeCard } from "../../Card/TypeCard";
import { EditTypeModal } from "../../Modal/ModalType/EditTypeModal";

export const Types = () => {
  const { type, setShowAddType, showEditType } = useContext(TypeContext);

  return (
    <StyledDivType>
      <div className="gap">
        <StyledTitle tag="h3" fontFamily="one" fontSize="seven">
          Meus Filtros
        </StyledTitle>
        <StyledButtonDashboard color="one" onClick={() => setShowAddType(true)}>
          <IoAddCircleOutline /> Adicionar Filtro
        </StyledButtonDashboard>
      </div>
      {!type?.length ? (
        <p> Ainda não possui nenhum filtro!</p>
      ) : (
        <StyledList>
          {type?.map((type) => (
            <TypeCard type={type} key={type.id} />
          ))}
          {showEditType && <EditTypeModal />}
        </StyledList>
      )}
    </StyledDivType>
  );
};
