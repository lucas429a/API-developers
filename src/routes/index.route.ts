import { Router } from "express";
import { devRoutes } from "./dev.route";
import { projectRoutes } from "./projects.route";


export const routes:Router = Router();

routes.use("/developers",devRoutes)
routes.use("/projects",projectRoutes)