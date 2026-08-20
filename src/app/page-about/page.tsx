export default function PageAbout() {
    return (
        <>
            <div className="flex flex-col gap-4 border-b border-border pb-10">
                <h2 className="uppercase font-bold text-primary">Sobre</h2>
                <h1 className="text-4xl font-display">Vitor Luiz</h1>
                <p className="text-muted">Desenvolvedor Full-Stack focado em Front-end, com 8 meses de experiência adquirida por meio de estudos e projetos práticos na plataforma Rocketseat. Atualmente curso Análise e Desenvolvimento de Sistemas (ADS), reforçando a base teórica e prática no desenvolvimento de software. Busco a primeira oportunidade na área, com dedicação ao aprendizado contínuo e à evolução diária. Além da formação técnica, desenvolvi habilidades interpessoais e de comunicação em experiências profissionais anteriores, que exigiam colaboração, responsabilidade e entrega de resultados no prazo, fortalecendo minhas soft skills.</p>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-display">Trajetória</h1>

                    <div className="flex gap-4 border-b border-border p-4">
                        <div>
                            <small className="text-muted  ">Jul/2026</small>
                        </div>
                        <div className="border-l-2 border-primary">
                            <h3 className="ml-4">ADS - Análise e Desenvolvimento de Sistemas</h3>
                            <small className="ml-4 text-muted">UNINTER</small>
                        </div>
                    </div>

                    <div className="flex gap-4 border-b border-border p-4">
                        <div>
                            <small className="text-muted  ">Jan/2026</small>
                        </div>
                        <div className="border-l-2 border-primary">
                            <h3 className="ml-4">Formação FullStack</h3>
                            <small className="ml-4 text-muted">RocketSeat</small>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-display">Objetivos</h1>

                    <div className="border border-border border-l-4 border-l-steel rounded-md p-4 bg-card">
                        <h3 className="text-md font-bold">Aprender fazendo</h3>
                        <p className="text-muted">Teoria entra melhor quando vira projeto no GitHub.</p>
                    </div>

                    <div className="border border-border border-l-4 border-l-steel rounded-md p-4 bg-card">
                        <h3 className="text-md font-bold">Aprender fazendo</h3>
                        <p className="text-muted">Teoria entra melhor quando vira projeto no GitHub.</p>
                    </div>

                    <div className="border border-border border-l-4 border-l-steel rounded-md p-4 bg-card">
                        <h3 className="text-md font-bold">Aprender fazendo</h3>
                        <p className="text-muted">Teoria entra melhor quando vira projeto no GitHub.</p>
                    </div>

                    <div className="border border-border border-l-4 border-l-steel rounded-md p-4 bg-card">
                        <h3 className="text-md font-bold">Aprender fazendo</h3>
                        <p className="text-muted">Teoria entra melhor quando vira projeto no GitHub.</p>
                    </div>
                </div>
            </div>
        </>
    )
}