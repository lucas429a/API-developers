import { Request,Response } from "express"
import { project } from "../interfaces/project.interfaces"
import { createProjectService, getProjectService, updateProjectService } from "../services/project.service"


export const createProjectController = async(req:Request , res:Response)=>{
    const project:project = await createProjectService(req.body)
    
    return res.status(201).json(project)
}

export const getProjectController= async (req:Request,  res:Response)=>{
    const getProject = await getProjectService (req.params.id)

    return res.status(200).json(getProject)
}

export const updateProjectController = async (req:Request,  res:Response)=>{
    const Updatedev = await updateProjectService(req.params.id,req.body)

    return res.status(200).json(Updatedev)
}
