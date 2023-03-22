import { Router } from "express";
import {
  listClientsController,
  listOneClientController,
} from "../controllers/client.controller";

export const clientRouter = Router();

clientRouter.get("", listClientsController);

clientRouter.get("/:id", listOneClientController);

clientRouter.post("");

clientRouter.patch("/:id");

clientRouter.delete("/:id");
