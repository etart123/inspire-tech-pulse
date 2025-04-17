
import { Award, BookOpen, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-gray-50">
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
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
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

          <Card className="hover:shadow-lg transition-shadow animate-fade-in delay-100">
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

          <Card className="hover:shadow-lg transition-shadow animate-fade-in delay-200">
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

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in delay-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <Separator className="max-w-[100px] mx-auto" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-ith-orange flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
                alt="CEO"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-600 italic mb-4">
                "At Inspire Tech Hub, we're not just teaching technology - we're cultivating a digital ecosystem that transforms potential into power. From our rural roots, we're building bridges of innovation that connect Ethiopia's young talent with global opportunities."
              </p>
              <p className="font-semibold">Abebe Bekele</p>
              <p className="text-gray-500 text-sm">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

