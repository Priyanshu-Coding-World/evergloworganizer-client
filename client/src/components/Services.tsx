import { Building, Heart, PartyPopper, Video, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "corporate",
    icon: Building,
    title: "Corporate Events",
    description: "Professional galas, conferences, and corporate celebrations that elevate your brand presence.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    price: "Starting from $5,000",
  },
  {
    id: "wedding",
    icon: Heart,
    title: "Luxury Weddings",
    description: "Bespoke weddings crafted with attention to every detail, creating your perfect fairy tale.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    price: "Starting from $8,000",
  },
  {
    id: "social",
    icon: PartyPopper,
    title: "Social Celebrations",
    description: "Milestone birthdays, anniversaries, and special occasions that deserve extraordinary celebrations.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    price: "Starting from $3,000",
  },
  {
    id: "virtual",
    icon: Video,
    title: "Virtual Events",
    description: "Innovative hybrid and virtual experiences that connect audiences across the globe seamlessly.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    price: "Starting from $2,000",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-pearl to-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6" data-testid="services-title">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="services-description">
            From intimate celebrations to grand corporate galas, we create extraordinary experiences tailored to your vision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-2 hover:scale-105"
                data-testid={`service-card-${service.id}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IconComponent className="w-8 h-8 mb-2" />
                    <p className="font-medium">Explore</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-semibold text-navy mb-4" data-testid={`service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6" data-testid={`service-description-${service.id}`}>
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-coral font-semibold" data-testid={`service-price-${service.id}`}>
                      {service.price}
                    </span>
                    <ArrowRight className="w-5 h-5 text-coral group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}