import express, { Request, Response, Router } from "express";
import { Note, NotePropTypes } from "../models/Note";
const noteController: Router = express.Router();

interface BodyNoteType {
  note: NotePropTypes;
}
interface QueryType {
  page: number;
}

noteController.get(
  "/",
  async (req: Request<any, any, any, QueryType>, res: Response) => {
    const page = req.query.page;
    let pageHandler = (page: number): { start: number; finish: number } => {
      if (page == 0) return { start: 0, finish: 0 };
      return { start: (Number(page) - 1) * 10, finish: Number(page) * 10 };
    };
    return await res.json(
      await Note.find({})
        .skip(pageHandler(page).start)
        .limit(pageHandler(page).finish)
        .sort({ _id: -1 })
    );
  }
);

noteController.post(
  "/create",
  async (req: Request<any, any, BodyNoteType>, res: Response) => {
    try {
      await Note.create(req.body.note);
      res.json({ status: "OK", message: "created note" });
    } catch (error) {
      res
        .status(406)
        .json({ status: "Error", message: "couldn't create note" });
    }
  }
);

export default noteController;
