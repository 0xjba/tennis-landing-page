export const WhatIsTENNIS = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Floating visual elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          What is TENNIS?
        </h2>
        
        <p className="text-2xl md:text-3xl text-foreground/90 mb-8 leading-relaxed">
          TENNIS is the on-chain naming service for the TEN blockchain — like ENS, but built for an encrypted world.
        </p>
        
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
          <p className="leading-relaxed">
            The naming layer for the encrypted web. TENNIS creates human-readable identities that map to wallets, agents, and encrypted data — all while preserving your privacy through TEN's confidential computing infrastructure.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all">
              <h3 className="text-xl font-semibold text-foreground mb-2">Human-Readable</h3>
              <p className="text-sm text-muted-foreground">yourname.tennis instead of 0x742d...</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all">
              <h3 className="text-xl font-semibold text-foreground mb-2">Composable</h3>
              <p className="text-sm text-muted-foreground">Works across the entire TEN ecosystem</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all">
              <h3 className="text-xl font-semibold text-foreground mb-2">Encrypted</h3>
              <p className="text-sm text-muted-foreground">Built for TEN's secure architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
