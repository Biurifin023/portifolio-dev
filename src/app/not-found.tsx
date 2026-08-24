import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 px-4 py-24 sm:py-32 md:py-48">
            <div className="text-display text-4xl text-primary sm:text-5xl">404</div>
            <h1 className="text-display text-lg">Página não encontrada</h1>
            <Link href="/" className="text-muted hover:text-primary">
                Voltar para o início
            </Link>
        </div>
    )
}
