import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}

export default function Input({label , className, ...props }: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            {label && <label className="text-sm uppercase font-bold text-muted">{label}</label>}
            <input className={`${className} w-full rounded-md border border-border bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary`} {...props} />
        </div>

    )
}