import { useContext } from "react";

import { ContactContext } from "../../../contexts/ContactContext";
import { AiOutlineSearch } from "react-icons/ai";
import { StyledNav } from "../../../styles/header";
import { StyledTitle } from "../../../styles/typography";
import { StyledInput } from "../../../styles/input";

export const Nav = () => {
  const { input, setInput } = useContext(ContactContext);

  return (
    <StyledNav>
      <StyledTitle tag="h1" fontFamily="one" fontSize="five">CONTACTLAND</StyledTitle>
      <form>
        <label htmlFor="search">
          <AiOutlineSearch />
        </label>
        <StyledInput
          id="search"
          type="search"
          value={input}
          placeholder="Pesquise um contato"
          title="Digite nome, email ou telefone"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </StyledNav>
  );
};
