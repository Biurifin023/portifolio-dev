import { getAboutContent } from "@/lib/prismic-queries"

export async function AboutDescription() {
    const { description } = await getAboutContent()

    return <p className="text-muted">{description}</p>
}

export async function TrajectoryList() {
    const { trajectory } = await getAboutContent()

    return (
        <>
            {trajectory.map(item => (
                <div
                    key={`${item.date}-${item.title}`}
                    className="flex flex-col gap-2 border-b border-border p-4 sm:flex-row sm:gap-4"
                >
                    <div className="sm:w-20 sm:shrink-0">
                        <small className="text-muted">{item.date}</small>
                    </div>
                    <div className="border-l-2 border-primary pl-4 sm:border-l-2">
                        <h3 className="font-bold">{item.title}</h3>
                        <small className="text-muted">{item.institution}</small>
                    </div>
                </div>
            ))}
        </>
    )
}
