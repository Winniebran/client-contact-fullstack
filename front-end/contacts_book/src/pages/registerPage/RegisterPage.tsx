import { RegisterForm } from "./RegisterForm";
import Contacts from "../../../src/@types/assets/Contacts.jpg" 

export const RegisterPage = () => {
    return (
        <section>
          <div className="header">
              <img src={Contacts} alt="em breve uma imagem" />
              <span>Seus contatos perto de você</span>
          </div>
          <RegisterForm />
        </section>
      )
};