import Input from "../utils/input"
import BtnAccent from "../utils/Buttons/Btn-accent"
import Textarea from "../utils/text-area"
import Link from "next/link"
import { FaGithub, FaWhatsapp, FaLinkedinIn, FaEnvelope } from "react-icons/fa"

export default function PageContact() {
    return (
        <>
            <div className="flex gap-8">
                <div className="flex-1">
                    <div className="flex flex-col gap-4">
                        <h3 className="uppercase font-bold text-primary">Contato</h3>
                        <h1 className="font-display text-4xl">Vamos Conversar</h1>
                        <p className="text-muted">
                            Aberto a oportunidades de trabalho, contribuições ou apenas papos.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 py-4">
                        <Input
                            label="Nome"
                            placeholder="Digite seu nome"
                        />
                        <Input
                            label="Email"
                            placeholder="Digite seu email"
                        />
                        <Textarea
                            label="Mensagem"
                            placeholder="Digite sua mensagem"
                        />
                        <BtnAccent>Enviar mensagem</BtnAccent>
                    </div>
                </div>

                <div className="flex-1">
                    <h2 className="uppercase font-bold text-primary">Redes Sociais</h2>
                    <div className="flex gap-4 py-4">
                        <Link
                            className="text-3xl transition-all duration-200 hover:text-primary"
                            href="https://wa.me/5524998535387"
                        >
                            <FaWhatsapp />
                        </Link>
                        <Link
                            className="text-3xl transition-all duration-200 hover:text-primary"
                            href="https://wa.me/5524998535387"
                        >
                            <FaLinkedinIn />
                        </Link>
                        <Link
                            className="text-3xl transition-all duration-200 hover:text-primary"
                            href="https://wa.me/5524998535387"
                        >
                            <FaEnvelope />
                        </Link>
                        <Link
                            className="text-3xl transition-all duration-200 hover:text-primary"
                            href="https://wa.me/5524998535387"
                        >
                            <FaGithub />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
