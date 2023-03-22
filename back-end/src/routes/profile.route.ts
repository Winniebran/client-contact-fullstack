import { Router } from "express";
import { profileController } from "../controllers/profile.controller";
import { AuthMiddleware } from "../middlewares";

export const profileRouter = Router();

profileRouter.get("", AuthMiddleware, profileController);
