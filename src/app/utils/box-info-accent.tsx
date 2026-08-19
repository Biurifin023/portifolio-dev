type  BoxInfoAccentProps = {
    children: React.ReactNode
}

export default function BoxInfoAccent({children} : BoxInfoAccentProps) {
    return (
        <div className="bg-primary-accent border border-primary w-fit rounded-lg px-3 py-1.5 text-xs text-primary font-bold">
            {children}
        </div>
    )
}