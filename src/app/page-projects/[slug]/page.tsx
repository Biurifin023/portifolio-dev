import { Suspense } from "react"
import Link from "next/link"
import BtnAccent from "@/app/utils/Buttons/Btn-accent"
import { getProjectBySlug, getProjectSlugs } from "@/lib/prismic-queries"
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

type ProjectPageProps = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const slugs = await getProjectSlugs()
    return slugs.map(slug => ({ slug }))
}

export default async function ProjectContent({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = await getProjectBySlug(slug)
    const githubUrl = project?.githubUrl ?? "https://github.com/Biurifin023"

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
                            <ProjectBreadcrumbTitle slug={slug} />
                        </Suspense>
                    </div>

                    <Suspense fallback={<ProjectHeaderSkeleton />}>
                        <ProjectHeader slug={slug} />
                    </Suspense>

                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={githubUrl}
                    >
                        <BtnAccent>Ver no GitHub</BtnAccent>
                    </Link>
                </div>

                <div className="w-1/2">
                    <Suspense fallback={<ProjectImageSkeleton />}>
                        <ProjectImage slug={slug} />
                    </Suspense>
                </div>
            </div>

            <div className="flex flex-col gap-3 py-4">
                <h2 className="font-display text-lg">Sobre o projeto</h2>
                <Suspense fallback={<ProjectAboutSkeleton />}>
                    <ProjectAbout slug={slug} />
                </Suspense>
            </div>

            <div className="flex flex-col gap-3">
                <h2 className="font-display text-lg">Funcionalidades</h2>
                <Suspense fallback={<ProjectFeaturesSkeleton />}>
                    <ProjectFeatures slug={slug} />
                </Suspense>
            </div>
        </>
    )
}
