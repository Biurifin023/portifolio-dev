import BtnDefaultSm from "../utils/Buttons/Btn-default-sm";
import Link from "next/link";

export default function Header() {
    return(
        <>
        <div className="flex py-4 justify-between">
            <div className="font-bold uppercase text-lg">
                VitorLuiz <small className="text-primary">.dev</small>
            </div>

            <div className="flex space-x-2">
                <Link href="/">
                <BtnDefaultSm> Home</BtnDefaultSm></Link>
                <Link href="/page-about">
                <BtnDefaultSm> Sobre</BtnDefaultSm></Link>
                <Link href="/projects">
                <BtnDefaultSm> Projetos</BtnDefaultSm></Link>
                <Link href="/blog">
                <BtnDefaultSm> Blog</BtnDefaultSm></Link>
                <Link href="/contact">
                <BtnDefaultSm> Contato</BtnDefaultSm></Link>
                
            </div>

        </div>
        <div className="border-b border-border w-full "></div>
        </>
    )
}