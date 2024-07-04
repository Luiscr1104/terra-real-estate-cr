// components/HeroSection.js
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-800 mt-20 sm:mt-[4rem] md:mt-20 lg:mt-32 xl:mt-34">
      <div className="absolute inset-0">
        <Image
          src="/Slider1.png" // Reemplaza con la ruta de tu imagen
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-screen"></div>
    </div>
  );
};

export default HeroSection;
