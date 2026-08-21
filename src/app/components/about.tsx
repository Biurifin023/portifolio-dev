import { Suspense } from "react"
import { HomeAboutDescription, HomeAboutStack } from "./home-about-dynamic"
import {
    HomeAboutDescriptionSkeleton,
    HomeAboutStackSkeleton,
} from "./home-about-skeletons"

export default function About() {
    return (
        <div className="grid grid-cols-1 gap-8 rounded-lg border border-border bg-card p-6 md:grid-cols-2">
            <div className="flex flex-col gap-6">
                <h2 className="uppercase font-bold text-primary">Sobre mim</h2>
                <Suspense fallback={<HomeAboutDescriptionSkeleton />}>
                    <HomeAboutDescription />
                </Suspense>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="uppercase font-bold text-primary">Stack atual</h2>
                <Suspense fallback={<HomeAboutStackSkeleton />}>
                    <HomeAboutStack />
                </Suspense>
            </div>
        </div>
    )
}
