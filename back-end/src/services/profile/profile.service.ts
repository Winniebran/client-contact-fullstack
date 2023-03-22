import { Request, Response } from "express";
import { profileService } from "../../controllers/profile.controller";

export const profileController = async (req: Request, res: Response) => {
  const clientId: string = req.client.id;
  const profileClient = await profileService(clientId);
  return res.json(profileClient);
};
