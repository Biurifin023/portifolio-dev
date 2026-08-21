// Troque este fetch pelo client do CMS (ex.: Prismic) quando integrar.
async function getAboutContent() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return {
        description:
            "Desenvolvedor Full-Stack focado em Front-end, com 8 meses de experiência adquirida por meio de estudos e projetos práticos na plataforma Rocketseat. Atualmente curso Análise e Desenvolvimento de Sistemas (ADS), reforçando a base teórica e prática no desenvolvimento de software. Busco a primeira oportunidade na área, com dedicação ao aprendizado contínuo e à evolução diária. Além da formação técnica, desenvolvi habilidades interpessoais e de comunicação em experiências profissionais anteriores, que exigiam colaboração, responsabilidade e entrega de resultados no prazo, fortalecendo minhas soft skills.",
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
}

export async function AboutDescription() {
    const { description } = await getAboutContent()

    return <p className="text-muted">{description}</p>
}

export async function TrajectoryList() {
    const { trajectory } = await getAboutContent()

    return (
        <>
            {trajectory.map((item) => (
                <div key={`${item.date}-${item.title}`} className="flex gap-4 border-b border-border p-4">
                    <div>
                        <small className="text-muted">{item.date}</small>
                    </div>
                    <div className="border-l-2 border-primary">
                        <h3 className="ml-4 font-bold">{item.title}</h3>
                        <small className="ml-4 text-muted">{item.institution}</small>
                    </div>
                </div>
            ))}
        </>
    )
}
