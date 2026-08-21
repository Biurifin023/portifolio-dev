import { forwardRef, InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, className, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-2">
                {label && (
                    <label className="text-sm uppercase font-bold text-muted">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`${className ?? ""} w-full rounded-md border border-border bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary`}
                    {...props}
                />
            </div>
        )
    }
)

Input.displayName = "Input"

export default Input
