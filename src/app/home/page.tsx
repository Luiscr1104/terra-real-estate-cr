import HeroSection from "@/components/HeroSection";
import { CardStackDemo } from "@/components/CardStackDemo";
import { TypewriterEffectSmoothDemo } from '../../components/TypewriterEffecttSmoothDemo';
import { BackgroundGradientDemo } from '../../components/BackgroundGradientDemo';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TypewriterEffectSmoothDemo />
      <CardStackDemo />
      <BackgroundGradientDemo />
    </>
  );
}
