import { RegisterForm } from "./RegisterForm";
import Contacts from "../../../src/@types/assets/Contacts.svg";

import { StyledSection } from "../../styles/section";
import { StyledDivHeader } from "../../styles/div";
import { StyledTitle } from "../../styles/typography";
import { Footer } from "../../components/Footer/Footer";

export const RegisterPage = () => {
  return (
    <>
      <StyledSection>
        <StyledDivHeader>
          <img src={Contacts} alt="em breve uma imagem" />
          <StyledTitle tag="span" fontFamily="one" fontSize="five">
            Seus contatos perto de você
          </StyledTitle>
        </StyledDivHeader>
        <RegisterForm />
      </StyledSection>
      <Footer />
    </>
  );
};
