
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const ChatBot = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleChatClick = () => {
    window.open("https://t.me/ithsupport", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className={`absolute bottom-full right-0 mb-2 bg-white text-black rounded-lg shadow-lg p-3 text-sm transition-all duration-300 pointer-events-none ${
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        Chat with us on Telegram!
        <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
      </div>
      
      <Button
        onClick={handleChatClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="bg-ith-orange hover:bg-ith-blue transition-colors rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ChatBot;
