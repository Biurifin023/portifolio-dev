type BoxInfoBlueProps = {
    children: React.ReactNode
}

export default function BoxInfoBlue({children}: BoxInfoBlueProps) {
    return (
        <div className="bg-steel border border-steel-dim w-fit rounded-lg px-2 py-1 text-xs text-foreground font-bold">
            {children}
        </div>
    )
}