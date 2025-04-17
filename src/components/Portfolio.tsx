
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
      title: "E-Learning Platform",
      description: "A comprehensive digital learning solution for remote education",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Tech Community Hub",
      description: "Digital platform connecting tech enthusiasts across Ethiopia",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Innovation Lab",
      description: "Creative space for tech innovation and collaboration",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
            Discover our innovative projects and solutions that make a difference.
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-none">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden rounded-xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                          <div className="text-white">
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
