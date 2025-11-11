import { Twitter, Github, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-accent border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-foreground mb-2">
              <span className="text-primary">TENNIS</span> × TEN
            </h3>
            <p className="text-sm text-muted-foreground">
              On-chain identity that bounces with personality
            </p>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#docs" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Docs</span>
            </a>
            <a 
              href="#twitter" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Twitter</span>
            </a>
            <a 
              href="#github" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TENNIS. Built for the TEN blockchain.
        </div>
      </div>
    </footer>
  );
};
