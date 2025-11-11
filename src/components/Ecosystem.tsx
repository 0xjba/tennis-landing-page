import { Card } from "@/components/ui/card";

const partners = [
  { name: "TEN Wallet", category: "Wallet" },
  { name: "TEN Explorer", category: "Analytics" },
  { name: "TEN DeFi Hub", category: "Finance" },
  { name: "TEN NFT Gallery", category: "Marketplace" },
  { name: "TEN DAO", category: "Governance" },
  { name: "TEN Bridge", category: "Infrastructure" },
];

export const Ecosystem = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-secondary/30 to-accent/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-foreground">
          Ecosystem & Integrations
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Your TENNIS name works seamlessly across the entire TEN network.
        </p>
        <p className="text-center text-sm text-muted-foreground/80 mb-16">
          Built with TEN's Encryption SDK
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card 
              key={partner.name}
              className="p-6 bg-card/60 backdrop-blur-md border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft rounded-2xl animate-fade-in group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {partner.category}
                  </p>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
