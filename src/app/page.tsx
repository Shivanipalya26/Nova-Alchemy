import HeroNameSection from "@/components/Hero-name-section";
import HomeDesignSection from "@/components/Home-design-section";
import HomeDetailSection from "@/components/Home-detail-section";
import HomeHeroHeadings from "@/components/Home-hero-headings";
import HomeHeroSection from "@/components/Home-hero-section";
import PageLoadingAnimation from "@/styles/animation";

export default function Home() {
  return (
    <div className="">
      <PageLoadingAnimation>
      <HomeHeroSection />
      <HomeHeroHeadings />
      <HomeDesignSection />
      <HomeDetailSection />
      <HeroNameSection />
      </PageLoadingAnimation>
    </div>
  );
}