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
  isValidToUpdateMiddleware,
} from "../middlewares";
import { isTypeExistsMiddleware } from "../middlewares/isTypeExists.middleware";
import {
  createTypeSerializer,
  updateTypeSerializer,
} from "../serializers/type.serializer";

export const typeRouter = Router();

typeRouter.get("", AuthMiddleware, listTypesController);

typeRouter.post(
  "",
  AuthMiddleware,
  isTypeExistsMiddleware,
  dataIsValidMiddleware(createTypeSerializer),
  createTypeController
);

typeRouter.patch(
  "/:id",
  AuthMiddleware,
  isValidToUpdateMiddleware,
  idIsValidMiddleware,
  isTypeExistsMiddleware,
  dataIsValidMiddleware(updateTypeSerializer),
  updateTypeController
);

typeRouter.delete(
  "/:id",
  AuthMiddleware,
  idIsValidMiddleware,
  deleteTypeController
);
