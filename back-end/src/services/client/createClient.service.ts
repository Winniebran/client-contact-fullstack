import { IClientRequest, IClientResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { clientResponseSerializer } from "../../serializers/client.serializer";
import { AppError } from "../../errors/AppErrors";

export const createClientService = async (
  clientData: IClientRequest
): Promise<IClientResponse> => {
  const { email, cellPhone } = clientData;
  const clientRepository = appDataSource.getRepository(Client);

  const emailExists = await clientRepository.findOneBy({ email: email });
  if (emailExists) {
    throw new AppError("Email already registered", 409);
  }

  const cellPhoneExists = await clientRepository.findOneBy({
    cellPhone: cellPhone,
  });
  if (cellPhoneExists) {
    throw new AppError("Cell phone already registered", 409);
  }

  const client = clientRepository.create(clientData);
  await clientRepository.save(client);
  const clientWithoutPassword = clientResponseSerializer.parse(client);

  return clientWithoutPassword;
};
