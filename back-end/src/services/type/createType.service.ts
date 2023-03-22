import { ITypeRequest, ITypeResponse } from "../../interfaces";
import appDataSource from "../../data-source";
import { Type } from "../../entities/type.entity";
import { AppError } from "../../errors/AppErrors";
import { typeResponseSerializer } from "../../serializers/type.serializer";

export const createTypeService = async (
  typeData: ITypeRequest
): Promise<ITypeResponse> => {
  const { name } = typeData;
  const typesRepository = appDataSource.getRepository(Type);

  const typeExists = await typesRepository.findOneBy({ name: name });
  if (typeExists) {
    throw new AppError("Type already Exists", 409);
  }

  const types = typesRepository.create(typeData);
  await typesRepository.save(types);
  const typesResponse = typeResponseSerializer.parse(types);

  return typesResponse;
};
