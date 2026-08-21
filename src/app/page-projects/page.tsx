import BtnDefaultSm from "../utils/Buttons/Btn-default-sm"
import BoxInfoBlue from "../utils/box-info-blue"
import BoxInfoAccent from "../utils/box-info-accent"
import Link from "next/link"

const projects = [
    {
        title: "DeBarros Tattoo site",
        href: "/page-projects/debarros-tattoo",
        type: "Frontend",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!",
        stack: ["Next.js", "Prismic", "CMS"],
    },
    {
        title: "DeBarros Tattoo site",
        href: "/page-projects/debarros-tattoo",
        type: "Frontend",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!",
        stack: ["Next.js", "Prismic", "CMS"],
    },
    {
        title: "DeBarros Tattoo site",
        href: "/page-projects/debarros-tattoo",
        type: "Frontend",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!",
        stack: ["Next.js", "Prismic", "CMS"],
    },
    {
        title: "DeBarros Tattoo site",
        href: "/page-projects/debarros-tattoo",
        type: "Frontend",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!",
        stack: ["Next.js", "Prismic", "CMS"],
    },
    {
        title: "DeBarros Tattoo site",
        href: "/page-projects/debarros-tattoo",
        type: "Frontend",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!",
        stack: ["Next.js", "Prismic", "CMS"],
    },
    {
        title: "DeBarros Tattoo site",
        href: "/page-projects/debarros-tattoo",
        type: "Frontend",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!",
        stack: ["Next.js", "Prismic", "CMS"],
    },
]

export default function PageProjects() {
    return (
        <>
            <div className="flex flex-col gap-4 py-4">
                <h3 className="text-primary uppercase font-bold">Projetos</h3>
                <h1 className="text-display text-4xl">Projetos selecionados</h1>
            </div>

            <div className="py-6">
                <div className="flex gap-2 mb-6">
                    <BtnDefaultSm>Todos</BtnDefaultSm>
                    <BtnDefaultSm>Frontend</BtnDefaultSm>
                    <BtnDefaultSm>Backend</BtnDefaultSm>
                    <BtnDefaultSm>FullStack</BtnDefaultSm>
                </div>

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
                                    {project.stack.map((tech) => (
                                        <BoxInfoBlue key={tech}>{tech}</BoxInfoBlue>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
