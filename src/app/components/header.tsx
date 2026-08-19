import BtnDefaultSm from "../utils/Buttons/Btn-default-sm";

export default function Header() {
    return(
        <>
        <div className="flex p-4 justify-between">
            <div className="font-bold uppercase text-lg">
                VitorLuiz <small className="text-primary">.dev</small>
            </div>

            <div className="flex space-x-2">
                <BtnDefaultSm>Home</BtnDefaultSm>
                <BtnDefaultSm>Sobre</BtnDefaultSm>
                <BtnDefaultSm>Projetos</BtnDefaultSm>
                <BtnDefaultSm>Blog</BtnDefaultSm>
                <BtnDefaultSm>Contato</BtnDefaultSm>
                
            </div>

        </div>
        <div className="border-b border-border w-full "></div>
        </>
    )
}