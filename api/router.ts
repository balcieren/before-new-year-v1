import { Application } from "express";
import noteController from "./controllers/note";
export const router = (app: Application) =>
  app.use("/api/notes", noteController);
