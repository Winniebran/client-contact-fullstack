import { IClientResponse } from "../../interfaces";
import { listOneClientService } from "../client";

export const profileService = async (id: string): Promise<IClientResponse> => {
  return await listOneClientService(id);
};
