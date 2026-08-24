import BtnDefaultSm from "../utils/Buttons/Btn-default-sm"
import Link from "next/link"

export default function Header() {
    return (
        <>
            <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/" className="text-lg font-bold uppercase">
                    VitorLuiz <small className="text-primary">.dev</small>
                </Link>

                <nav className="flex flex-wrap gap-2">
                    <Link href="/">
                        <BtnDefaultSm>Home</BtnDefaultSm>
                    </Link>
                    <Link href="/page-about">
                        <BtnDefaultSm>Sobre</BtnDefaultSm>
                    </Link>
                    <Link href="/page-projects">
                        <BtnDefaultSm>Projetos</BtnDefaultSm>
                    </Link>
                    <Link href="/page-contact">
                        <BtnDefaultSm>Contato</BtnDefaultSm>
                    </Link>
                </nav>
            </div>
            <div className="w-full border-b border-border" />
        </>
    )
}
