import BtnAccent from "../utils/Buttons/Btn-accent"
import BtnDefault from "../utils/Buttons/Btn-default"

export default function Hero() {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="uppercase text-primary font-bold">Desenvolvedor Full Stack</h2>
            <h1 className="text-5xl font-extrabold text-display">Construindo sistemas <br />
                que sobrevivem ao crescimento.</h1>
            <p className="text-md text-muted">Estudante de Desenvolvimento de Sistemas, <br /> focado em criar software organizado, escalável e fácil de manter.</p>

            <div className="flex gap-4 py-4">
                <BtnAccent>Projetos</BtnAccent>
                <BtnDefault>Entrar em Contato</BtnDefault>
            </div>
        </div>
    )
}