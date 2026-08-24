export function ProjectsGridSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className="min-h-48 rounded-md border border-border bg-card p-4"
                >
                    <div className="skeleton-pulse h-full min-h-40 w-full rounded-md" />
                </div>
            ))}
        </div>
    )
}
