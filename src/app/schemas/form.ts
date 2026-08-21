import { z } from "zod"

export const formSchema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    email: z.string().email({ message: "Email inválido" }),
    message: z.string().min(1, { message: "Mensagem é obrigatória" }),
})

export type FormSchema = z.infer<typeof formSchema>