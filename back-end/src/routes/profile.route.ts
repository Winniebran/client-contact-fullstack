import { Router } from "express";
import { profileController } from "../services/profile/profile.service";

export const profileRouter = Router();

profileRouter.get("", profileController);
