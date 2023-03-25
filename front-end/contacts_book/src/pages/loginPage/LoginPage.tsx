import { LoginForm } from "./LoginForm";
import react from "../../assets/react.svg"

export const LoginPage = () => {
    return (
        <section>
            <div className="header">
                <img src={react} alt="em breve uma imagem" />
                <span>Seus contatos perto de você</span>
            </div>
            <LoginForm />
        </section>
      );
};