type BtnDefaultProps = {
    children: React.ReactNode,
    onClick?: () => void
}

export default function BtnDefault({children, onClick}: BtnDefaultProps) {
    return (
        <button className="px-5 py-2.5 bg-transparent w-fit text-foreground text-sm border border-border-mid hover:border-muted transition-colors duration-200 cursor-pointer rounded-md">
            {children}
        </button>
    )
}