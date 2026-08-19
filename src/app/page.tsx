import Header from "@/app/components/header";
import About from "./components/about";

export default function PageHome() {
  return(
    <div className="flex flex-col min-h-screen bg-surface rounded-lg px-8 gap-4">
      <Header />
      <About />
    </div>
  )
}
