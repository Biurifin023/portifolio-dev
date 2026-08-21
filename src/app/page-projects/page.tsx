import { Suspense } from "react"
import BtnDefaultSm from "../utils/Buttons/Btn-default-sm"
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
                <div className="mb-6 flex gap-2">
                    <BtnDefaultSm>Todos</BtnDefaultSm>
                    <BtnDefaultSm>Frontend</BtnDefaultSm>
                    <BtnDefaultSm>Backend</BtnDefaultSm>
                    <BtnDefaultSm>FullStack</BtnDefaultSm>
                </div>

                <Suspense fallback={<ProjectsGridSkeleton />}>
                    <ProjectsList />
                </Suspense>
            </div>
        </>
    )
}
