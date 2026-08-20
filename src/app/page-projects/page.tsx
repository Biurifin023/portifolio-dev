import BtnDefaultSm from "../utils/Buttons/Btn-default-sm"
import BoxInfoBlue from "../utils/box-info-blue"
import BoxInfoAccent from "../utils/box-info-accent"

export default function PageProjects() {
    return (
        <>
            <div className="flex flex-col gap-4 py-4">
                <h3 className="text-primary uppercase font-bold">Projetos</h3>
                <h1 className="text-display text-4xl">Projetos selecionados</h1>
            </div>

            <div className="py-6">
                <div className="flex gap-2 mb-6">
                    <BtnDefaultSm>Todos</BtnDefaultSm>
                    <BtnDefaultSm>Frontend</BtnDefaultSm>
                    <BtnDefaultSm>Backend</BtnDefaultSm>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2 p-4 bg-card border border-border rounded-md">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-bold">DeBarros Tattoo site</h3>
                            <BoxInfoAccent>Frontend</BoxInfoAccent>
                        </div>


                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!</p>

                        <div className="flex gap-2">
                            <BoxInfoBlue>Next.js</BoxInfoBlue>
                            <BoxInfoBlue>Prismic</BoxInfoBlue>
                            <BoxInfoBlue>CMS</BoxInfoBlue>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 p-4 bg-card border border-border rounded-md">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-bold">DeBarros Tattoo site</h3>
                            <BoxInfoAccent>Frontend</BoxInfoAccent>
                        </div>


                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!</p>

                        <div className="flex gap-2">
                            <BoxInfoBlue>Next.js</BoxInfoBlue>
                            <BoxInfoBlue>Prismic</BoxInfoBlue>
                            <BoxInfoBlue>CMS</BoxInfoBlue>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 p-4 bg-card border border-border rounded-md">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-bold">DeBarros Tattoo site</h3>
                            <BoxInfoAccent>Frontend</BoxInfoAccent>
                        </div>


                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!</p>

                        <div className="flex gap-2">
                            <BoxInfoBlue>Next.js</BoxInfoBlue>
                            <BoxInfoBlue>Prismic</BoxInfoBlue>
                            <BoxInfoBlue>CMS</BoxInfoBlue>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 p-4 bg-card border border-border rounded-md">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-bold">DeBarros Tattoo site</h3>
                            <BoxInfoAccent>Frontend</BoxInfoAccent>
                        </div>


                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!</p>

                        <div className="flex gap-2">
                            <BoxInfoBlue>Next.js</BoxInfoBlue>
                            <BoxInfoBlue>Prismic</BoxInfoBlue>
                            <BoxInfoBlue>CMS</BoxInfoBlue>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 p-4 bg-card border border-border rounded-md">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-bold">DeBarros Tattoo site</h3>
                            <BoxInfoAccent>Frontend</BoxInfoAccent>
                        </div>


                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!</p>

                        <div className="flex gap-2">
                            <BoxInfoBlue>Next.js</BoxInfoBlue>
                            <BoxInfoBlue>Prismic</BoxInfoBlue>
                            <BoxInfoBlue>CMS</BoxInfoBlue>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 p-4 bg-card border border-border rounded-md">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-bold">DeBarros Tattoo site</h3>
                            <BoxInfoAccent>Frontend</BoxInfoAccent>
                        </div>


                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi explicabo consectetur quas veniam placeat vitae delectus magni voluptates minima suscipit similique atque, voluptatibus dolor animi porro neque unde cupiditate!</p>

                        <div className="flex gap-2">
                            <BoxInfoBlue>Next.js</BoxInfoBlue>
                            <BoxInfoBlue>Prismic</BoxInfoBlue>
                            <BoxInfoBlue>CMS</BoxInfoBlue>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}