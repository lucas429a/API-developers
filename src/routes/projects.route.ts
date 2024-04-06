import { Router } from "express";
import { createProjectController, getProjectController, updateProjectController } from "../controllers/project.controller";
import { verifyIdProject } from "../middlewares/project.middleware";

export const projectRoutes:Router= Router()

projectRoutes.post("",createProjectController)
projectRoutes.get("/:id",verifyIdProject,getProjectController)
projectRoutes.patch("/:id",verifyIdProject,updateProjectController)