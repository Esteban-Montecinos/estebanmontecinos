import React from 'react'
import Link from "next/link";
import ProyectoCard from './proyecto-card';
export default function ProyectosList({proyectos}) {
  return (
    <section className='flex flex-col gap-2'>
        <h2 className="text-3xl font-bold">Proyectos</h2>
        <p className="text-sm text-neutral-400">
          Aquí hay algunos de mis proyectos, puedes verlos todos en mi <Link href="https://github.com/Esteban-Montecinos" className="underline" target="_blank">GitHub.</Link>
        </p>
        <div className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-3'>
        {proyectos.map(({id, titulo, descripcion, git_url, web_url, etiquetas}) => (
            <ProyectoCard key={id} titulo={titulo} descripcion={descripcion} git_url={git_url} web_url={web_url} etiquetas={etiquetas}/>
          ))}
        </div>
      </section>
  )
}
