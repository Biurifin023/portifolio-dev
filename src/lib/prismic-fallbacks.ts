import type { Project } from "@/app/page-projects/projects-grid"
import type { ProjectDetail } from "@/lib/prismic-mappers"

export const fallbackProjects: Project[] = [
    {
        title: "DeBarros Tattoo site",
        href: "/page-projects/debarros-tattoo-site",
        type: "Frontend",
        description:
            "Site institucional para estúdio de tatuagem com formulário de orçamento e portfólio.",
        stack: ["Next.js", "Prismic", "CMS"],
    },
]

export const fallbackAbout = {
    description:
        "Desenvolvedor Full-Stack focado em Front-end, com 8 meses de experiência adquirida por meio de estudos e projetos práticos na plataforma Rocketseat.",
    stack: ["Next.js", "React", "TypeScript", "Prismic", "Tailwind"],
    trajectory: [
        {
            date: "Jul/2026",
            title: "ADS - Análise e Desenvolvimento de Sistemas",
            institution: "UNINTER",
        },
        {
            date: "Jan/2026",
            title: "Formação FullStack",
            institution: "RocketSeat",
        },
    ],
}

export const fallbackProjectDetails: Record<string, ProjectDetail> = {
    "debarros-tattoo-site": {
        uid: "debarros-tattoo-site",
        title: "DeBarros Tattoo site",
        summary: "Site institucional para estúdio de tatuagem",
        about:
            "Site desenvolvido para tatuador, com funcionalidades que levam a um formulário para orçamentos, portifolio e contato.",
        features: [
            "Formulário com validação pelo Zod + React Hook Form",
            "Integração CMS com Prismic para atualização de dados e imagens",
            "Apresentação de portfólio com carrossel animado",
            "Contatos por redes socias",
        ],
        imageUrl: "",
        imageAlt: "Imagem do site DeBarros Tattoo",
        githubUrl: "https://github.com/Biurifin023",
        type: "Frontend",
        description:
            "Site institucional para estúdio de tatuagem com formulário de orçamento e portfólio.",
        stack: ["Next.js", "Prismic", "CMS"],
        featured: false,
    },
}
