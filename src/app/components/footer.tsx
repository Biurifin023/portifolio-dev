import Link from "next/link"

export default function Footer() {
    return(
        <div className="flex justify-between pb-10 pt-4 border-t border-border">
            <div className="font-bold uppercase text-lg">
                VitorLuiz <small className="text-primary">.dev</small>
            </div>

            <div className="flex gap-2">
                <Link
                target="_blank"
                className="text-muted hover:text-primary"  
                href="https://github.com/Biurifin023">GitHub</Link> 
                <Link
                target="_blank"
                className="text-muted hover:text-primary"
                href="https://www.linkedin.com/in/vitor-luiz-de-barros-da-silva-965500296">LinkedIn</Link>
                <Link
                target="_blank"
                className="text-muted hover:text-primary"
                href="https://wa.me/5524998535387">Whatsapp</Link>
                <Link
                target="_blank"
                className="text-muted hover:text-primary"
                href="https://mailto:vitor7813@gmail.com">Email</Link>
            </div>
        </div>
    )
}