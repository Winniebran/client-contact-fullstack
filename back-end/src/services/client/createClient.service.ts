import { IClientRequest, IClientResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { clientResponseSerializer } from "../../serializers/client.serializer";
import { AppError } from "../../errors/AppErrors";

export const createClientService = async (
  clientData: IClientRequest
): Promise<IClientResponse> => {
  const clientRepository = appDataSource.getRepository(Client);

  const client = clientRepository.create(clientData);
  await clientRepository.save(client);
  const clientWithoutPassword = clientResponseSerializer.parse(client);

  return clientWithoutPassword;
};