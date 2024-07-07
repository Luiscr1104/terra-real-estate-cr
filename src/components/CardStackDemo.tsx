"use client";
import { CardStack } from "../components/ui/card-stack";
import { cn } from "../../utils/cn";
export function CardStackDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[20rem] mb-20 mr-24">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Jorge Sánchez Gómez",
    designation: "5 Estrellas",
    content: (
      <p>
        Agradecidos con
        <Highlight> José Manuel</Highlight>, por su destacada atención, ha sido
        tan satisfactoria que le damos una calificación de
        <Highlight> 5 estrellas </Highlight>. Para nosotros ha sido todo un
        gusto poderlo conocer.
      </p>
    ),
  },
  {
    id: 1,
    name: "Bryan Araya Navarro",
    designation: "5 Estrellas",
    content: (
      <p>
        Estamos muy contentos con la inversión
        <Highlight> los precios </Highlight>y las
        <Highlight> facilidades </Highlight>
         hacen que la compra sea más sencilla Gracias primero a Dios y después a
        José Manuel por llevarnos a este
        <Highlight> bello lugar</Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Carol Corrales Hurtado",
    designation: "5 Estrellas",
    content: (
      <p>
        Excelente lugar para<Highlight> comprar </Highlight>. El anfitrión de
        <Highlight> Terra</Highlight> es un pilar fundamental en este tipo de
        proyectos.
      </p>
    ),
  },
];
