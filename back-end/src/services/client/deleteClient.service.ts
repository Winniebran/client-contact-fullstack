import appDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppErrors";

export const deleteClientService = async (id: string) => {
  const clientRepository = appDataSource.getRepository(Client);
  const [foundClient] = await clientRepository.find({
    where: { id: id },
    withDeleted: true,
  });

  if (!foundClient) {
    throw new AppError("Client not found", 404);
  }

  if (!foundClient?.isActive) {
    throw new AppError("Client is already inactive", 400);
  }

  await clientRepository.softRemove(foundClient);
  const clientDeleted = await clientRepository.save({
    ...foundClient,
    isActive: false,
  });

  return clientDeleted;
};
