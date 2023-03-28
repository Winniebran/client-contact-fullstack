import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/winnie-brandao/"> <BsLinkedin /> </a>
        <a href="https://github.com/Winniebran"> <BsGithub /> </a>
      </div>
      <span> <AiOutlineCopyrightCircle /> 2023. All Rights Reserved. </span>
    </footer>
  );
};
