import { IClientResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { clientResponseSerializer } from "../../serializers/client.serializer";
import { AppError } from "../../errors/AppErrors";

export const listOneClientService = async (
  id: string
): Promise<IClientResponse> => {
  const clientRepository = appDataSource.getRepository(Client);

  const clientFound = await clientRepository.findOne({
    where: { id: id },
    withDeleted: true,
  });
  if (!clientFound) {
    throw new AppError("Client not found", 404);
  }

  const clientWithoutPassword = clientResponseSerializer.parse(clientFound);
  return clientWithoutPassword;
};
