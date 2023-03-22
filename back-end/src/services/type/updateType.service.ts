import { ITypeResponse, ITypeUpdate } from "../../interfaces";
import appDataSource from "../../data-source";
import { Type } from "../../entities/type.entity";
import { AppError } from "../../errors/AppErrors";
import { typeResponseSerializer } from "../../serializers/type.serializer";

export const updateTypeService = async (
  id: string,
  typeData: ITypeUpdate
): Promise<ITypeResponse> => {
  const typesRepository = appDataSource.getRepository(Type);

  const foundType = await typesRepository.findOneBy({
    id: id,
  });

  if (!foundType) {
    throw new AppError("Type not found", 404);
  }

  const updatedType = typesRepository.create({
    ...foundType,
    ...typeData,
  });
  await typesRepository.save(updatedType);

  const type = typeResponseSerializer.parse(updatedType);

  return type;
};
