import { Router } from "express";
import {
  createTypeController,
  deleteTypeController,
  listTypesController,
  updateTypeController,
} from "../controllers/type.controller";
import { AuthMiddleware } from "../middlewares";

export const typeRouter = Router();

typeRouter.get("", AuthMiddleware, listTypesController);

typeRouter.post("", AuthMiddleware, createTypeController);

typeRouter.patch("/:id", AuthMiddleware, updateTypeController);

typeRouter.delete("/:id", AuthMiddleware, deleteTypeController);
