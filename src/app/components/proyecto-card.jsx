"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  Link,
} from "@nextui-org/react";

export default function ProyectoCard({
  titulo,
  descripcion,
  git_url,
  web_url,
  etiquetas,
}) {
  return (
    <Card className="flex flex-col w-full p-4 bg-black border border-neutral-500 bg-gradient-to-tl from-neutral-950 via-neutral-600/20 to-neutral-950">
      <CardHeader className="">
        <h4 className="text-2xl font-bold text-white">{titulo}</h4>
      </CardHeader>
      <CardBody className="justify-between h-full px-3 py-0 text-small text-neutral-400">
        <p>{descripcion}</p>
        <div className="flex flex-row flex-wrap max-w-xl gap-1">
          {etiquetas.map(({ nombre }) => (
            <Chip key={nombre} size="sm" color="warning" variant="solid">
              {nombre}
            </Chip>
          ))}
        </div>
      </CardBody>
      <CardFooter className="justify-between">
        <Button
          className="text-tiny"
          color="default"
          radius="full"
          size="sm"
          href={web_url}
          isExternal
          as={Link}
        >
          Demo
        </Button>
        <Button
          className="text-tiny"
          color="default"
          radius="full"
          size="sm"
          href={git_url}
          isExternal
          as={Link}
        >
          Repositorio
        </Button>
      </CardFooter>
    </Card>
  );
}
