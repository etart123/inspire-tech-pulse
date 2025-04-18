
import React, { useEffect } from 'react';
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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scroll-fade');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-trigger').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.scroll-trigger').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="scroll-trigger opacity-0">
        <Hero />
      </div>
      <div className="scroll-trigger opacity-0">
        <About />
      </div>
      <div className="scroll-trigger opacity-0">
        <Services />
      </div>
      <div className="scroll-trigger opacity-0">
        <Portfolio />
      </div>
      <div className="scroll-trigger opacity-0">
        <FAQ />
      </div>
      <div className="scroll-trigger opacity-0">
        <Contact />
      </div>
      <div className="scroll-trigger opacity-0">
        <Footer />
      </div>
      <ChatBot />
    </main>
  );
};

export default Index;
