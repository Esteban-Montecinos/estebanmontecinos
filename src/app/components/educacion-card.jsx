"use client";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function EducacionCard({ fecha, nombre, titulo, image_url }) {
  return (
    <Card className="flex flex-col flex-1 w-full h-full p-4 bg-black border border-neutral-500 bg-gradient-to-tl from-neutral-950 via-neutral-600/20 to-neutral-950">
      <CardBody className="flex flex-col items-center justify-center md:justify-between md:flex-row">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Image
            src={image_url}
            className="w-20 h-20"
            alt={`Logo de ${nombre}`}
          />
          <div className="flex flex-col">
            <p className="text-lg font-bold leading-relaxed tracking-wide text-white">
              {titulo}
            </p>
            <p className="text-sm leading-relaxed tracking-wide text-neutral-400">
              {nombre}
            </p>
          </div>
        </div>
        {fecha}
      </CardBody>
    </Card>
  );
}
