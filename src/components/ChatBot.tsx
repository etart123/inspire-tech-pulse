
import { MessageCircle, X, ChevronDown, MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "./ui/use-toast";

const NOTIFICATION_INTERVAL = 25 * 60 * 1000; // 25 minutes in milliseconds

const ChatBot = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const faqQuestions = [
    { id: 1, question: "What services does ITH offer?", url: "https://t.me/ithsupport" },
    { id: 2, question: "How do I join the affiliate program?", url: "https://t.me/ithsupport" },
    { id: 3, question: "Where are you located?", url: "https://t.me/ithsupport" },
    { id: 4, question: "Do you offer web development?", url: "https://t.me/ithsupport" },
    { id: 5, question: "How can I request a quote?", url: "https://t.me/ithsupport" },
  ];

  useEffect(() => {
    const showNotification = () => {
      const audio = new Audio('/notification.mp3');
      audio.play().catch(console.error);
      
      toast({
        title: "Need Help?",
        description: "Our support team is ready to assist you! Click to chat.",
        duration: 5000,
        action: <Button onClick={() => setIsOpen(true)}>Open Chat</Button>
      });
    };

    const intervalId = setInterval(showNotification, NOTIFICATION_INTERVAL);
    return () => clearInterval(intervalId);
  }, [toast]);

  const handleQuestionClick = (url: string) => {
    window.open(url, "_blank");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div 
        className={`absolute bottom-full right-0 mb-2 bg-white text-black rounded-lg shadow-lg p-3 text-sm transition-all duration-300 pointer-events-none ${
          showTooltip && !isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        Chat with us on Telegram!
        <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
      </div>
      
      {/* Chat Card */}
      <div
        className={`absolute bottom-full right-0 mb-4 w-80 transition-all duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <Card className="shadow-xl border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-ith-blue to-ith-orange p-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-white flex items-center gap-2">
                <MessageSquare size={18} />
                <span>ITH Support</span>
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleChat}
                className="h-8 w-8 rounded-full text-white hover:bg-white/20"
              >
                <X size={16} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-sm text-gray-600 mb-3">
              Frequently asked questions:
            </div>
            <div className="space-y-2">
              {faqQuestions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleQuestionClick(item.url)}
                  className="p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer flex items-center justify-between group transition-all"
                >
                  <span>{item.question}</span>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-ith-orange" />
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t text-center">
              <Button
                onClick={() => window.open("https://t.me/ithsupport", "_blank")}
                className="w-full bg-ith-blue hover:bg-ith-orange text-white transition-colors"
                size="sm"
              >
                Open Telegram Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Toggle Button */}
      <Button
        onClick={toggleChat}
        onMouseEnter={() => !isOpen && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`${isOpen ? 'bg-gray-600' : 'bg-ith-orange'} hover:bg-ith-blue transition-colors rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
      >
        {isOpen ? <ChevronDown className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default ChatBot;
