"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Bienes",
    },
    {
      text: "raíces",
    },
    {
      text: "y",
    },
    {
      text: "Constructora",
    },
    {
      text: "TerraRealEstateCR.",
      className: "text-verdePrimario",
    },
  ];
  return (
   <div className="flex flex-col items-center justify-center h-[15rem] mt-10 -mb-2">
      <p className="text-neutral-600 text-sm sm:text-2xl p-4 text-center">
        Ubicada en la zona más productiva del país (La Fortuna de San Carlos)
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
