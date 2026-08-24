"use client"

import Input from "../utils/input"
import BtnAccent from "../utils/Buttons/Btn-accent"
import Textarea from "../utils/text-area"
import Link from "next/link"
import { FaGithub, FaWhatsapp, FaLinkedinIn, FaEnvelope } from "react-icons/fa"
import { formSchema, FormSchema } from "../schemas/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export default function PageContact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(data: FormSchema) {
        const phone = "5524998535387"
        const text = [
            `*Contato pelo portfólio*`,
            ``,
            `*Nome:* ${data.name}`,
            `*Email:* ${data.email}`,
            ``,
            `*Mensagem:*`,
            data.message,
        ].join("\n")

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
        window.open(url, "_blank", "noopener,noreferrer")
        reset()
    }

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

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4 py-4"
                    >
                        <div className="flex flex-col gap-1">
                            <Input
                                label="Nome"
                                placeholder="Digite seu nome"
                                {...register("name")}
                            />
                            {errors.name && (
                                <p className="text-sm text-red-500">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <Input
                                label="Email"
                                placeholder="Digite seu email"
                                type="email"
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <Textarea
                                label="Mensagem"
                                placeholder="Digite sua mensagem"
                                {...register("message")}
                            />
                            {errors.message && (
                                <p className="text-sm text-red-500">{errors.message.message}</p>
                            )}
                        </div>

                        <BtnAccent type="submit">Enviar mensagem</BtnAccent>
                    </form>
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
