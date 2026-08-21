import Link from "next/link";

export default function NotFound() {
    return(
        <div className="flex flex-col justify-center items-center p-48 gap-4">
            <div className="text-5xl font-display text-primary">404</div>
            <h1 className="font-display text-lg">Página não encontrada</h1>
            <Link href="/" className="text-muted hover:text-primary">Voltar para o início</Link>
        </div>
    )
}