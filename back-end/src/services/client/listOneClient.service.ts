import { IClientResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { clientResponseSerializer } from "../../serializers/client.serializer";

export const listOneClientService = async (
  id: string
): Promise<IClientResponse> => {
  const clientRepository = appDataSource.getRepository(Client);

  const clientFound = await clientRepository.findOne({
    where: { id: id },
    withDeleted: true,
  });
  const clientWithoutPassword = clientResponseSerializer.parse(clientFound);
  return clientWithoutPassword;
};
