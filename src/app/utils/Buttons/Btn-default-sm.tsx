type BtnDefaultProps = {
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

export default function BtnDefault({
    children,
    onClick,
    className = "",
}: BtnDefaultProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`px-3 py-1.5 bg-transparent w-fit text-foreground text-xs border border-border-mid hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer rounded-md ${className}`}
        >
            {children}
        </button>
    )
}
