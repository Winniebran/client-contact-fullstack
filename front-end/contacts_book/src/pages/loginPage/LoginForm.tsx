import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ClientContext } from "../../contexts/ClientContext";
import { IClientLogin } from "../../interfaces/client.interface";
import { loginClientSerializer } from "../../serializers/ClientSerializer";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const { clientLogin } = useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientLogin>({ resolver: zodResolver(loginClientSerializer) });

  return (
    <form onSubmit={handleSubmit(clientLogin)}>
      <div>
        <div>
          <FiMail />
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />
        </div>
        <span>{errors.email?.message}</span>

        <div>
          <FiLock />
          <input
            id="password"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
        </div>
        <span>{errors.password?.message}</span>
      </div>

      <div>
        <button>Login</button>
        <p>
          Não possui uma conta?
          <Link to={"/register"}>Cadastre-se!</Link>
        </p>
      </div>
    </form>
  );
};
