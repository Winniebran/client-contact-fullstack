import { LoginForm } from "./LoginForm";
import Contacts from "../../../src/@types/assets/Contacts.svg";
import { StyledDivHeader } from "../../styles/div";
import { StyledSection } from "../../styles/section";
import { Footer } from "../../components/Footer/Footer";
import { StyledTitle } from "../../styles/typography";

export const LoginPage = () => {
  return (
    <>
      <StyledSection>
        <StyledDivHeader>
          <img src={Contacts} alt="imagem de contatos" />
          <StyledTitle tag="span" fontFamily="one" fontSize="five">
            Seus contatos perto de você
          </StyledTitle>
        </StyledDivHeader>
        <LoginForm />
      </StyledSection>
      <Footer />
    </>
  );
};
