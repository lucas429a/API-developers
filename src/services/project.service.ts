import format from "pg-format"
import { ProjectResult, createProject, project, updateProject } from "../interfaces/project.interfaces"
import { client } from "../database"


export const createProjectService = async (data: createProject) => {
    const queryFormat: string = format(
        `INSERT INTO "projects" (%I) VALUES (%L) RETURNING *`,
        Object.keys(data),
        Object.values(data)
    )

    const queryResult: ProjectResult = await client.query(queryFormat)

    return queryResult.rows[0]
}

export const getProjectService = async (data: string) => {
    const queryString =
        `SELECT "p"."id" AS "projectId",
        "p"."name" AS "projectName",
        "p"."description" AS "projectDescription",
        "p"."repository" AS "projectRepository",
        "p"."startDate" AS "projectStartDate",
        "p"."endDate" AS "projectEndDate",
        "d"."name" AS "projectDeveloperName"    
        FROM "projects" AS "p" JOIN "developers" "d" ON "p"."developerId" = "d"."id" WHERE "d"."id" = $1; `

    const queryResult:ProjectResult = await client.query(queryString,[data])

    return queryResult.rows[0]

}

export const updateProjectService = async (id:string,body:updateProject):Promise<project> =>{
    const queryConfig = format(`
    UPDATE projects SET (%I) = ROW (%L) WHERE id = $1 RETURNING *;`, 
    Object.keys(body), 
    Object.values(body) 
    );

    const queryResult:ProjectResult = await client.query(queryConfig,[id])

    return queryResult.rows[0]
}