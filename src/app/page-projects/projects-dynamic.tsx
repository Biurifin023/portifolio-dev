import { ProjectsGrid, type Project } from "./projects-grid"

// Troque este fetch pelo client do CMS (ex.: Prismic) quando integrar.
async function getProjects(): Promise<Project[]> {
    return [
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
            type: "Backend",
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
            type: "FullStack",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!",
            stack: ["Next.js", "Prismic", "CMS"],
        },
        {
            title: "DeBarros Tattoo site",
            href: "/page-projects/debarros-tattoo",
            type: "Backend",
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
}

export async function ProjectsList() {
    const projects = await getProjects()
    return <ProjectsGrid projects={projects} />
}
