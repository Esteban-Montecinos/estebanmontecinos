
import TecnologiaCard from './tecnologia-card'

export default function Tecnologias({tecnologias}) {
    
  return (
    <section className='flex flex-col gap-2'>
        <h2 className="text-3xl font-bold">Tecnologias</h2>
        <article className='flex flex-row flex-wrap'>
        {tecnologias.map(({nombre, icon}) => (
            <TecnologiaCard nombre={nombre} icon={icon} key={nombre}/>
        ))}
        </article>
    </section>
  )
}
