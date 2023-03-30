import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { StyledFooter } from "../../styles/footer";

export const Footer = () => {
  return (
    <StyledFooter>
      <span> Copyright <AiOutlineCopyrightCircle /> 2023. All Rights Reserved. </span>
      <div className="links">
        <a href="https://www.linkedin.com/in/winnie-brandao/"> <BsLinkedin /> </a>
        <a href="https://github.com/Winniebran"> <BsGithub /> </a>
      </div>
    </StyledFooter>
  );
};
