type BtnAccentProps = {
    children: React.ReactNode
    onClick?: () => void
    type?: "button" | "submit" | "reset"
}

export default function BtnAccent({
    children,
    onClick,
    type = "button",
}: BtnAccentProps) {
    return (
        <button
            type={type}
            className="px-5 py-2.5 bg-primary w-fit text-white text-sm font-semibold hover:bg-primary-hover transition-colors duration-200 cursor-pointer rounded-md"
            onClick={onClick}
        >
            {children}
        </button>
    )
}