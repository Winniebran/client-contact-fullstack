import { IClientResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { listClientsWithoutPassword } from "../../serializers/client.serializer";

export const listClientsService = async (): Promise<IClientResponse[]> => {
  const clientRepository = appDataSource.getRepository(Client);

  const clientFound = await clientRepository.find({
    relations: {
      contacts: {
        type: true
      }
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      cellPhone: true,
      image: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
      contacts: {
        id: true,
        cellPhone: true,
        email: true,
        type: {
          id: true,
          name: true
        }
      },
    },
    withDeleted: true });
    
  return clientFound;
};
