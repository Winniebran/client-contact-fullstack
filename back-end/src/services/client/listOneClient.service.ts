import { IClientResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { listClientsWithoutPassword } from "../../serializers/client.serializer";

export const listOneClientService = async (
  id: string
): Promise<IClientResponse> => {
  const clientRepository = appDataSource.getRepository(Client);

  const clientFound = await clientRepository.findOne({
    where: { id: id },
    withDeleted: true,
  });
  const [clientWithoutPassword] = listClientsWithoutPassword.parse(clientFound);
  return clientWithoutPassword;
};
