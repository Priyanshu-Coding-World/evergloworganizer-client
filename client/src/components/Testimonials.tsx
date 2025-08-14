import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah & James Mitchell",
    role: "Wedding - June 2023",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    quote: "EverGlow transformed our wedding vision into a magical reality. Every detail was perfect, and the day flowed seamlessly. We couldn't have asked for better!",
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "CEO, TechCorp - March 2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    quote: "The corporate gala exceeded all expectations. Professional, elegant, and flawlessly executed. Our clients were thoroughly impressed!",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Birthday Celebration - August 2023",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    quote: "My 50th birthday party was absolutely spectacular! Every guest is still talking about how amazing everything was. Thank you EverGlow!",
  },
];

const trustBadges = [
  { icon: "🏆", text: "Wedding Industry Awards" },
  { icon: "🛡️", text: "Fully Insured" },
  { icon: "📜", text: "Certified Planners" },
  { icon: "🤝", text: "Money-Back Guarantee" },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gold/10 to-rose-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6" data-testid="testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="testimonials-description">
            Hear from the couples, families, and companies who trusted us to make their special moments extraordinary.
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              data-testid="testimonial-carousel"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <Card className="rounded-3xl p-8 md:p-12 shadow-xl bg-gradient-to-br from-white to-gold/5">
                      <CardContent className="text-center">
                        <div className="flex justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-gold fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-2xl md:text-3xl font-playfair font-medium text-navy mb-8 italic" data-testid={`testimonial-quote-${testimonial.id}`}>
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center justify-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover mr-4"
                            data-testid={`testimonial-avatar-${testimonial.id}`}
                          />
                          <div>
                            <h4 className="font-semibold text-navy" data-testid={`testimonial-name-${testimonial.id}`}>
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600" data-testid={`testimonial-role-${testimonial.id}`}>
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-navy w-12 h-12 rounded-full shadow-lg transition-all duration-300"
            data-testid="testimonial-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-navy w-12 h-12 rounded-full shadow-lg transition-all duration-300"
            data-testid="testimonial-next"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full p-0 transition-all duration-300 ${
                  index === currentSlide ? "bg-coral" : "bg-gray-300"
                }`}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-semibold text-navy mb-4" data-testid="trust-badges-title">
              Trusted & Certified
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2" data-testid={`trust-badge-${index}`}>
                <span className="text-2xl">{badge.icon}</span>
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}