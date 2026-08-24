import { Suspense } from "react"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"
import { FeaturedProjectsList } from "./featured-projects-dynamic"
import { FeaturedProjectsGridSkeleton } from "./featured-projects-skeletons"

export default function FeaturedProjects() {
    return (
        <>
            <div className="mt-4 flex flex-col gap-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-extrabold sm:text-2xl">
                    Projetos em destaque
                </h2>
                <Link
                    href="/page-projects"
                    className="flex items-center gap-2 font-bold text-primary"
                >
                    Ver todos
                    <FaArrowRight />
                </Link>
            </div>

            <Suspense fallback={<FeaturedProjectsGridSkeleton />}>
                <FeaturedProjectsList />
            </Suspense>
        </>
    )
}
