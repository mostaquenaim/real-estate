'use client'
import React from 'react';
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';

interface SocialMediaPluginProps {
  phoneNumber?: string;
  message?: string;
  label?: string;
  social?: 'whatsapp' | 'messenger';
  messengerId?: string;
}

const SocialMediaPlugin: React.FC<SocialMediaPluginProps> = ({
  phoneNumber = '1234567890',
  message = 'Hello, I would like to get more information',
  label = '',
  social = 'whatsapp',
  messengerId = '639110919296610',
}) => {
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
  const messengerUrl = `https://m.me/${messengerId}`;

  if (social === 'whatsapp') {
    return (
      <div className="fixed bottom-20 right-5 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center py-2 px-4 text-white rounded-full font-bold bg-green-500 hover:bg-green-600 transition shadow-lg"
        >
          <FaWhatsapp className="mr-2 text-lg" />
          {label || 'Chat on WhatsApp'}
        </a>
      </div>
    );
  }

  if (social === 'messenger') {
    return (
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href={messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center py-2 px-4 text-white rounded-full font-bold bg-[#0084FF] hover:bg-[#006FDB] transition shadow-lg"
        >
          <FaFacebookMessenger className="mr-2 text-lg" />
          {label || 'Chat on Messenger'}
        </a>
      </div>
    );
  }

  return null;
};

export default SocialMediaPlugin;
