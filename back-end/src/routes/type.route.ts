import { Router } from "express";
import {
  createTypeController,
  deleteTypeController,
  listTypesController,
  updateTypeController,
} from "../controllers/type.controller";
import {
  AuthMiddleware,
  dataIsValidMiddleware,
  idIsValidMiddleware,
} from "../middlewares";
import {
  createTypeSerializer,
  updateTypeSerializer,
} from "../serializers/type.serializer";

export const typeRouter = Router();

typeRouter.get("", AuthMiddleware, listTypesController);

typeRouter.post(
  "",
  AuthMiddleware,
  dataIsValidMiddleware(createTypeSerializer),
  createTypeController
);

typeRouter.patch(
  "/:id",
  AuthMiddleware,
  idIsValidMiddleware,
  dataIsValidMiddleware(updateTypeSerializer),
  updateTypeController
);

typeRouter.delete(
  "/:id",
  AuthMiddleware,
  idIsValidMiddleware,
  deleteTypeController
);
