import { ProjectsGrid } from "./projects-grid"
import { getAllProjects } from "@/lib/prismic-queries"

export async function ProjectsList() {
    const projects = await getAllProjects()
    return <ProjectsGrid projects={projects} />
}
