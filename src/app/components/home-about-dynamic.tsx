import BoxInfoBlue from "@/app/utils/box-info-blue"

// Troque este fetch pelo client do CMS (ex.: Prismic) quando integrar.
async function getHomeAboutContent() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return {
        description:
            "Desenvolvedor Full-Stack focado em Front-end, com 8 meses de experiência adquirida por meio de estudos e projetos práticos na plataforma Rocketseat. Atualmente curso Análise e Desenvolvimento de Sistemas (ADS), reforçando a base teórica e prática no desenvolvimento de software. Busco a primeira oportunidade na área, com dedicação ao aprendizado contínuo e à evolução diária. Além da formação técnica, desenvolvi habilidades interpessoais e de comunicação em experiências profissionais anteriores, que exigiam colaboração, responsabilidade e entrega de resultados no prazo, fortalecendo minhas soft skills.",
        stack: [
            "Next.js",
            "React",
            "Node.js",
            "JavaScript",
            "Prismic",
            "Next.js",
            "Css/Tailwind",
        ],
    }
}

export async function HomeAboutDescription() {
    const { description } = await getHomeAboutContent()

    return <p className="text-muted">{description}</p>
}

export async function HomeAboutStack() {
    const { stack } = await getHomeAboutContent()

    return (
        <div className="flex flex-wrap gap-2">
            {stack.map((tech, index) => (
                <BoxInfoBlue key={`${tech}-${index}`}>{tech}</BoxInfoBlue>
            ))}
        </div>
    )
}
