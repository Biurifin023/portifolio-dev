import BtnAccent from "../utils/Buttons/Btn-accent"
import BtnDefault from "../utils/Buttons/Btn-default"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-sm font-bold uppercase text-primary sm:text-base">
                Desenvolvedor Full Stack
            </h2>
            <h1 className="text-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
                Construindo sistemas{" "}
                <br className="hidden sm:block" />
                que sobrevivem ao crescimento.
            </h1>
            <p className="text-sm text-muted sm:text-base">
                Estudante de Desenvolvimento de Sistemas,{" "}
                <br className="hidden sm:block" />
                focado em criar software organizado, escalável e fácil de manter.
            </p>

            <div className="flex flex-wrap gap-3 py-4 sm:gap-4">
                <Link href="/page-projects">
                    <BtnAccent>Projetos</BtnAccent>
                </Link>
                <Link href="/page-contact">
                    <BtnDefault>Entrar em Contato</BtnDefault>
                </Link>
            </div>
        </div>
    )
}
