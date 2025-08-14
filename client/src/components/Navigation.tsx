import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
    } border-b border-gold/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-playfair font-bold text-navy">
              EverGlow <span className="text-gold">Organisers</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-navy hover:text-coral transition-colors duration-300 font-medium"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-navy hover:text-coral transition-colors duration-300 font-medium"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-navy hover:text-coral transition-colors duration-300 font-medium"
                data-testid="nav-portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-navy hover:text-coral transition-colors duration-300 font-medium"
                data-testid="nav-testimonials"
              >
                Reviews
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-coral hover:bg-coral/90 text-white px-6 py-2 rounded-full transition-all duration-300 font-medium"
                data-testid="nav-contact"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy hover:text-coral"
              data-testid="mobile-menu-button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-navy hover:text-coral transition-colors w-full text-left"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-navy hover:text-coral transition-colors w-full text-left"
              data-testid="mobile-nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="block px-3 py-2 text-navy hover:text-coral transition-colors w-full text-left"
              data-testid="mobile-nav-portfolio"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="block px-3 py-2 text-navy hover:text-coral transition-colors w-full text-left"
              data-testid="mobile-nav-testimonials"
            >
              Reviews
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="block mx-3 my-2 bg-coral hover:bg-coral/90 text-white px-4 py-2 rounded-full text-center transition-all w-auto"
              data-testid="mobile-nav-contact"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}