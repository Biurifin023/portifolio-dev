import { isFilled } from "@prismicio/client"
import type { KeyTextField } from "@prismicio/client"
import type { Project, ProjectType } from "@/app/page-projects/projects-grid"
import type {
    PortAboutItem,
    PortCard,
    PortDocumentData,
    PortSlugProject,
} from "@/types/prismic"

const PROJECT_TYPES: ProjectType[] = ["Frontend", "Backend", "FullStack"]

export function slugify(value: string): string {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
}

export function mapProjectType(type: KeyTextField): ProjectType {
    if (type && PROJECT_TYPES.includes(type as ProjectType)) {
        return type as ProjectType
    }
    return "Frontend"
}

export function mapCardStack(card: PortCard): string[] {
    return [
        card.stack_card,
        card.stack_card2,
        card.stack_card3,
        card.stack_card4,
        card.stack_card5,
        card.stack_card6,
        card.stack_card7,
        card.stack_card8,
        card.stack_card9,
        card.stack_card10,
    ].filter((tech): tech is string => Boolean(tech?.trim()))
}

export function mapCardToProject(card: PortCard): Project {
    const title = card.title ?? "Projeto"
    return {
        title,
        href: `/page-projects/${slugify(title)}`,
        type: mapProjectType(card.type),
        description: card.description ?? "",
        stack: mapCardStack(card),
    }
}

export function mapFeaturesFromSlug(slugProject: PortSlugProject): string[] {
    return [
        slugProject.funtionalities1,
        slugProject.funtionalities2,
        slugProject.funtionalities3,
        slugProject.funtionalities4,
    ].filter((text): text is string => Boolean(text?.trim()))
}

export function findBySlug<T extends { title: KeyTextField }>(
    items: T[],
    slug: string
): T | undefined {
    return items.find(item => slugify(item.title ?? "") === slug)
}

export function mapProjectDetailFromPort(
    slug: string,
    card: PortCard | undefined,
    slugProject: PortSlugProject | undefined
) {
    const title =
        slugProject?.title ?? card?.title ?? slug.replace(/-/g, " ")

    return {
        uid: slug,
        title,
        summary: slugProject?.description ?? card?.description ?? "",
        about: slugProject?.description_about ?? "",
        features: slugProject ? mapFeaturesFromSlug(slugProject) : [],
        imageUrl:
            slugProject && isFilled.image(slugProject.print_page)
                ? slugProject.print_page.url
                : "",
        imageAlt:
            slugProject && isFilled.image(slugProject.print_page)
                ? (slugProject.print_page.alt ?? title)
                : title,
        githubUrl:
            slugProject && isFilled.link(slugProject.github_url)
                ? slugProject.github_url.url
                : "https://github.com/Biurifin023",
        type: mapProjectType(card?.type ?? null),
        description: card?.description ?? slugProject?.description ?? "",
        stack: card ? mapCardStack(card) : [],
        featured: false,
    }
}

export type ProjectDetail = ReturnType<typeof mapProjectDetailFromPort>

export function mapAboutStacks(aboutItem: PortAboutItem | undefined): string[] {
    if (!aboutItem) return []

    return [
        aboutItem.stack_1,
        aboutItem.stack_2,
        aboutItem.stack_3,
        aboutItem.stack_4,
        aboutItem.stack_5,
        aboutItem.stack_6,
        aboutItem.stack_7,
        aboutItem.stack_8,
        aboutItem.stack_9,
        aboutItem.stack_10,
    ].filter((tech): tech is string => Boolean(tech?.trim()))
}

export function mapAboutFromPort(data: PortDocumentData) {
    const aboutItem: PortAboutItem | undefined = data.about?.[0]

    return {
        description: aboutItem?.description ?? "",
        stack: mapAboutStacks(aboutItem),
        trajectory: [] as Array<{
            date: string
            title: string
            institution: string
        }>,
    }
}
