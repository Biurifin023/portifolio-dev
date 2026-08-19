type BoxInfoAccent = {
    children: React.ReactNode
}

export default function BoxInfoAccent({children}: BoxInfoAccent) {
    return (
        <div className="bg-steel border border-steel-dim w-fit rounded-lg px-3 py-1.5 text-xs text-foreground font-bold">
            {children}
        </div>
    )
}