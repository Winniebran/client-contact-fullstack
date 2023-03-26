import { IClientRequest, IClientResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { clientResponseSerializer } from "../../serializers/client.serializer";
import { AppError } from "../../errors/AppErrors";

export const createClientService = async (
  clientData: IClientRequest
): Promise<IClientResponse> => {
  const clientRepository = appDataSource.getRepository(Client);

  const clientAlreadyExists = await clientRepository.findOne({
    where: {
      email: clientData.email,
      cellPhone: clientData.cellPhone
    } 
  })

  if (clientAlreadyExists) {
    throw new AppError("Client already exists!", 409);
  }

  const client = clientRepository.create(clientData);
  await clientRepository.save(client);
  const clientWithoutPassword = clientResponseSerializer.parse(client);

  return clientWithoutPassword;
};