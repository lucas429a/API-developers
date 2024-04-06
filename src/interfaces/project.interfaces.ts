import { QueryResult } from "pg"

export type project = {
    id: number,
    name: string,
    description: string,
    repository: string,
    startDate: Date,
    endDate: Date | null,
    developerId:number | null,
}
export type createProject = Omit <project, "id">

export type ProjectResult = QueryResult<project>

export type updateProject = Partial<project>