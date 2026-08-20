import { FaArrowRight } from "react-icons/fa";
import BoxInfoAccent from "../utils/box-info-accent";
import BoxInfoBlue from "../utils/box-info-blue";
import Link from "next/link";

export default function FeaturedProjects() {
    return (
    <> 
            <div className="flex justify-between items-center py-2 mt-4">
                <h2 className="text-2xl font-extrabold">Projetos em destaque</h2>
                <div className="flex items-center gap-2">
                    <Link
                        href="/projects"
                        className="text-primary font-bold"
                    >
                        Ver todos
                    </Link> <FaArrowRight className="text-primary cursor-pointer" />
                </div>
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
        </div>
    </>
    )
}