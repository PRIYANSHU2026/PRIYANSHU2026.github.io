import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Research } from "@/components/research";
import { Projects } from "@/components/projects";
import { Mirror } from "@/components/mirror";
import { Footer } from "@/components/footer";
import { Certificates } from "@/components/certificates";
import { Contact } from "@/components/contact"; // Added Contact import
import Particles from "@/components/particles";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <Particles />
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <About />
        <Research />
        <Projects />
        <Certificates />
        <Contact /> {/* Added Contact component to the layout */}
        <Mirror />
      </main>
      <Footer />
    </div>
  );
}
