import { Button } from "@/components/ui/button";
import heroLandscape from "@/assets/hero-tennis-landscape.jpg";
import floatingBall from "@/assets/floating-tennis-ball.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-sunlit">
      {/* Background hero image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroLandscape} 
          alt="Tennis ball dreamscape" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      {/* Floating tennis balls with transparency */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 animate-float opacity-80 mix-blend-normal">
        <img 
          src={floatingBall}
          alt=""
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 animate-float-slow opacity-70 mix-blend-normal">
        <img 
          src={floatingBall}
          alt=""
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 animate-float opacity-60 mix-blend-normal">
        <img 
          src={floatingBall}
          alt=""
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground leading-tight">
          Your Name.<br />
          Your Game.<br />
          <span className="text-primary">On TEN.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Own your on-chain identity — playful, private, permanent.
        </p>
        
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-hero animate-bounce-soft hover:scale-105 transition-transform"
        >
          Claim Your Name
        </Button>
      </div>
    </section>
  );
};
