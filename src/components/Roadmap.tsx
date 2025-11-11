import { CheckCircle2, Circle, Sparkles, Shield } from "lucide-react";

const phases = [
  {
    status: "current",
    icon: CheckCircle2,
    title: "Vanilla Naming Service",
    subtitle: "Now",
    description: "Basic name registration and resolution on TEN.",
    color: "text-primary"
  },
  {
    status: "next",
    icon: Circle,
    title: "Cross-Chain Identity",
    subtitle: "Next",
    description: "Allow names to link to addresses across Ethereum, Polygon, and Solana.",
    color: "text-primary/70"
  },
  {
    status: "later",
    icon: Shield,
    title: "Multi-Wallet Stealth Names",
    subtitle: "Later",
    description: "Stealth-addressing layer that enables one name to manage multiple encrypted wallets privately.",
    color: "text-primary/50"
  },
  {
    status: "future",
    icon: Sparkles,
    title: "Agent-Linked Identities",
    subtitle: "Future",
    description: "Integrate with AI and autonomous agents for identity-aware on-chain actions.",
    color: "text-primary/40"
  }
];

export const Roadmap = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-accent/20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-foreground">
          Product Roadmap
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Evolving from simple names to a complete encrypted identity infrastructure.
        </p>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary/20" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div 
                key={phase.title}
                className="relative group animate-fade-in"
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Phase card */}
                <div className="relative bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/40 rounded-3xl p-6 transition-all duration-300 hover:shadow-soft hover:-translate-y-2">
                  {/* Icon circle */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto relative z-10">
                    <phase.icon className={`w-8 h-8 ${phase.color}`} strokeWidth={2} />
                  </div>
                  
                  {/* Subtitle badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                    {phase.subtitle}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                    {phase.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                  
                  {/* Decorative glow on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-tennis opacity-0 group-hover:opacity-5 transition-opacity -z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
