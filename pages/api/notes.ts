import { NextApiRequest, NextApiResponse } from "next";
import mongooseHandler from "utils/mongooseHandler";
import { Note } from "../../models/Note";

mongooseHandler();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      await Note.create(req.body.note);
      res.json({ status: "OK", message: "created note" });
    } catch (error) {
      res
        .status(406)
        .json({ status: "Error", message: "couldn't create note" });
    }
  }

  const page: number | any = req.query.page;
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
};
