import { Router } from "express";
import {
  createContactsController,
  deleteContactsController,
  listContactsController,
  updateContactsController,
} from "../controllers/contacts.controller";
import {
  AuthMiddleware,
  constraintMiddleware,
  dataIsValidMiddleware,
  idIsValidMiddleware,
  isValidToUpdateMiddleware,
} from "../middlewares";
import {
  createContactSerializer,
  updateContactSerializer,
} from "../serializers/contacts.serializer";

export const contactsRouter = Router();

contactsRouter.get("", AuthMiddleware, listContactsController);

contactsRouter.post(
  "",
  AuthMiddleware,
  constraintMiddleware,
  dataIsValidMiddleware(createContactSerializer),
  createContactsController
);

contactsRouter.patch(
  "/:id",
  AuthMiddleware,
  isValidToUpdateMiddleware,
  idIsValidMiddleware,
  constraintMiddleware,
  dataIsValidMiddleware(updateContactSerializer),
  updateContactsController
);

contactsRouter.delete(
  "/:id",
  AuthMiddleware,
  idIsValidMiddleware,
  deleteContactsController
);
