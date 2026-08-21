import { Suspense } from "react"
import { AboutDescription, TrajectoryList } from "./about-dynamic"
import { DescriptionSkeleton, TrajectoryListSkeleton } from "./about-skeletons"

export default function PageAbout() {
    return (
        <>
            <div className="flex flex-col gap-4 border-b border-border p-4 pb-10">
                <h2 className="uppercase font-bold text-primary">Sobre</h2>
                <h1 className="text-4xl font-display">Vitor Luiz</h1>

                <Suspense fallback={<DescriptionSkeleton />}>
                    <AboutDescription />
                </Suspense>
            </div>

            <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-display">Trajetória</h1>

                    <Suspense fallback={<TrajectoryListSkeleton />}>
                        <TrajectoryList />
                    </Suspense>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-display">Objetivos</h1>

                    <div className="rounded-md border border-border border-l-4 border-l-steel bg-card p-4">
                        <h3 className="text-md font-bold">Aprender fazendo</h3>
                        <p className="text-muted">Teoria entra melhor quando vira projeto no GitHub.</p>
                    </div>

                    <div className="rounded-md border border-border border-l-4 border-l-steel bg-card p-4">
                        <h3 className="text-md font-bold">Aprender fazendo</h3>
                        <p className="text-muted">Teoria entra melhor quando vira projeto no GitHub.</p>
                    </div>

                    <div className="rounded-md border border-border border-l-4 border-l-steel bg-card p-4">
                        <h3 className="text-md font-bold">Aprender fazendo</h3>
                        <p className="text-muted">Teoria entra melhor quando vira projeto no GitHub.</p>
                    </div>

                    <div className="rounded-md border border-border border-l-4 border-l-steel bg-card p-4">
                        <h3 className="text-md font-bold">Aprender fazendo</h3>
                        <p className="text-muted">Teoria entra melhor quando vira projeto no GitHub.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
