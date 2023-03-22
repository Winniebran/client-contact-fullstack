import { Router } from "express";
import {
  createTypeController,
  deleteTypeController,
  listTypesController,
  updateTypeController,
} from "../controllers/type.controller";

export const typeRouter = Router();

typeRouter.get("", listTypesController);

typeRouter.post("", createTypeController);

typeRouter.patch("/:id", updateTypeController);

typeRouter.delete("/:id", deleteTypeController);
