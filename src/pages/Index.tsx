
import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="scroll-trigger animate-scroll-fade">
        <About />
      </div>
      <div className="scroll-trigger animate-scroll-fade delay-200">
        <Services />
      </div>
      <div className="scroll-trigger animate-scroll-fade delay-300">
        <Portfolio />
      </div>
      <div className="scroll-trigger animate-scroll-fade delay-400">
        <FAQ />
      </div>
      <div className="scroll-trigger animate-scroll-fade delay-500">
        <Contact />
      </div>
      <div className="scroll-trigger animate-scroll-fade delay-600">
        <Footer />
      </div>
      <ChatBot />
    </main>
  );
};

export default Index;

