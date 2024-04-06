import { NextFunction, Request, Response } from "express";
import { QueryConfig } from "pg";
import { client } from "../database";
import AppError from "../errors/App.error";
import { ProjectResult, project } from "../interfaces/project.interfaces";


export const verifyIdProject = async (req:Request,res:Response,next:NextFunction)=>{
    const {id} = req.params
    
    const queryString:ProjectResult = await client.query(`SELECT * FROM "projects" WHERE id = $1;`,[id]);


    if(!queryString.rowCount){
        throw new AppError("Project not found.",404)
    }

    const foundDev : project = queryString.rows[0]

    res.locals = {... res.locals,foundDev}

    return next()
}
