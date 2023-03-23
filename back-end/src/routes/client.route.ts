import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientsController,
  listOneClientController,
  updateClientController,
} from "../controllers/client.controller";
import {
  constraintMiddleware,
  dataIsValidMiddleware,
  idIsValidMiddleware,
  isValidToUpdateMiddleware,
} from "../middlewares";
import {
  createClientSerializer,
  updateClientSerializer,
} from "../serializers/client.serializer";

export const clientRouter = Router();

clientRouter.get("", listClientsController);

clientRouter.get("/:id", idIsValidMiddleware, listOneClientController);

clientRouter.post(
  "",
  constraintMiddleware,
  dataIsValidMiddleware(createClientSerializer),
  createClientController
);

clientRouter.patch(
  "/:id",
  isValidToUpdateMiddleware,
  idIsValidMiddleware,
  constraintMiddleware,
  dataIsValidMiddleware(updateClientSerializer),
  updateClientController
);

clientRouter.delete("/:id", idIsValidMiddleware, deleteClientController);
