import Skeleton from "@/app/components/skeleton"

export function HomeAboutDescriptionSkeleton() {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
        </div>
    )
}

export function HomeAboutStackSkeleton() {
    return (
        <div className="flex flex-wrap gap-2">
            {Array.from({ length: 7 }).map((_, index) => (
                <Skeleton key={index} className="h-7 w-20 rounded-lg" />
            ))}
        </div>
    )
}
