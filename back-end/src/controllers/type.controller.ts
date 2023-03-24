import { Request, Response } from "express";
import { ITypeRequest, ITypeUpdate } from "../interfaces";
import {
  createTypeService,
  deleteTypeService,
  listTypesService,
  updateTypeService,
} from "../services/type";

export const listTypesController = async (req: Request, res: Response) => {
  const types = await listTypesService();
  return res.json(types);
};

export const createTypeController = async (req: Request, res: Response) => {
  const typesData: ITypeRequest = req.body;
  const types = await createTypeService(typesData);
  return res.status(201).json(types);
};

export const updateTypeController = async (req: Request, res: Response) => {
  const typesData: ITypeUpdate = req.body;
  const id: string = req.params.id;
  const types = await updateTypeService(id, typesData);
  return res.status(200).json(types);
};

export const deleteTypeController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const types = await deleteTypeService(id);
  return res.status(204).json(types);
};
