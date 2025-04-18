
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "ITH Construction ERP",
      description: "Comprehensive construction management solution for Ethiopian builders",
      image: "/lovable-uploads/96e15f07-b1a3-4c24-b7b0-5769a053b9bc.png"
    },
    {
      title: "ITH HR Management",
      description: "Advanced HR system tailored for Ethiopian businesses",
      image: "/lovable-uploads/30bc2551-b5d8-446c-9358-bb2c2a45e1ee.png"
    },
    {
      title: "ETH Gym Management",
      description: "Modern fitness facility management system",
      image: "/lovable-uploads/d8d5615e-597b-45b9-bad8-b436f476e0cd.png"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-ith-orange to-ith-blue bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our innovative Ethiopian tech solutions
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="animate-slide-in-right" style={{ animationDelay: `${index * 200}ms` }}>
                  <Card className="border-0 shadow-none">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden rounded-xl group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                          <div className="text-white transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-white/80">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
