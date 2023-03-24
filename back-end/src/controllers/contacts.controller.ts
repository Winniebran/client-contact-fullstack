import { Request, Response } from "express";
import { IContactRequest, IContactUpdate } from "../interfaces";
import {
  createContactsService,
  deleteContactsService,
  listContactsService,
  updateContactsService,
} from "../services/contacts";

export const listContactsController = async (req: Request, res: Response) => {
  const contacts = await listContactsService();
  return res.json(contacts);
};

export const createContactsController = async (req: Request, res: Response) => {
  const contactsData: IContactRequest = req.body;
  const contacts = await createContactsService(contactsData);
  return res.status(201).json(contacts);
};

export const updateContactsController = async (req: Request, res: Response) => {
  const contactsData: IContactUpdate = req.body;
  const id: string = req.params.id;
  const contacts = await updateContactsService(id, contactsData);
  return res.status(200).json(contacts);
};

export const deleteContactsController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const contacts = await deleteContactsService(id);
  return res.status(204).json(contacts);
};
