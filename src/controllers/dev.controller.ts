import { Request, Response } from "express";
import { dev, getDev } from "../interfaces/dev.interface";
import { createDevService, createDeveloperInfoService, deleteDevService, getDevService, updateDevService } from "../services/dev.service";

export const createDevController = async(req:Request , res:Response)=>{
    const dev:dev = await createDevService(req.body)
    
    return res.status(201).json(dev)
}

export const getDevController = async (req:Request,  res: Response):Promise<Response>=>{
    const getDev = await getDevService(req.params.id)

    return res.status(200).json(getDev)
}

export const updateDevController = async (req:Request,  res:Response)=>{
    const Updatedev = await updateDevService(req.params.id,req.body)

    return res.status(200).json(Updatedev)
}

export const deleteDevController = async (req:Request, res:Response)=>{
    await deleteDevService(req.params.id)

    return res.status(204).json()
}

export const createDevInfoController = async(req:Request , res:Response)=>{
    const data = {... req.body , developerId:req.params.id}
    
    const devInfo = await createDeveloperInfoService(data)

    
    return res.status(201).json(devInfo)
}