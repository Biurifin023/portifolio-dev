import Image from "next/image"
import imgDb from "@/assets/img-debarros-site.png"

// Troque este fetch pelo client do CMS (ex.: Prismic) quando integrar.
async function getProjectContent() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return {
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
        image: imgDb,
        imageAlt: "Imagem do site DeBarros Tattoo",
    }
}

export async function ProjectBreadcrumbTitle() {
    const { title } = await getProjectContent()

    return <p className="text-primary font-bold">{title}</p>
}

export async function ProjectHeader() {
    const { title, summary } = await getProjectContent()

    return (
        <>
            <h1 className="text-display text-4xl">{title}</h1>
            <p className="text-muted">{summary}</p>
        </>
    )
}

export async function ProjectImage() {
    const { image, imageAlt } = await getProjectContent()

    return (
        <div className="p-4 bg-card border border-border rounded-lg">
            <Image src={image} alt={imageAlt} className="rounded-lg" />
        </div>
    )
}

export async function ProjectAbout() {
    const { about } = await getProjectContent()

    return <p className="text-muted">{about}</p>
}

export async function ProjectFeatures() {
    const { features } = await getProjectContent()

    return (
        <ul className="flex flex-col gap-3">
            {features.map(feature => (
                <li key={feature} className="flex items-start gap-3 text-muted">
                    <span className="mt-2 size-2 rounded-full bg-primary shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>
    )
}
