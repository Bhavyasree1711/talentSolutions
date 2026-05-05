'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export function StickyWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi DMX Talent Solutions! I'm interested in your HR and training services. Can we discuss my requirements?"
    );
    window.open(`https://wa.me/919247030111?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-20 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}

export function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleCallClick = () => {
    window.location.href = 'tel:+919247030111';
  };

  return (
    <button
      onClick={handleCallClick}
      className={`fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      aria-label="Call us now"
    >
      <Phone className="w-6 h-6" />
    </button>
  );
}