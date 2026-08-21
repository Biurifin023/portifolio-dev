import { forwardRef, TextareaHTMLAttributes } from "react"

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, className, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-2">
                {label && (
                    <label className="text-sm uppercase font-bold text-muted">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    className={`${className ?? ""} w-full rounded-md border border-border bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary resize-y min-h-32`}
                    {...props}
                />
            </div>
        )
    }
)

Textarea.displayName = "Textarea"

export default Textarea
