
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
            <h3 className="text-2xl font-bold mb-4">A Vision for Impact</h3>
            <Separator className="max-w-[100px] mx-auto" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-ith-orange flex-shrink-0">
              <img
                src="/lovable-uploads/8b718b0b-6c58-4d22-9d52-5acbdce2bf29.png"
                alt="Eyob Ayalew"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-600 italic mb-4">
                "Some journeys aren't made in the spotlight — they're forged in silence, far from the noise. Inspire Tech Hub was never about being seen. It was about building something that matters, even if no one knows the face behind it. I've learned that the greatest innovation comes from constraint. That real impact doesn't need fame — just focus. Inspire Tech Hub is the result of that mindset: a platform built to empower, uplift, and create — quietly but relentlessly."
              </p>
              <p className="font-semibold">Eyob Ayalew</p>
              <p className="text-gray-500 text-sm">Founder & CEO</p>
              <div className="mt-3 py-2 px-4 bg-ith-orange/10 border-l-2 border-ith-orange rounded">
                <p className="text-ith-blue font-medium">Tech for those who were never meant to be left behind.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
