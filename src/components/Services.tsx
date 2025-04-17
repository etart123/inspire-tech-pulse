
import { Code, Laptop, Rocket, Brain } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-ith-orange to-ith-blue bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive tech solutions and educational services to empower the next generation of innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Brain className="h-8 w-8" />,
              title: "Tech Education",
              description: "Comprehensive training in modern programming and digital skills."
            },
            {
              icon: <Code className="h-8 w-8" />,
              title: "Software Development",
              description: "Custom software solutions tailored to your needs."
            },
            {
              icon: <Laptop className="h-8 w-8" />,
              title: "Web Development",
              description: "Modern, responsive websites and web applications."
            },
            {
              icon: <Rocket className="h-8 w-8" />,
              title: "Digital Innovation",
              description: "Cutting-edge solutions for digital transformation."
            }
          ].map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-r from-ith-orange to-ith-blue rounded-full mb-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
