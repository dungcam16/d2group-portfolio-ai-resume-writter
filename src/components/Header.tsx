import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <FileText className="h-6 w-6 text-primary" />
          <span className="bg-gradient-primary bg-clip-text text-transparent">ResumeAI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-foreground/60'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/features') ? 'text-primary' : 'text-foreground/60'
            }`}
          >
            Features
          </Link>
          <Link 
            to="/blog" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/blog') ? 'text-primary' : 'text-foreground/60'
            }`}
          >
            Blog
          </Link>
          <Link 
            to="/pricing" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/pricing') ? 'text-primary' : 'text-foreground/60'
            }`}
          >
            Pricing
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/contact') ? 'text-primary' : 'text-foreground/60'
            }`}
          >
            Contact
          </Link>
        </div>
        
        <Link to="/resume">
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
