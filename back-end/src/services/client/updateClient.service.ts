import { IClientResponse, IClientUpdate } from "../../interfaces";
import appDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppErrors";
import { clientResponseSerializer } from "../../serializers/client.serializer";

export const updateClientService = async (
  id: string,
  clientData: IClientUpdate
): Promise<IClientResponse> => {
  const clientRepository = appDataSource.getRepository(Client);

  const [foundClient] = await clientRepository.find({
    where: { id: id },
    withDeleted: true,
  });

  if (!foundClient) {
    throw new AppError("Client not found", 404);
  }

  const updatedClient = clientRepository.create({
    ...foundClient,
    ...clientData,
  });
  await clientRepository.save(updatedClient);

  const updateWithoutPassword = clientResponseSerializer.parse(updatedClient);

  return updateWithoutPassword;
};
