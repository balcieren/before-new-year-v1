import { NextApiRequest, NextApiResponse } from "next";
import mongooseHandler from "utils/mongooseHandler";
import { Note } from "../../../models/Note";
mongooseHandler();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      await Note.create({
        ...req.body.note,
        date: new Date(),
      });
      return res.json({ status: "OK", message: "created note" });
    } catch (error) {
      return res.status(404).json(error);
    }
  }
};
