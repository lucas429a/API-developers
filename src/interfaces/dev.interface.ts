import { QueryResult } from "pg"

export type dev = {
    id: number,
    name: string,
    email: string
  }

export type createDev =  Omit<dev ,"id">

export type updateDev = Partial<createDev>

export type devResult = QueryResult<dev>

export type getDev={
    developerId: number,
    developerName: string,
    developerEmail: string,
    developerInfoDeveloperSince: Date,
    developerInfoPreferredOS: string
}

export type createGet = Omit<getDev,"id">