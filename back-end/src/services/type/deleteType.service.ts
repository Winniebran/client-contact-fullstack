import appDataSource from "../../data-source";
import { Type } from "../../entities/type.entity";
import { AppError } from "../../errors/AppErrors";

export const deleteTypeService = async (id: string) => {
  const typeRepository = appDataSource.getRepository(Type);

  const foundType = await typeRepository.findOneBy({
    id: id,
  });
  if (!foundType) {
    throw new AppError("Type not found", 404);
  }

  await typeRepository.delete(id);
};
