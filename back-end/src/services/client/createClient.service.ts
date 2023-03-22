import { IClientRequest, IClientResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { clientResponseSerializer } from "../../serializers/client.serializer";
import { AppError } from "../../errors/AppErrors";

export const createClientService = async (
  clientData: IClientRequest
): Promise<IClientResponse> => {
  const { email } = clientData;
  const clientRepository = appDataSource.getRepository(Client);

  const emailExists = await clientRepository.findOneBy({ email: email });

  if (!emailExists) {
    const client = clientRepository.create(clientData);
    await clientRepository.save(client);
    const clientWithoutPassword = clientResponseSerializer.parse(client);

    return clientWithoutPassword;
  }

  throw new AppError("Email already exists", 409);
};
