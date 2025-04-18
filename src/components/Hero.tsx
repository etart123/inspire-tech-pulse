
import { Button } from './ui/button';
import { ArrowRight, Monitor, Users, Globe, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Where Ideas Turn Into Innovation.";
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#1a2245] to-black">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 10 + 1}px`,
                height: `${Math.random() * 10 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: Math.random() > 0.5 ? '#fd7902' : '#2e3a87',
                boxShadow: `0 0 ${Math.random() * 10 + 5}px ${Math.random() > 0.5 ? '#fd7902' : '#2e3a87'}`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-white">{typedText}</span>
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0 animate-fade-in delay-300">
                We don't just build tech — we craft digital revolutions. 
                <span className="block mt-2">Inspire Tech Hub is where thinkers, creators, and coders collide.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in delay-400">
              <Button className="bg-ith-orange hover:bg-ith-orange/90 transition-all px-8 py-6 text-lg group relative overflow-hidden shadow-lg shadow-ith-orange/20">
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative">Get a Solution</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-ith-blue text-white hover:bg-ith-blue hover:text-white px-8 py-6 text-lg group transition-all duration-300 shadow-lg shadow-ith-blue/10">
                <span className="relative">Join the Movement</span>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-in delay-500">
              <div className="text-center p-4 rounded-lg transition-all duration-300 hover:bg-white/5">
                <Monitor className="w-8 h-8 mx-auto text-ith-orange mb-2" />
                <h4 className="font-semibold text-white">Modern Tech</h4>
                <p className="text-sm text-gray-300">Latest Solutions</p>
              </div>
              <div className="text-center p-4 rounded-lg transition-all duration-300 hover:bg-white/5">
                <Users className="w-8 h-8 mx-auto text-ith-blue mb-2" />
                <h4 className="font-semibold text-white">Expert Team</h4>
                <p className="text-sm text-gray-300">Skilled Developers</p>
              </div>
              <div className="text-center p-4 rounded-lg transition-all duration-300 hover:bg-white/5">
                <Globe className="w-8 h-8 mx-auto text-ith-orange mb-2" />
                <h4 className="font-semibold text-white">Global Reach</h4>
                <p className="text-sm text-gray-300">Worldwide Impact</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-ith-orange/20 to-ith-blue/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-ith-orange/20 rounded-full animate-float delay-300"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ith-blue/20 rounded-full animate-float"></div>
              
              {/* Main Image */}
              <div className="rounded-2xl shadow-2xl overflow-hidden border border-white/10 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Tech Innovation"
                  className="object-cover h-[600px] w-full transition-all duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-5 -right-5 bg-ith-orange/90 text-white p-4 rounded-lg shadow-lg transform rotate-3 z-10">
                <p className="font-bold">Innovative Solutions</p>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-ith-blue/90 text-white p-4 rounded-lg shadow-lg transform -rotate-3 z-10">
                <p className="font-bold">Cutting-Edge Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
