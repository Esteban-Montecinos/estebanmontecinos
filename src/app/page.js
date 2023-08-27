import Div from "./components/divider";
import Nav from "./components/nav-bar";
import ProyectosList from "./components/proyectos-list";
import { proyectos } from "../../proyectos";
import { contactos } from "../../contactos";
import { tecnologias } from "../../tecnologias";
import { educacion } from "../../educacion";
import Tecnologias from "./components/tecnologias";
import Header from "./components/Header";
import Contacto from "./components/contacto";
import Educacion from "./components/educacion";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-tl from-black via-neutral-600/20 to-black">
      <Nav />
      <section className="flex flex-col items-start gap-8 px-10 mx-auto my-24 max-w-7xl">
        <Header/>
        <Div />
        <ProyectosList proyectos={proyectos} />
        <Div />
        <Tecnologias tecnologias={tecnologias} />
        <Div />
        <Educacion educacion={educacion} />
        <Div />
        <Contacto contactos={contactos}/>
      </section>
    </main>
  );
}
