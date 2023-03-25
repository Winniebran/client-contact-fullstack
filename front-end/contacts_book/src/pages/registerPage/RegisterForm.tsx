import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FiPhone, FiLock, FiImage, FiUser, FiMail } from "react-icons/fi"
import { ClientContext } from "../../contexts/ClientContext";
import { IClientRegister } from "../../interfaces/client.interface";
import { registerClientSerializer } from "../../serializers/ClientSerializer";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const { clientRegister } = useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientRegister>({
    resolver: zodResolver(registerClientSerializer),
  });

  return (
    <form onSubmit={handleSubmit(clientRegister)}>
      <div className="inputs-login">
        <div>
          <FiUser />
          <input
            id="firstName"
            type="text"
            placeholder="Nome"
            {...register("firstName")}
          />
        </div>
        <span>{errors.firstName?.message}</span>

        <div>
          <FiUser />
          <input
            id="lastName"
            type="text"
            placeholder="Sobrenome"
            {...register("lastName")}
          />
        </div>
        <span>{errors.lastName?.message}</span>

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
          <FiPhone />
          <input
            id="cellPhone"
            type="tel"
            placeholder="Celular"
            {...register("cellPhone")}
          />
        </div>
        <span>{errors.cellPhone?.message}</span>

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

        <div>
          <FiLock />
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirmar Senha"
            {...register("confirmPassword")}
          />
        </div>
        <span>{errors.confirmPassword?.message}</span>

        <div>
          <FiImage />
          <input
            id="image"
            type="text"
            placeholder="Imagem do Perfil"
            {...register("image")}
          />
        </div>
        <span>{errors.image?.message}</span>
      </div>

      <div className="button-login">
        <button>Cadastrar</button>
        <span>
          Já possui uma conta?
          <Link to={"/"}>Faça Login!</Link>
        </span>
      </div>
    </form>
  );
};
