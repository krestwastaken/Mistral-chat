"use client";

import { useState, useRef, useEffect } from "react";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (message: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      console.error("Error fetching AI reply:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "⚠️ Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-200">
      <div className="px-5 py-4 border-b border-gray-100 text-lg font-semibold text-gray-800">
        Mistral Chat
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} role={msg.role} content={msg.content} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={chatEndRef} />
      </div>

      <div className="border-t border-gray-100 p-3 bg-gray-50">
        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}
