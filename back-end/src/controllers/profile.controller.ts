import { IClientResponse } from "../interfaces";
import { listOneClientService } from "../services/client";

export const profileService = async (id: string): Promise<IClientResponse> => {
  return await listOneClientService(id);
};
