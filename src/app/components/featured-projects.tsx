import { Suspense } from "react"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"
import { FeaturedProjectsList } from "./featured-projects-dynamic"
import { FeaturedProjectsGridSkeleton } from "./featured-projects-skeletons"

export default function FeaturedProjects() {
    return (
        <>
            <div className="mt-4 flex items-center justify-between py-2">
                <h2 className="text-2xl font-extrabold">Projetos em destaque</h2>
                <div className="flex items-center gap-2">
                    <Link href="/page-projects" className="font-bold text-primary">
                        Ver todos
                    </Link>
                    <FaArrowRight className="cursor-pointer text-primary" />
                </div>
            </div>

            <Suspense fallback={<FeaturedProjectsGridSkeleton />}>
                <FeaturedProjectsList />
            </Suspense>
        </>
    )
}
