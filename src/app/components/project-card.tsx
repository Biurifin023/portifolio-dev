import Link from "next/link"
import BoxInfoAccent from "@/app/utils/box-info-accent"
import BoxInfoBlue from "@/app/utils/box-info-blue"
import type { Project } from "@/app/page-projects/projects-grid"

type ProjectCardProps = {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            href={project.href}
            className="block h-full transition-transform duration-200 ease-out hover:scale-[1.03]"
        >
            <article className="flex h-full min-h-56 flex-col gap-3 rounded-md border border-border bg-card p-4 transition-colors duration-200 hover:border-muted">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="min-w-0 flex-1 truncate text-lg font-bold">
                        {project.title}
                    </h3>
                    <BoxInfoAccent>{project.type}</BoxInfoAccent>
                </div>

                <div className="relative min-h-32 flex-1 overflow-hidden pb-8">
                    <p className="line-clamp-5 text-sm leading-relaxed text-muted">
                        {project.description}
                    </p>
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-card via-card/70 to-transparent transition-opacity duration-300"
                    />
                </div>

                <div className="mt-auto flex max-h-16 flex-wrap gap-1.5 overflow-hidden">
                    {project.stack.map(tech => (
                        <BoxInfoBlue key={tech}>{tech}</BoxInfoBlue>
                    ))}
                </div>
            </article>
        </Link>
    )
}
