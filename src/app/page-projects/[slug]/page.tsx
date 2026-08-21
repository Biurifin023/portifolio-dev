import { Suspense } from "react"
import Link from "next/link"
import BtnAccent from "@/app/utils/Buttons/Btn-accent"
import {
    ProjectAbout,
    ProjectBreadcrumbTitle,
    ProjectFeatures,
    ProjectHeader,
    ProjectImage,
} from "./project-dynamic"
import {
    ProjectAboutSkeleton,
    ProjectBreadcrumbSkeleton,
    ProjectFeaturesSkeleton,
    ProjectHeaderSkeleton,
    ProjectImageSkeleton,
} from "./project-skeletons"

export default function ProjectContent() {
    return (
        <>
            <div className="flex border-b border-border py-4">
                <div className="flex flex-col gap-4 w-1/2 py-8">
                    <div className="flex gap-2 items-center">
                        <Link
                            className="hover:text-primary"
                            href="/page-projects"
                        >
                            Projetos
                        </Link>
                        <p>/</p>
                        <Suspense fallback={<ProjectBreadcrumbSkeleton />}>
                            <ProjectBreadcrumbTitle />
                        </Suspense>
                    </div>

                    <Suspense fallback={<ProjectHeaderSkeleton />}>
                        <ProjectHeader />
                    </Suspense>

                    <Link
                        target="blank"
                        href="https://github.com/Biurifin023"
                    >
                        <BtnAccent>Ver no GitHub</BtnAccent>
                    </Link>
                </div>

                <div className="w-1/2">
                    <Suspense fallback={<ProjectImageSkeleton />}>
                        <ProjectImage />
                    </Suspense>
                </div>
            </div>

            <div className="flex flex-col gap-3 py-4">
                <h2 className="font-display text-lg">Sobre o projeto</h2>
                <Suspense fallback={<ProjectAboutSkeleton />}>
                    <ProjectAbout />
                </Suspense>
            </div>

            <div className="flex flex-col gap-3">
                <h2 className="font-display text-lg">Funcionalidades</h2>
                <Suspense fallback={<ProjectFeaturesSkeleton />}>
                    <ProjectFeatures />
                </Suspense>
            </div>
        </>
    )
}
