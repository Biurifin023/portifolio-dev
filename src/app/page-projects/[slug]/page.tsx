import { Metadata } from "next"
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

export async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>
  }): Promise<Metadata> {
    const { slug } = await params
    const project = await getProjectBySlug(slug)
  
    if (!project) {
      return { title: "Projeto não encontrado" }
    }
  
    return {
      title: project.title,
      description: project.summary || project.description,
      openGraph: {
        title: project.title,
        description: project.summary,
        images: project.imageUrl ? [{ url: project.imageUrl || "/OG-img.png" }] : undefined,
      },
    }
  }

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
            <div className="flex flex-col gap-6 border-b border-border py-4 lg:flex-row lg:gap-8">
                <div className="flex w-full flex-col gap-4 py-4 lg:w-1/2 lg:py-8">
                    <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
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

                <div className="w-full lg:w-1/2">
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
