import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PortfolioItem } from "@shared/schema";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([]);

  const { data: portfolioItems = [], isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  useEffect(() => {
    if (portfolioItems && Array.isArray(portfolioItems) && portfolioItems.length > 0) {
      if (filter === "all") {
        setFilteredItems(portfolioItems);
      } else {
        setFilteredItems(portfolioItems.filter((item: PortfolioItem) => item.category === filter));
      }
    }
  }, [portfolioItems, filter]);

  const filters = [
    { id: "all", label: "All Events" },
    { id: "wedding", label: "Weddings" },
    { id: "corporate", label: "Corporate" },
    { id: "social", label: "Social" },
  ];

  if (isLoading) {
    return (
      <section id="portfolio" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto"></div>
            <p className="text-white mt-4">Loading portfolio...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6" data-testid="portfolio-title">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8" data-testid="portfolio-description">
            Discover the magic we've created for clients across the globe, each event telling its own unique story.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterItem) => (
              <Button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === filterItem.id
                    ? "bg-coral text-white"
                    : "bg-white/10 text-white hover:bg-coral"
                }`}
                data-testid={`filter-${filterItem.id}`}
              >
                {filterItem.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-testid="portfolio-grid">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-xl bg-transparent border-none"
              data-testid={`portfolio-item-${item.id}`}
            >
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-playfair font-semibold text-lg mb-1" data-testid={`portfolio-title-${item.id}`}>
                      {item.title}
                    </h4>
                    <p className="text-sm opacity-90" data-testid={`portfolio-description-${item.id}`}>
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold"
            data-testid="button-view-complete-portfolio"
          >
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
