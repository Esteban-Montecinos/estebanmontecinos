'use client'
import {Card, CardBody, CardHeader, Link} from "@nextui-org/react";
export default function Contacto({contactos}) {
  return (
    <section className='flex flex-col w-full gap-2'>
        <h2 className="text-3xl font-bold">Contacto</h2>
        <section className='grid w-full grid-cols-1 gap-4 mt-8 md:grid-cols-3'>
            {contactos.map(({nombre, url, user,icono}) => (
                <Link key={nombre} href={url} target="_blank" rel="noreferrer">
                <Card className="flex flex-col w-full h-full p-4 bg-black border border-neutral-500 bg-gradient-to-tl from-neutral-950 via-neutral-600/20 to-neutral-950">
                    <CardHeader className="justify-center">
                        <div className="p-2 border rounded-full bg-neutral-800 border-neutral-500">
                        {icono}
                        </div>
                    </CardHeader>
                    <CardBody className="text-center">
                        <p className="text-lg font-bold leading-relaxed tracking-wide text-white">{user}</p>
                        <p className="text-sm leading-relaxed tracking-wide text-neutral-400">{nombre}</p>
                    </CardBody>
                </Card>
                </Link>))}
        </section>
    </section>
  )
}
