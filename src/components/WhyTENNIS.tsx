import { Shield, Code2, Network } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Encryption First",
    description: "All name data is end-to-end encrypted by default on TEN's secure infrastructure."
  },
  {
    icon: Code2,
    title: "Programmable Identity",
    description: "Names can interact with dApps, contracts, or agents natively."
  },
  {
    icon: Network,
    title: "TEN-Native",
    description: "Runs on TEN's encrypted L2 infrastructure for speed and confidentiality."
  }
];

export const WhyTENNIS = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-foreground">
          Why TENNIS?
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          More than just a name — it's your identity infrastructure on TEN.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group animate-fade-in"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-10 h-10 text-primary" strokeWidth={2} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
