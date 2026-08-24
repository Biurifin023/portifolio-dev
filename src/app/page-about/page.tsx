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
                        <h3 className="text-md font-bold">Evoluir no Front-end</h3>
                        <p className="text-muted">
                            Dominar Next.js, React e TypeScript com interfaces claras, acessíveis e performáticas.
                        </p>
                    </div>

                    <div className="rounded-md border border-border border-l-4 border-l-steel bg-card p-4">
                        <h3 className="text-md font-bold">Base Full-Stack</h3>
                        <p className="text-muted">
                            Entender bem a ponte entre front e back para entregar features de ponta a ponta.
                        </p>
                    </div>

                    <div className="rounded-md border border-border border-l-4 border-l-steel bg-card p-4">
                        <h3 className="text-md font-bold">Aprendizado contínuo</h3>
                        <p className="text-muted">
                            Estudar todo dia, com ADS + projetos práticos, sem parar de evoluir.
                        </p>
                    </div>

                    <div className="rounded-md border border-border border-l-4 border-l-steel bg-card p-4">
                        <h3 className="text-md font-bold">Colaboração</h3>
                        <p className="text-muted">
                            Comunicar bem, cumprir prazos e trabalhar em equipe com responsabilidade.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
