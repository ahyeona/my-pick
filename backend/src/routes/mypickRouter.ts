import { Router } from "express";
import { mypickCreateController, mypickDetailController, mypickDeleteController, mypickListController, mypickUpdateController } from "../controllers/mypickController";

export const mypickRouter = Router();

mypickRouter.get("/list", mypickListController);
mypickRouter.post("/detail", mypickDetailController);
mypickRouter.post("/create", mypickCreateController);
mypickRouter.post("/update", mypickUpdateController);
mypickRouter.post("/delete", mypickDeleteController);