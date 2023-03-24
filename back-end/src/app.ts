import express, { Application } from "express";
import "express-async-errors";
import "reflect-metadata";
import { handleError } from "./errors/handleError";
import {
  clientRouter,
  contactsRouter,
  loginRouter,
  profileRouter,
  typeRouter,
} from "./routes";

export const app: Application = express();
app.use(express.json());

app.use("/client", clientRouter);
app.use("/login", loginRouter);
app.use("/profile", profileRouter);
app.use("/contacts", contactsRouter);
app.use("/type", typeRouter);

app.use(handleError);
