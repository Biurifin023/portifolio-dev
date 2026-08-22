import Image from "next/image"
import imgDb from "@/assets/img-debarros-site.png"
import { getProjectBySlug } from "@/lib/prismic-queries"
import { notFound } from "next/navigation"

type ProjectSlugProps = {
    slug: string
}

async function getProject(slug: string) {
    const project = await getProjectBySlug(slug)
    if (!project) notFound()
    return project
}

export async function ProjectBreadcrumbTitle({ slug }: ProjectSlugProps) {
    const { title } = await getProject(slug)
    return <p className="text-primary font-bold">{title}</p>
}

export async function ProjectHeader({ slug }: ProjectSlugProps) {
    const { title, summary } = await getProject(slug)

    return (
        <>
            <h1 className="text-display text-4xl">{title}</h1>
            <p className="text-muted">{summary}</p>
        </>
    )
}

export async function ProjectImage({ slug }: ProjectSlugProps) {
    const { imageUrl, imageAlt } = await getProject(slug)

    return (
        <div className="p-4 bg-card border border-border rounded-lg">
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={1200}
                    height={675}
                    className="rounded-lg w-full h-auto"
                />
            ) : (
                <Image src={imgDb} alt={imageAlt} className="rounded-lg" />
            )}
        </div>
    )
}

export async function ProjectAbout({ slug }: ProjectSlugProps) {
    const { about } = await getProject(slug)
    return <p className="text-muted">{about}</p>
}

export async function ProjectFeatures({ slug }: ProjectSlugProps) {
    const { features } = await getProject(slug)

    return (
        <ul className="flex flex-col gap-3">
            {features.map(feature => (
                <li key={feature} className="flex items-start gap-3 text-muted">
                    <span className="mt-2 size-2 rounded-full bg-primary shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>
    )
}
