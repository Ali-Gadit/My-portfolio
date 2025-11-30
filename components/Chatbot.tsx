"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";

interface Message {
  text: string;
  isUser: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 💤 Wake up backend on component load
  useEffect(() => {
    const wakeBackend = async () => {
      try {
        const res = await fetch("/api/ping");
        const data = await res.json();
        console.log("Backend ping result:", data);
      } catch (err) {
        console.error("Error pinging backend:", err);
      }
    };
    wakeBackend();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getAIResponse = async (userMessage: string): Promise<{ response: string; session_id: string }> => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          session_id: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error("API response not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error calling AI agent:", error);
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = { text: inputMessage, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const data = await getAIResponse(inputMessage);
      setMessages((prev) => [...prev, { text: data.response, isUser: false }]);

      if (data.session_id) {
        setSessionId(data.session_id);
      }
    } catch (error) {
      console.log("Handling AI response error:", error);
      
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm experiencing technical difficulties. Please contact us directly at +92 3248274201 or email muhammadaligadit@gmail.com",
          isUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    "What services do you offer?",
    "I need an e-commerce website",
    "Tell me about your AI services",
    "How much for a portfolio site?",
    "What's your development process?",
    "How to contact your team?",
  ];

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setSessionId(null);
        setMessages([]);
      }, 300000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;
  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 group cursor-pointer"
        aria-label="Chat with CodeVerse AI Assistant"
      >
        <MessageCircle className="group-hover:scale-110 transition-transform duration-200 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        <div className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-75 p-3 sm:p-4"></div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200"
          >
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <h3 className="font-bold text-sm">Codey</h3>
                  <p className="text-xs opacity-90">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 text-sm h-full flex items-center justify-center">
                  <div>
                    <p>Hello! I&apos;m your CodeVerse AI assistant. </p>
                    <p>How can I help you today? 🚀</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.isUser
                            ? "bg-purple-600 text-white rounded-br-none"
                            : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {!message.isUser && (
                            <Bot className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                          )}
                          <p className="text-sm whitespace-pre-wrap break-words min-w-0 flex-1">
                            {message.text}
                          </p>
                          {message.isUser && (
                            <User className="w-4 h-4 mt-1 flex-shrink-0 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 text-gray-800 p-3 rounded-2xl rounded-bl-none max-w-[80%]">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {messages.length === 0 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputMessage(reply);
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                      className="text-xs bg-white border border-purple-200 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-50 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
