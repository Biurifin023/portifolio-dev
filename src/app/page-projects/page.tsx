import { Suspense } from "react"
import { ProjectsList } from "./projects-dynamic"
import { ProjectsGridSkeleton } from "./projects-skeletons"

export default function PageProjects() {
    return (
        <>
            <div className="flex flex-col gap-4 py-4">
                <h3 className="text-primary uppercase font-bold">Projetos</h3>
                <h1 className="text-display text-4xl">Projetos selecionados</h1>
            </div>

            <div className="py-6">
                <Suspense fallback={<ProjectsGridSkeleton />}>
                    <ProjectsList />
                </Suspense>
            </div>
        </>
    )
}
