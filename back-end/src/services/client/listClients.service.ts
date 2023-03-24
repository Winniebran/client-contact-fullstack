import { IClientResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { listClientsWithoutPassword } from "../../serializers/client.serializer";

export const listClientsService = async (): Promise<IClientResponse[]> => {
  const clientRepository = appDataSource.getRepository(Client);

  const clientFound = await clientRepository.find({ withDeleted: true });
  const clientsWithoutPassword = listClientsWithoutPassword.parse(clientFound);
  return clientsWithoutPassword;
};
