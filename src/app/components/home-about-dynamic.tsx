import BoxInfoBlue from "@/app/utils/box-info-blue"
import { getAboutContent } from "@/lib/prismic-queries"

export async function HomeAboutDescription() {
    const { description } = await getAboutContent()

    return <p className="text-muted">{description}</p>
}

export async function HomeAboutStack() {
    const { stack } = await getAboutContent()

    return (
        <div className="flex flex-wrap gap-1.5">
            {stack.map((tech, index) => (
                <BoxInfoBlue key={`${tech}-${index}`}>{tech}</BoxInfoBlue>
            ))}
        </div>
    )
}
