import format from "pg-format";
import { createDev, dev, devResult, updateDev } from "../interfaces/dev.interface";
import { client } from "../database";
import { QueryConfig } from "pg";

export const createDevService = async (data: createDev) => {
    const queryFormat: string = format(
        `INSERT INTO "developers" (%I) VALUES (%L) RETURNING *`,
        Object.keys(data),
        Object.values(data)
    )

    const queryResult: devResult = await client.query(queryFormat)

    return queryResult.rows[0]
}

export const getDevService = async (data: string) => {
    const queryString =
        `SELECT "d"."id" AS "developerId",
        "d"."name" AS "developerName",
        "d"."email" AS "developerEmail",
        "di"."developerSince" AS "developerInfoDeveloperSince",
        "di"."preferredOS" AS "developerInfoPreferredOS" 
         FROM "developers" AS "d" LEFT JOIN "developerInfos" AS "di" ON "di"."developerId" = "d"."id" WHERE "d"."id" = $1; `

    const queryConfig:QueryConfig = {
        text:queryString,
        values:[data]
    }
    
    const queryResult :devResult = await client.query(queryConfig)

    return queryResult.rows[0]
}

export const updateDevService = async (id:string,body:updateDev):Promise<dev> => {
    const queryConfig:string = format(`
    UPDATE developers SET (%I) = ROW (%L) WHERE id = $1 RETURNING *;`, 
    Object.keys(body), 
    Object.values(body) 
    );

    const queryResult:devResult = await client.query(queryConfig,[id])

    return queryResult.rows[0]
}

export const deleteDevService = async (data:string):Promise<void>=>{
    const queryString = `DELETE FROM developers WHERE id = $1;`;

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [data]
    }

    await client.query(queryConfig);
}

export const createDeveloperInfoService= async ( data:string) => {
    const queryFormat: string = format(
        `INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *`,
        Object.keys(data),
        Object.values(data)
    )

    const queryResult: devResult = await client.query(queryFormat)

    return queryResult.rows[0]
}
























