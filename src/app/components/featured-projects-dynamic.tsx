import Link from "next/link"
import BoxInfoAccent from "../utils/box-info-accent"
import BoxInfoBlue from "../utils/box-info-blue"
import { getFeaturedProjects } from "@/lib/prismic-queries"

export async function FeaturedProjectsList() {
    const projects = await getFeaturedProjects()

    return (
        <div className="grid grid-cols-3 gap-4">
            {projects.map((project, index) => (
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
    )
}
