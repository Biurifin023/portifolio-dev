import Hero from "./components/hero";
import About from "./components/about";
import FeaturedProjects from "./components/featured-projects";

export default function PageHome() {
  return(
    <div className="flex flex-col flex-1 gap-4">
      <Hero />
      <About />
      <FeaturedProjects />
    </div>
  )
}
