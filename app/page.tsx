import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServiceBlocks } from "@/components/sections/ServiceBlocks";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { RequestQuoteCTA } from "@/components/sections/RequestQuoteCTA";
import { StatsBand } from "@/components/sections/StatsBand";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ServiceBlocks />
        <CompanyIntro />
        <StatsBand />
        <FeaturedProjects />
        <IndustriesServed />
        <ServiceArea />
        <RequestQuoteCTA />
      </main>
      <Footer />
    </>
  );
}
