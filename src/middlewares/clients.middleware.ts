import { NextFunction, Request, Response } from "express"
import { dev, devResult } from "../interfaces/dev.interface"
import { client } from "../database"
import AppError from "../errors/App.error"
import { QueryConfig } from "pg"

export const verifyEmailDeveloper = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {email} = req.body


    if(!email) return next()
  
    const query: string = 'SELECT * FROM "developers" WHERE "email" = $1;'
    const queryResult: devResult = await client.query(query, [email])
  
    if(queryResult.rowCount) {
      throw new AppError('Email already exists.', 409)
    }
  
    return next()
}

export const verifyIdDeveloper = async (req:Request,res:Response,next:NextFunction)=>{
    const {id} = req.params
    
    const queryString:devResult = await client.query(`SELECT * FROM "developers" WHERE id = $1;`,[id]);

    console.log(id)
    console.log(queryString)
    if(!queryString.rowCount){
        throw new AppError("Developer not found.",404)
    }
    console.log("Oi")
    const foundDev : dev = queryString.rows[0]

    res.locals = {... res.locals,foundDev}

    return next();
}

  