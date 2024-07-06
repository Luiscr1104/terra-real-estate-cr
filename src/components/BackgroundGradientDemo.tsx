"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import Image from "next/image";

const cards = [
  {
    image: `/loteChachagua.jpg`,
    title: "Propiedad Quintas Paraíso – Chachagua.",
    description:
      "Lote amplio, ubicado a 1,5 km de Chachagua, rodeado de bosque primario, ideal para proyecto turístico, piscina, casa vacacional o de retiro. Excelente clima y vista panorámica, con río cristalino y exuberante vegetación.",
    price: "$100",
    badge: "Medida: 1 144 m²",
  },
  {
    image: `/ronronSucre.png`,
    title: "Propiedad RonRon de Sucre – Ciudad Quesada.",
    description:
      "Terreno amplio, ubicado a 5 km de Ciudad Quesada, ideal para casa de habitación, con un excelente clima y vista panorámica. Ideal para proyecto turístico, casa vacacional o de retiro",
    price: "$150",
    badge: "Medida: 2 181 m²",
  },
  {
    image: `/lote38-chachagua.png`,
    title: "Lote #38 Quintas del Valle - Chachagua",
    description:
      "Lote 100% plano, ubicado a 3 km de Chachagua, dentro de un hermoso proyecto con río cristalino y exuberante vegetación, ideal para proyecto turístico, casa vacacional o de retiro.",
    price: "$200",
    badge: "Medida: 1 485 m²",
  },
  {
    image: `/lote38-chachagua.png`,
    title: "Lote #38 Quintas del Valle - Chachagua",
    description:
      "Lote 100% plano, ubicado a 3 km de Chachagua, dentro de un hermoso proyecto con río cristalino y exuberante vegetación, ideal para proyecto turístico, casa vacacional o de retiro.",
    price: "$200",
    badge: "Medida: 1 485 m²",
  },
];

export function BackgroundGradientDemo() {
  return (
    <>
      <div>
        <h2 className="text-5xl text-verdePrimario font-bold text-center mb-12">
          ¡Propiedades <span className="text-black">Destacadas!</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        {cards.map((card, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white "
          >
            <span className="absolute top-4 left-4 bg-amarilloPrimario text-black text-sm font-semibold px-2 py-1 rounded-full">
              {card.badge}
            </span>
            <Image
              src={card.image}
              alt={card.title}
              height="400"
              width="400"
              className="object-contain mt-3 rounded-lg"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2">
              {card.title}
            </p>

            <p className="text-sm text-neutral-600">
              {card.description}
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold">
              <span>Precio:</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                {card.price}
              </span>
            </button>
          </BackgroundGradient>
        ))}
      </div>
    </>
  );
}
