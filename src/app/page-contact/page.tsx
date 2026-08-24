import type { Metadata } from "next"
import Link from "next/link"
import { FaGithub, FaWhatsapp, FaLinkedinIn, FaEnvelope } from "react-icons/fa"
import ContactForm from "./contact-form"

export const metadata: Metadata = {
    title: "Contato",
    description: "Entrar em contato com o desenvolvedor Full Stack Vitor Luiz",
}

export default function PageContact() {
    return (
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
            <div className="flex-1">
                <div className="flex flex-col gap-4">
                    <h3 className="uppercase font-bold text-primary">Contato</h3>
                    <h1 className="font-display text-3xl sm:text-4xl">
                        Vamos Conversar
                    </h1>
                    <p className="text-muted">
                        Aberto a oportunidades de trabalho, contribuições ou apenas
                        papos.
                    </p>
                </div>

                <ContactForm />
            </div>

            <div className="flex-1">
                <h2 className="uppercase font-bold text-primary">Redes Sociais</h2>
                <div className="flex gap-4 py-4">
                    <Link
                        className="text-3xl transition-all duration-200 hover:text-primary"
                        href="https://wa.me/5524998535387"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                    </Link>
                    <Link
                        className="text-3xl transition-all duration-200 hover:text-primary"
                        href="https://www.linkedin.com/in/vitor-luiz-7b410b3b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </Link>
                    <Link
                        className="text-3xl transition-all duration-200 hover:text-primary"
                        href="mailto:vitor7813@gmail.com"
                    >
                        <FaEnvelope />
                    </Link>
                    <Link
                        className="text-3xl transition-all duration-200 hover:text-primary"
                        href="https://github.com/Biurifin023"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </div>
    )
}
