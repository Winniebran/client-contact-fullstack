import { ITypeRequest, ITypeResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Type } from "../../entities/type.entity";
import { typeResponseSerializer } from "../../serializers/type.serializer";

export const createTypeService = async (
  typeData: ITypeRequest
): Promise<ITypeResponse> => {
  const typesRepository = appDataSource.getRepository(Type);

  const types = typesRepository.create(typeData);
  await typesRepository.save(types);
  const typesResponse = typeResponseSerializer.parse(types);

  return typesResponse;
};
