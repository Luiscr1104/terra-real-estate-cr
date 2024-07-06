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
    <div className="flex flex-col items-center justify-center h-[30rem]  ">
      <p className="text-neutral-600  text-sm sm:text-2xl  ">
        Ubicada en la zona más productiva del país (La Fortuna de San Carlos)
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="mt-16 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-verdePrimario border border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
