import Skeleton from "@/app/components/skeleton"

export function DescriptionSkeleton() {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
        </div>
    )
}

export function TrajectoryItemSkeleton() {
    return (
        <div className="flex gap-4 border-b border-border p-4">
            <Skeleton className="h-4 w-16 shrink-0" />
            <div className="flex flex-1 flex-col gap-2 border-l-2 border-primary pl-4">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-24" />
            </div>
        </div>
    )
}

export function TrajectoryListSkeleton() {
    return (
        <>
            <TrajectoryItemSkeleton />
            <TrajectoryItemSkeleton />
        </>
    )
}
