
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-ith-orange to-ith-blue bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to learn more about our services or discuss your project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Your message..."
                />
              </div>
              <Button className="w-full bg-ith-orange hover:bg-ith-blue transition-colors">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-ith-orange mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-ith-orange mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+251 912 345 678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-ith-orange mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@inspiretechhub.com</p>
                  </div>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
