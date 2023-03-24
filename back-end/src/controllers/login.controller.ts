import { Request, Response } from "express";
import { IClientLogin } from "../interfaces";
import { loginService } from "../services/login/login.service";

export const loginController = async (req: Request, res: Response) => {
  const loginData: IClientLogin = req.body;
  const token = await loginService(loginData);
  return res.json({ token });
};
