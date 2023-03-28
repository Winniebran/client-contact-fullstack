import { useContext } from "react";

import { ContactContext } from "../../../contexts/ContactContext";
import { AiOutlineSearch } from "react-icons/ai";

export const Nav = () => {
  const { input, setInput } = useContext(ContactContext);

  return (
    <nav>
      <h1>CONTACTLAND</h1>
      <form>
        <label htmlFor="search">
          <AiOutlineSearch />
        </label>
        <input
          id="search"
          type="search"
          value={input}
          placeholder="Pesquise um contato"
          title="Digite nome, email ou telefone"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </nav>
  );
};
