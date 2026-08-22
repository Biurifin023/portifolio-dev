import { cache } from "react"
import { createClient } from "@/prismicio"
import {
    findBySlug,
    mapAboutFromPort,
    mapCardToProject,
    mapProjectDetailFromPort,
    slugify,
    type ProjectDetail,
} from "@/lib/prismic-mappers"
import {
    fallbackAbout,
    fallbackProjectDetails,
    fallbackProjects,
} from "@/lib/prismic-fallbacks"
import type { Project } from "@/app/page-projects/projects-grid"
import type { PortDocumentData } from "@/types/prismic"

const getPortDocument = cache(async () => {
    const client = createClient()
    const doc = await client.getSingle("port")
    return doc.data as PortDocumentData
})

export const getAllProjects = cache(async (): Promise<Project[]> => {
    try {
        const data = await getPortDocument()
        if (!data.card?.length) return fallbackProjects
        return data.card.map(mapCardToProject)
    } catch (error) {
        console.warn("[Prismic] Falha ao buscar cards do port:", error)
        return fallbackProjects
    }
})

export const getFeaturedProjects = cache(async (): Promise<Project[]> => {
    try {
        const projects = await getAllProjects()
        return projects.slice(0, 3)
    } catch (error) {
        console.warn("[Prismic] Falha ao buscar projetos em destaque:", error)
        return fallbackProjects.slice(0, 3)
    }
})

export const getProjectBySlug = cache(
    async (slug: string): Promise<ProjectDetail | null> => {
        try {
            const data = await getPortDocument()
            const card = findBySlug(data.card ?? [], slug)
            const slugProject = findBySlug(data.slug_project ?? [], slug)

            if (!card && !slugProject) {
                return fallbackProjectDetails[slug] ?? null
            }

            return mapProjectDetailFromPort(slug, card, slugProject)
        } catch (error) {
            console.warn(`[Prismic] Falha ao buscar slug "${slug}":`, error)
            return fallbackProjectDetails[slug] ?? null
        }
    }
)

export const getProjectSlugs = cache(async (): Promise<string[]> => {
    try {
        const data = await getPortDocument()
        const fromCards = (data.card ?? []).map(item =>
            slugify(item.title ?? "")
        )
        const fromDetails = (data.slug_project ?? []).map(item =>
            slugify(item.title ?? "")
        )

        return Array.from(
            new Set([...fromCards, ...fromDetails].filter(Boolean))
        )
    } catch {
        return Object.keys(fallbackProjectDetails)
    }
})

export const getAboutContent = cache(async () => {
    try {
        const data = await getPortDocument()
        const about = mapAboutFromPort(data)

        return {
            description: about.description || fallbackAbout.description,
            stack: about.stack.length > 0 ? about.stack : fallbackAbout.stack,
            trajectory:
                about.trajectory.length > 0
                    ? about.trajectory
                    : fallbackAbout.trajectory,
        }
    } catch (error) {
        console.warn("[Prismic] Falha ao buscar about do port:", error)
        return fallbackAbout
    }
})
