import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientsController,
  listOneClientController,
  updateClientController,
} from "../controllers/client.controller";
import { dataIsValidMiddleware } from "../middlewares";
import {
  createClientSerializer,
  updateClientSerializer,
} from "../serializers/client.serializer";

export const clientRouter = Router();

clientRouter.get("", listClientsController);

clientRouter.get("/:id", listOneClientController);

clientRouter.post(
  "",
  dataIsValidMiddleware(createClientSerializer),
  createClientController
);

clientRouter.patch(
  "/:id",
  dataIsValidMiddleware(updateClientSerializer),
  updateClientController
);

clientRouter.delete("/:id", deleteClientController);
