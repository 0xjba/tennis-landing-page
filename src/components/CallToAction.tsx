import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-accent/20 to-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          Own your encrypted<br />
          identity today.
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join the future of on-chain naming — playful, private, and built for TEN.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-hero hover:scale-105 transition-transform"
          >
            Claim Your TENNIS Name
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-border hover:border-primary/50 text-foreground text-lg px-8 py-7 rounded-full hover:bg-card/50 transition-all group"
          >
            <FileText className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
            View Docs
          </Button>
        </div>
      </div>
    </section>
  );
};
