import ProjectCard from "@/app/components/project-card"
import { getFeaturedProjects } from "@/lib/prismic-queries"

export async function FeaturedProjectsList() {
    const projects = await getFeaturedProjects()

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <ProjectCard
                    key={`${project.href}-${index}`}
                    project={project}
                />
            ))}
        </div>
    )
}
