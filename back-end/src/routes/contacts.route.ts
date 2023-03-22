import { Router } from "express";
import {
  createContactsController,
  deleteContactsController,
  listContactsController,
  updateContactsController,
} from "../controllers/contacts.controller";
import {
  AuthMiddleware,
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
  dataIsValidMiddleware(createContactSerializer),
  createContactsController
);

contactsRouter.patch(
  "/:id",
  AuthMiddleware,
  isValidToUpdateMiddleware,
  idIsValidMiddleware,
  dataIsValidMiddleware(updateContactSerializer),
  updateContactsController
);

contactsRouter.delete(
  "/:id",
  AuthMiddleware,
  idIsValidMiddleware,
  deleteContactsController
);
