
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
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
      <ChatBot />
    </main>
  );
};

export default Index;
