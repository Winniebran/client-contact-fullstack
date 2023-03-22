import { Router } from "express";
import {
  createClientController,
  listClientsController,
  listOneClientController,
} from "../controllers/client.controller";

export const clientRouter = Router();

clientRouter.get("", listClientsController);

clientRouter.get("/:id", listOneClientController);

clientRouter.post("", createClientController);

clientRouter.patch("/:id");

clientRouter.delete("/:id");
