import { IClientLogin } from "../../interfaces";
import appDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppErrors";

import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginService = async ({
  email,
  password,
}: IClientLogin): Promise<string> => {
  const clientRepository = appDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ email: email });
  if (!client) {
    throw new AppError("Email or password is invalid", 403);
  }

  const passwordMatch = await compare(password, client.password);
  if (!passwordMatch) {
    throw new AppError("Email or password is invalid", 403);
  }

  const token = jwt.sign({ email: client.email }, process.env.SECRET_KEY!, {
    subject: client.id,
    expiresIn: "24h",
  });

  return token;
};
