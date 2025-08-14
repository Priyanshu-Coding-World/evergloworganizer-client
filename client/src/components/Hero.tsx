import { Crown, Star, Award, Trophy, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Simulation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <div className="mb-8">
          <div className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm animate-glow mb-6">
            <Crown className="w-16 h-16 text-gold" data-testid="hero-crown-icon" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6" data-testid="hero-title">
          EverGlow <span className="text-gold">Organisers</span>
        </h1>
        <p className="text-2xl md:text-3xl font-light mb-8 text-gold" data-testid="hero-motto">
          We Make Your Day
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90" data-testid="hero-description">
          Premium event management with a personal touch, creating luminous, memorable experiences that shine forever.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            data-testid="button-plan-event"
          >
            Plan Your Event
          </Button>
          <Button 
            onClick={() => scrollToSection("portfolio")}
            variant="outline"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-navy px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            data-testid="button-view-portfolio"
          >
            View Our Portfolio
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-80">
          <div className="flex items-center gap-2" data-testid="trust-events">
            <Star className="w-4 h-4 text-gold" />
            <span>500+ Events</span>
          </div>
          <div className="flex items-center gap-2" data-testid="trust-years">
            <Award className="w-4 h-4 text-gold" />
            <span>15+ Years</span>
          </div>
          <div className="flex items-center gap-2" data-testid="trust-award">
            <Trophy className="w-4 h-4 text-gold" />
            <span>Award-Winning</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" data-testid="scroll-indicator" />
      </div>
    </section>
  );
}