import Skeleton from "@/app/components/skeleton"

export function ProjectBreadcrumbSkeleton() {
    return <Skeleton className="h-5 w-40" />
}

export function ProjectHeaderSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-5 w-2/3" />
        </div>
    )
}

export function ProjectImageSkeleton() {
    return (
        <div className="p-4 bg-card border border-border rounded-lg">
            <Skeleton className="aspect-video w-full rounded-lg" />
        </div>
    )
}

export function ProjectAboutSkeleton() {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
        </div>
    )
}

export function ProjectFeaturesSkeleton() {
    return (
        <ul className="flex flex-col gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
                <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 size-2 rounded-full bg-primary shrink-0" />
                    <Skeleton className="h-5 w-3/4" />
                </li>
            ))}
        </ul>
    )
}
