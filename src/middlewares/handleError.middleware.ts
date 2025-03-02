import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";

export const handleErrors = (error: unknown, req: Request, res: Response, next: NextFunction): Response => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message })
  }

  console.log(error)
  return res.status(500).json({ error: 'Internal server Error.' })
}