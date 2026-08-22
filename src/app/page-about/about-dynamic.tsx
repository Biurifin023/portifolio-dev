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
                    className="flex gap-4 border-b border-border p-4"
                >
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
