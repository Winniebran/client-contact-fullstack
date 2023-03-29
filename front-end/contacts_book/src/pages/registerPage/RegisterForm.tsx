import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FiPhone, FiLock, FiImage, FiUser, FiMail } from "react-icons/fi";
import { ClientContext } from "../../contexts/ClientContext";
import { IClientRegister } from "../../interfaces/client.interface";
import { registerClientSerializer } from "../../serializers/ClientSerializer";
import { Link } from "react-router-dom";
import { StyledForm } from "../../styles/form";
import { StyledLink } from "../../styles/link";
import { StyledButton } from "../../styles/button";
import { StyledDivInput } from "../../styles/div";
import { StyledInput } from "../../styles/input";

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
    <StyledForm onSubmit={handleSubmit(clientRegister)}>
      <div className="div-form">
        <StyledDivInput>
          <FiUser />
          <StyledInput
            id="firstName"
            type="text"
            placeholder="Nome"
            {...register("firstName")}
          />
        </StyledDivInput>
        <span>{errors.firstName?.message}</span>

        <StyledDivInput>
          <FiUser />
          <StyledInput
            id="lastName"
            type="text"
            placeholder="Sobrenome"
            {...register("lastName")}
          />
        </StyledDivInput>
        <span>{errors.lastName?.message}</span>

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
          <FiPhone />
          <StyledInput
            id="cellPhone"
            type="tel"
            placeholder="Celular"
            {...register("cellPhone")}
          />
        </StyledDivInput>
        <span>{errors.cellPhone?.message}</span>

        <StyledDivInput>
          <FiLock />
          <StyledInput
            id="password"
            type="password"
            placeholder="Senha"
            autoComplete="current-password"
            {...register("password")}
          />
        </StyledDivInput>
        <span>{errors.password?.message}</span>

        <StyledDivInput>
          <FiLock />
          <StyledInput
            id="confirmPassword"
            type="password"
            placeholder="Confirmar Senha"
            autoComplete="confirm-current-password"
            {...register("confirmPassword")}
          />
        </StyledDivInput>
        <span>{errors.confirmPassword?.message}</span>

        <StyledDivInput>
          <FiImage />
          <StyledInput
            id="image"
            type="text"
            placeholder="Imagem do Perfil"
            {...register("image")}
          />
        </StyledDivInput>
        <span>{errors.image?.message}</span>
      </div>

      <div className="div-button">
        <StyledButton>Cadastrar</StyledButton>
        <p>
          Já possui uma conta?
          <StyledLink to={"/"}> Faça Login!</StyledLink>
        </p>
      </div>
    </StyledForm>
  );
};
