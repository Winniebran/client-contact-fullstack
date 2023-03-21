import express, { Application } from "express";
import "express-async-errors";
import "reflect-metadata";
import { handleError } from "./errors/handleError";

export const app: Application = express();
app.use(express.json());

// app.use("/client");
// app.use("/contacts");
// app.use("/filter");

app.use(handleError);
