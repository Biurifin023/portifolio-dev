"use client"

import { useState } from "react"
import BtnDefaultSm from "../utils/Buttons/Btn-default-sm"
import ProjectCard from "@/app/components/project-card"

export type ProjectType = "Frontend" | "Backend" | "FullStack"

export type Project = {
    title: string
    href: string
    type: ProjectType
    description: string
    stack: string[]
}

type Filter = "Todos" | ProjectType

const FILTERS: Filter[] = ["Todos", "Frontend", "Backend", "FullStack"]

type ProjectsGridProps = {
    projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
    const [filter, setFilter] = useState<Filter>("Todos")

    const filtered =
        filter === "Todos"
            ? projects
            : projects.filter(project => project.type === filter)

    return (
        <>
            <div className="mb-6 flex flex-wrap gap-2">
                {FILTERS.map(item => (
                    <BtnDefaultSm
                        key={item}
                        onClick={() => setFilter(item)}
                        className={
                            filter === item
                                ? "border-primary text-primary"
                                : undefined
                        }
                    >
                        {item}
                    </BtnDefaultSm>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((project, index) => (
                    <ProjectCard
                        key={`${project.href}-${index}`}
                        project={project}
                    />
                ))}
            </div>
        </>
    )
}
