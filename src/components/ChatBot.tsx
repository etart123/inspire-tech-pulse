
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const ChatBot = () => {
  const handleChatClick = () => {
    window.open("https://t.me/ithsupport", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleChatClick}
        className="bg-ith-orange hover:bg-ith-blue transition-colors rounded-full p-4 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ChatBot;
