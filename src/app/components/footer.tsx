import Link from "next/link"

export default function Footer() {
    return (
        <div className="flex flex-col gap-4 border-t border-border pb-10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-lg font-bold uppercase">
                VitorLuiz <small className="text-primary">.dev</small>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary"
                    href="https://github.com/Biurifin023"
                >
                    GitHub
                </Link>
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary"
                    href="https://www.linkedin.com/in/vitor-luiz-7b410b3b7"
                >
                    LinkedIn
                </Link>
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary"
                    href="https://wa.me/5524998535387"
                >
                    Whatsapp
                </Link>
                <Link
                    className="text-muted hover:text-primary"
                    href="mailto:vitor7813@gmail.com"
                >
                    Email
                </Link>
            </div>
        </div>
    )
}
