type BoxInfoBlueProps = {
    children: React.ReactNode
}

export default function BoxInfoBlue({ children }: BoxInfoBlueProps) {
    return (
        <div className="max-w-full truncate rounded-md border border-steel-dim bg-steel px-2 py-0.5 text-[11px] font-semibold leading-5 text-foreground">
            {children}
        </div>
    )
}
