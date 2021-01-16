import { NextApiRequest, NextApiResponse } from "next";
import mongooseHandler from "utils/mongooseHandler";
import { Note } from "../../../models/Note";

mongooseHandler();

export default async (req: NextApiRequest, res: NextApiResponse) => {
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
