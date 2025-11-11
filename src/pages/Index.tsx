import { Hero } from "@/components/Hero";
import { WhatIsTENNIS } from "@/components/WhatIsTENNIS";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyTENNIS } from "@/components/WhyTENNIS";
import { Roadmap } from "@/components/Roadmap";
import { Ecosystem } from "@/components/Ecosystem";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatIsTENNIS />
      <HowItWorks />
      <WhyTENNIS />
      <Roadmap />
      <Ecosystem />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
