
import { Award, BookOpen, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-ith-orange to-ith-blue bg-clip-text text-transparent">
              About ITH
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Born in a rural setting and driven by a self-taught vision, ITH is where ideas spark, grow, and inspire action across Ethiopia and beyond.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-ith-orange/10 rounded-full mb-4">
                  <BookOpen className="h-6 w-6 text-ith-orange" />
                </div>
                <h3 className="font-semibold mb-2">Self-Taught Vision</h3>
                <p className="text-gray-600">Empowering through innovative learning and self-driven education.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-ith-blue/10 rounded-full mb-4">
                  <Users className="h-6 w-6 text-ith-blue" />
                </div>
                <h3 className="font-semibold mb-2">Community Focus</h3>
                <p className="text-gray-600">Building a vibrant tech community across Ethiopia and beyond.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-ith-orange/10 rounded-full mb-4">
                  <Award className="h-6 w-6 text-ith-orange" />
                </div>
                <h3 className="font-semibold mb-2">Digital Excellence</h3>
                <p className="text-gray-600">Crafting innovative solutions and inspiring digital growth.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
