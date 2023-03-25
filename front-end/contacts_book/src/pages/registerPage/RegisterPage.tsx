import { RegisterForm } from "./RegisterForm";
import react from "../../assets/react.svg"

export const RegisterPage = () => {
    return (
        <section>
          <div className="header">
              <img src={react} alt="em breve uma imagem" />
              <span>Seus contatos perto de você</span>
          </div>
          <RegisterForm />
        </section>
      )
};