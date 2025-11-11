import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Search for your perfect name and claim it on TEN in seconds."
  },
  {
    number: "02",
    title: "Resolve",
    description: "Connect your name to your wallet, profiles, and on-chain assets."
  },
  {
    number: "03",
    title: "Use",
    description: "Share your identity across the TEN ecosystem with privacy and style."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={step.number}
              className="p-8 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-2 rounded-3xl"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="text-6xl font-bold text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {step.description}
              </p>
              
              {/* Decorative edge lighting */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-tennis opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
