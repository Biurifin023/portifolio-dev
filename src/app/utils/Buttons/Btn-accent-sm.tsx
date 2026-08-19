type BtnAccentSmProps = {
    children: React.ReactNode,
    onClick?: () => void
}

export default function BtnAccentSm({children,onClick}:BtnAccentSmProps) {
    return (
        <button className="px-3 py-1.5 bg-primary w-fit text-white text-xs font-semibold hover:bg-primary-hover transition-colors duration-200 cursor-pointer rounded-md">
            {children}
        </button>
    )
}