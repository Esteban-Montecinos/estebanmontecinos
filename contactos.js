import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandGmail,
} from "@tabler/icons-react";
export const contactos = [
  {
    nombre: "LinkedIn",
    icono: <IconBrandLinkedin className="w-20 h-20" aria-label="LinkedIn" />,
    url: "https://www.linkedin.com/in/esteban-montecinos/",
    user: "esteban-montecinos",
  },
  {
    nombre: "GitHub",
    icono: <IconBrandGithub className="w-20 h-20" aria-label="GitHub" />,
    url: "https://github.com/Esteban-Montecinos",
    user: "Esteban-Montecinos",
  },
  {
    nombre: "Correo electrónico",
    icono: (
      <IconBrandGmail className="w-20 h-20" aria-label="Correo electrónico" />
    ),
    url: "mailto:estebanmontecinos2001@gmail.com",
    user: "estebanmontecinos2001",
  },
];
