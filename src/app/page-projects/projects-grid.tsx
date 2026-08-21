"use client"

import { useState } from "react"
import Link from "next/link"
import BtnDefaultSm from "../utils/Buttons/Btn-default-sm"
import BoxInfoAccent from "../utils/box-info-accent"
import BoxInfoBlue from "../utils/box-info-blue"

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
            <div className="mb-6 flex gap-2">
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

            <div className="grid grid-cols-3 gap-4">
                {filtered.map((project, index) => (
                    <Link
                        key={`${project.href}-${index}`}
                        href={project.href}
                        className="block h-full transition-transform duration-200 ease-out hover:scale-[1.03]"
                    >
                        <div className="flex h-full flex-col gap-2 rounded-md border border-border bg-card p-4 transition-colors duration-200 hover:border-muted">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold">{project.title}</h3>
                                <BoxInfoAccent>{project.type}</BoxInfoAccent>
                            </div>

                            <p className="text-muted">{project.description}</p>

                            <div className="flex gap-2">
                                {project.stack.map(tech => (
                                    <BoxInfoBlue key={tech}>{tech}</BoxInfoBlue>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}
