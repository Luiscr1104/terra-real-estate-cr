import HeroSection from "@/components/HeroSection";
import { CardStackDemo } from "@/components/CardStackDemo";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffecttSmoothDemo";
import { BackgroundGradientDemo } from "@/components/BackgroundGradientDemo";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="sm:hidden flex flex-col items-center justify-center h-[15rem] mt-10 mb-10">
        <p className="text-neutral-600 text-sm sm:text-2xl p-6 text-center mt-8">
          Ubicada en la zona más productiva del país (La Fortuna de San Carlos)
        </p>
        <h1 className="text-4xl sm:text-xl md:text-3xl lg:text-5xl font-bold text-center text-black">
          Bienes raíces y Constructora{" "}
          <span className="text-verdePrimario">TerraRealEstateCR</span>
        </h1>
      </div>
      <div className="hidden sm:block">
        <TypewriterEffectSmoothDemo />
      </div>
      <CardStackDemo />
      <BackgroundGradientDemo />
    </>
  );
}
