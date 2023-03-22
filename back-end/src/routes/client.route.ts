import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientsController,
  listOneClientController,
  updateClientController,
} from "../controllers/client.controller";

export const clientRouter = Router();

clientRouter.get("", listClientsController);

clientRouter.get("/:id", listOneClientController);

clientRouter.post("", createClientController);

clientRouter.patch("/:id", updateClientController);

clientRouter.delete("/:id", deleteClientController);
