import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientsController,
  listOneClientController,
  updateClientController,
} from "../controllers/client.controller";
import { AuthMiddleware } from "../middlewares";

export const clientRouter = Router();

clientRouter.get("", AuthMiddleware, listClientsController);

clientRouter.get("/:id", AuthMiddleware, listOneClientController);

clientRouter.post("", AuthMiddleware, createClientController);

clientRouter.patch("/:id", AuthMiddleware, updateClientController);

clientRouter.delete("/:id", AuthMiddleware, deleteClientController);
