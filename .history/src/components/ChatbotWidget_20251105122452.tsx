import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ChatbotWidgetProps {
  isActive?: boolean;
}

export function ChatbotWidget({ isActive = false }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm your Campaign Waala AI assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  useEffect(() => {
    if (isActive) {
      setIsOpen(true);
    }
  }, [isActive]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = {
      type: "user",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, userMessage]);
    setMessage("");

    setTimeout(() => {
      const botResponse = {
        type: "bot",
        text: "Thanks for your message! Our team will get back to you shortly. In the meantime, you can explore our FAQ section for quick answers.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] glass rounded-3xl border-glow-animated flex flex-col overflow-hidden z-50 shadow-2xl">
          {/* Header */}
          <div className="relative p-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-purple-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center glow-cyan">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-background" />
                </div>
                <div>
                  <div className="font-medium">AI Assistant</div>
                  <div className="text-xs text-muted-foreground">Online • Instant replies</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-muted/50 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.type === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                      : "glass border border-purple-500/20"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.type === "user" ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-purple-500/20 bg-background/50">
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="glass border-purple-500/30 focus:border-cyan-500 bg-background/50"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 glow-cyan flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-2xl glow-cyan flex items-center justify-center z-50 transition-all hover:scale-110 group"
      >
        {isOpen ? (
          <X className="w-7 h-7 group-hover:rotate-90 transition-transform" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-7 h-7" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
        )}
      </button>
    </>
  );
}
