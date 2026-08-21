import Link from "next/link"
import BtnAccent from "@/app/utils/Buttons/Btn-accent"
import Image from "next/image"
import imgDb from "@/assets/img-debarros-site.png"

export default function ProjectContent() {
    return (
        <><div className="flex border-b border-border py-4">
            <div className="flex flex-col gap-4 w-1/2 py-8">
                <div className="flex gap-2">
                    <Link
                        className="hover:text-primary"
                        href="/page-projects">Projetos</Link>
                    <p>/</p>
                    <p className="text-primary font-bold">DeBarros Tattoo site</p>
                </div>

                <h1 className="text-display text-4xl">DeBarros Tattoo site</h1>
                <p className="text-muted">Site institucional para estúdio de tatuagem</p>
                <Link 
                target="blank"
                href="https://github.com/Biurifin023"><BtnAccent>Ver no GitHub</BtnAccent></Link>
            </div>

            <div className="w-1/2">
                <div className="p-4 bg-card border border-border rounded-lg">
                    <Image
                        src={imgDb}
                        alt="Imagem do site DeBarros Tattoo"
                        className="rounded-lg" />
                </div>
            </div>
        </div>

            <div className="flex flex-col gap-3 py-4">
                <h2 className="font-display text-lg">Sobre o projeto</h2>
                <p className="text-muted">Site desenvolvido para tatuador, com funcionalidades que levam a um formulário para orçamentos, portifolio e contato.</p>
            </div>

            <div className="flex flex-col gap-3">
                <h2 className="font-display text-lg">Funcionalidades</h2>
                <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-3 text-muted">
                        <span className="mt-2 size-2 rounded-full bg-primary shrink-0"></span>
                        Formulário com validação pelo Zod + React Hook Form
                    </li>
                    <li className="flex items-start gap-3 text-muted">
                        <span className="mt-2 size-2 rounded-full bg-primary shrink-0"></span>
                        Integração CMS com Prismic para atualização de dados e imagens
                    </li>
                    <li className="flex items-start gap-3 text-muted">
                        <span className="mt-2 size-2 rounded-full bg-primary shrink-0"></span>
                        Apresentação de portfólio com carrossel animado
                    </li>
                    <li className="flex items-start gap-3 text-muted">
                        <span className="mt-2 size-2 rounded-full bg-primary shrink-0"></span>
                        Contatos por redes socias
                    </li>
                </ul>
            </div>
        </>
    )
}