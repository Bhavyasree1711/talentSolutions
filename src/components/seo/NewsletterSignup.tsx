'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'popup' | 'footer';
  className?: string;
}

export function NewsletterSignup({ variant = 'inline', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Here you would typically send the email to your newsletter service
    console.log('Newsletter signup:', email);

    setIsSubmitted(true);
    setIsLoading(false);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  if (variant === 'popup') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg ${className}`}>
        <div className="text-center">
          <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-xl font-bold mb-2">Stay Updated!</h3>
          <p className="text-blue-100 mb-4">
            Get the latest HR trends, job market insights, and training updates delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              {isLoading ? '...' : 'Subscribe'}
            </button>
          </form>
          {isSubmitted && (
            <p className="text-green-300 mt-2 flex items-center justify-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Successfully subscribed!
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`bg-gray-50 p-6 rounded-lg ${className}`}>
        <div className="text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Subscribe to Our Newsletter</h4>
          <p className="text-gray-600 mb-4">
            Get weekly insights on HR trends, staffing updates, and career opportunities.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {isSubmitted && (
            <p className="text-green-600 mt-2 flex items-center justify-center gap-1 text-sm">
              <CheckCircle className="w-4 h-4" />
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>
    );
  }

  // Default inline variant
  return (
    <div className={`bg-gray-50 p-6 rounded-lg border ${className}`}>
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <Mail className="w-8 h-8 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-1">Stay Informed</h4>
          <p className="text-gray-600 text-sm mb-3">
            Get the latest HR insights and job market updates.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? '...' : 'Join'}
            </button>
          </form>
          {isSubmitted && (
            <p className="text-green-600 mt-1 text-xs flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Subscribed successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}