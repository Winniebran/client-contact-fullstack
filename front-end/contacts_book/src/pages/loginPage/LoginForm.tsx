import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ClientContext } from "../../contexts/ClientContext";
import { IClientLogin } from "../../interfaces/client.interface";
import { loginClientSerializer } from "../../serializers/ClientSerializer";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { StyledInput } from "../../styles/input";
import { StyledDivInput } from "../../styles/div";
import { StyledForm } from "../../styles/form";
import { StyledButton } from "../../styles/button";
import { StyledLink } from "../../styles/link";

export const LoginForm = () => {
  const { clientLogin } = useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientLogin>({ resolver: zodResolver(loginClientSerializer) });

  return (
    <StyledForm onSubmit={handleSubmit(clientLogin)}>
      <div className="div-form">
        <StyledDivInput>
          <FiMail />
          <StyledInput
            id="email"
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />
        </StyledDivInput>
        <span>{errors.email?.message}</span>

        <StyledDivInput>
          <FiLock />
          <StyledInput
            id="password"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
        </StyledDivInput>
        <span>{errors.password?.message}</span>
      </div>

      <div className="div-button">
        <StyledButton>Login</StyledButton>
        <p>
          Não possui uma conta?
          <StyledLink to={"/register"}> Cadastre-se!</StyledLink>
        </p>
      </div>
    </StyledForm>
  );
};
