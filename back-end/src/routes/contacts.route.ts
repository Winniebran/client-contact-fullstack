import { Router } from "express";
import {
  createContactsController,
  deleteContactsController,
  listContactsController,
  updateContactsController,
} from "../controllers/contacts.controller";

export const contactsRouter = Router();

contactsRouter.get("", listContactsController);

contactsRouter.post("", createContactsController);

contactsRouter.patch("/:id", updateContactsController);

contactsRouter.delete("/:id", deleteContactsController);
