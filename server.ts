import express, { Application, Request, Response } from "express";
import next from "next";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import noteController from "./api/controllers/note";
import mongooseHandler from "./utils/mongooseHandler";
import { router } from "./api/router";
dotenv.config({ path: __dirname + "/.env" });

const port: number = 80;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app: Application = express();
  mongooseHandler();

  app.use(bodyParser.json());
  app.use(cors());
  router(app);

  app.all("*", (req: Request, res: Response) => nextHandler(req, res));
  app.listen(port, () => console.log(`> Ready on http://localhost:${port}`));
});
