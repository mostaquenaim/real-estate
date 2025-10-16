"use client";

import { useState } from "react";
import { MessageCircle, X, MessageSquare, Phone } from "lucide-react";
import SocialMediaPlugin from "@/components/WhatsappContact";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {/* Social icons with better styling */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-500 ease-out ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {/* WhatsApp Button */}
        <div className="flex items-center gap-3 group">
          {/* <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium px-3 py-2 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
          </span> */}
          <SocialMediaPlugin
            phoneNumber="+8801337938322"
            message="Hello, I'm interested in your services"
            label="WhatsApp"
            social="whatsapp"
          />
        </div>

        {/* Messenger Button */}
        <div className="flex items-center gap-3 group">
          {/* <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium px-3 py-2 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Message on Facebook
          </span> */}
          <SocialMediaPlugin
            message="Hello, I'm interested in your services"
            label="Messenger"
            social="messenger"
            messengerId="639110919296610"
          />
        </div>
      </div>

      {/* Main toggle button with enhanced design */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          relative rounded-full p-4 shadow-2xl transition-all duration-500 hover:scale-110
          ${
            open
              ? "bg-red-500 hover:bg-red-600 rotate-90"
              : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
          }
          group
        `}
      >
        {/* Pulse animation when closed */}
        {!open && (
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        )}

        <div className="relative text-white transition-transform duration-300 group-hover:scale-110">
          {open ? <X size={24} /> : <MessageCircle size={24} />}
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {open ? "Close chat" : "Get in touch"}
        </div>
      </button>
    </div>
  );
}
