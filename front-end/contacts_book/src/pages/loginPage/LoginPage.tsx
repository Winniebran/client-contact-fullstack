import { LoginForm } from "./LoginForm";
import Contacts from "../../../src/@types/assets/Contacts.jpg" 

export const LoginPage = () => {
  return (
    <section>
      <div className="header">
        <img src={ Contacts } alt="imagem de contatos" />
        <span>Seus contatos perto de você</span>
      </div>
      <LoginForm />
    </section>
  );
};
