import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyTENNIS } from "@/components/WhyTENNIS";
import { Ecosystem } from "@/components/Ecosystem";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <WhyTENNIS />
      <Ecosystem />
      <Footer />
    </main>
  );
};

export default Index;
