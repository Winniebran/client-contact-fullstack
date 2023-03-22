import { Request, Response } from "express";
import { IClientRequest, IClientUpdate } from "../interfaces";
import {
  createClientService,
  deleteClientService,
  listClientsService,
  listOneClientService,
  updateClientService,
} from "../services/client";

export const listClientsController = async (req: Request, res: Response) => {
  const clients = await listClientsService();
  return res.json(clients);
};

export const listOneClientController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const client = await listOneClientService(id);
  return res.json(client);
};

export const createUserController = async (req: Request, res: Response) => {
  const clientData: IClientRequest = req.body;
  const client = await createClientService(clientData);
  return res.status(201).json(client);
};

export const updateClientController = async (req: Request, res: Response) => {
  const clientData: IClientUpdate = req.body;
  const id: string = req.params.id;
  const client = await updateClientService(id, clientData);
  return res.status(200).json(client);
};

export const deleteClientController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const client = await deleteClientService(id);
  return res.status(204).json(client);
};
