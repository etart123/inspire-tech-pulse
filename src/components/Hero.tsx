
import { Button } from './ui/button';
import { ArrowRight, Monitor, Users, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-ith-orange to-ith-blue bg-clip-text text-transparent animate-fade-in">
                  Transforming Ideas
                </span>
                <br />
                <span className="animate-fade-in delay-200">
                  Into Digital Reality
                </span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0 animate-fade-in delay-300">
                Leading software development and IT training hub in Ethiopia, empowering businesses and nurturing tech talents for the digital future.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in delay-400">
              <Button className="bg-ith-orange hover:bg-ith-blue transition-colors px-8 py-6 text-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-ith-blue text-ith-blue hover:bg-ith-blue hover:text-white px-8 py-6 text-lg">
                Our Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-in delay-500">
              <div className="text-center">
                <Monitor className="w-8 h-8 mx-auto text-ith-orange mb-2" />
                <h4 className="font-semibold">Modern Tech</h4>
                <p className="text-sm text-gray-600">Latest Solutions</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto text-ith-blue mb-2" />
                <h4 className="font-semibold">Expert Team</h4>
                <p className="text-sm text-gray-600">Skilled Developers</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 mx-auto text-ith-orange mb-2" />
                <h4 className="font-semibold">Global Reach</h4>
                <p className="text-sm text-gray-600">Worldwide Impact</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-ith-orange/20 to-ith-blue/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-ith-orange/10 rounded-full animate-float delay-300"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ith-blue/10 rounded-full animate-float"></div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                alt="Tech Innovation"
                className="rounded-2xl shadow-2xl animate-float object-cover h-[600px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
