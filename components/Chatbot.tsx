"use client";

import { useState } from "react";
import { CLINIC_INFO } from "@/lib/constants";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const quickReplies = [
    { text: "Book Appointment", action: "book" },
    { text: "Our Services", action: "services" },
    { text: "Location", action: "location" },
    { text: "Contact", action: "contact" },
  ];

  const handleQuickReply = (action: string, text: string) => {
    setMessages((prev) => [...prev, { type: "user", text }]);

    setTimeout(() => {
      let response = "";
      switch (action) {
        case "book":
          response = `Great! You can book an appointment by calling us at ${CLINIC_INFO.phoneDisplay} or visiting our clinic at ${CLINIC_INFO.address.area}, Chennai.`;
          break;
        case "services":
          response =
            "We offer General Dentistry, Teeth Cleaning, Whitening, Fillings, Extractions, Root Canal, Orthodontics, and Paediatric Dentistry. Would you like to know more about any specific service?";
          break;
        case "location":
          response = `We're located at ${CLINIC_INFO.address.full}. Open Mon-Sat: ${CLINIC_INFO.hours.weekdays}, Sunday: ${CLINIC_INFO.hours.sunday}`;
          break;
        case "contact":
          response = `You can reach us at ${CLINIC_INFO.phoneDisplay}. We're here to help! 😊`;
          break;
        default:
          response = "I'm here to help! Please choose an option above.";
      }
      setMessages((prev) => [...prev, { type: "bot", text: response }]);
    }, 500);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Redirect to WhatsApp with the message
    const whatsappUrl = `https://wa.me/919566009206?text=${encodeURIComponent(
      input
    )}`;
    window.open(whatsappUrl, "_blank");

    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: "var(--color-teal)" }}
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          {/* Header */}
          <div
            className="p-4 text-white"
            style={{ backgroundColor: "var(--color-teal)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                🦷
              </div>
              <div>
                <h3 className="font-semibold">{CLINIC_INFO.name}</h3>
                <p className="text-xs text-white/80">Online now</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    msg.type === "user" ? "text-white" : "text-gray-800"
                  }`}
                  style={{
                    backgroundColor:
                      msg.type === "user"
                        ? "var(--color-teal)"
                        : "var(--color-teal-light)",
                  }}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-3 flex flex-wrap gap-2">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply.action, reply.text)}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:shadow-md"
                style={{
                  backgroundColor: "var(--color-teal-light)",
                  color: "var(--color-teal)",
                }}
              >
                {reply.text}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            className="p-4 border-t"
            style={{ borderColor: "var(--color-teal-light)" }}
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-full border text-sm focus:outline-none focus:ring-2"
                style={{
                  borderColor: "var(--color-teal-light)",
                  backgroundColor: "var(--color-bg)",
                }}
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "var(--color-teal)" }}
                aria-label="Send message"
              >
                <span className="text-lg">➤</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
