
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-ith-orange to-ith-blue bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                What services does Inspire Tech Hub offer?
              </AccordionTrigger>
              <AccordionContent>
                We offer a range of services including tech education, software development, web development, and digital innovation solutions tailored to empower businesses and individuals across Ethiopia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                How can I enroll in your tech education programs?
              </AccordionTrigger>
              <AccordionContent>
                You can enroll by contacting us through our website, email, or visiting our office in Addis Ababa. We offer flexible learning options and personalized guidance for all skill levels.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                Do you offer custom software solutions?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we specialize in developing custom software solutions tailored to your specific business needs, from web applications to mobile solutions and enterprise software.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                What makes Inspire Tech Hub unique?
              </AccordionTrigger>
              <AccordionContent>
                Our unique approach combines rural innovation with modern technology. We focus on empowering young minds while delivering professional tech solutions, making us a bridge between traditional values and digital transformation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
