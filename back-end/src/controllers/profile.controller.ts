import { Request, Response } from "express";
import { profileService } from "../services/profile/profile.service";

export const profileController = async (req: Request, res: Response) => {
  const clientId: string = req.client.id;
  const profileClient = await profileService(clientId);
  return res.json(profileClient);
};
