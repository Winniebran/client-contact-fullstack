import { ITypeResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Type } from "../../entities/type.entity";
import { listTypes } from "../../serializers/type.serializer";

export const listTypesService = async (): Promise<ITypeResponse[]> => {
  const typesRepository = appDataSource.getRepository(Type);

  const typesFound = await typesRepository.find();
  const types = listTypes.parse(typesFound);
  return types;
};
