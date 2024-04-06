import { Router } from "express";
import { createDevController, createDevInfoController, deleteDevController, getDevController, updateDevController } from "../controllers/dev.controller";
import { verifyEmailDeveloper, verifyIdDeveloper } from "../middlewares/clients.middleware";

export const devRoutes:Router = Router();

devRoutes.post("",verifyEmailDeveloper,createDevController);
devRoutes.get("/:id",verifyIdDeveloper,getDevController);
devRoutes.patch("/:id",verifyIdDeveloper,verifyEmailDeveloper,updateDevController);
devRoutes.delete("/:id",verifyIdDeveloper,deleteDevController);
devRoutes.post("/:id/infos",verifyIdDeveloper,createDevInfoController);