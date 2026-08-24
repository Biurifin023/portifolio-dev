"use client"

import Input from "../utils/input"
import BtnAccent from "../utils/Buttons/Btn-accent"
import Textarea from "../utils/text-area"
import { formSchema, FormSchema } from "../schemas/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export default function ContactForm() {
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
    )
}
