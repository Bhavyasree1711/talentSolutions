'use client';

import { 
  Globe, 
  Mail
} from 'lucide-react';

const FacebookIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsappIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9" />
    <path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export default function SocialSidebar() {
  const socialLinks = [
    { id: 'linkedin', icon: LinkedinIcon, url: 'https://www.linkedin.com/company/dmxtechservices/posts/?feedView=all', label: 'LinkedIn', colorClass: 'text-[#0077b5] hover:bg-[#0077b5] hover:border-[#0077b5]' },
    { id: 'facebook', icon: FacebookIcon, url: 'https://www.facebook.com/profile.php?id=61573804807368', label: 'Facebook', colorClass: 'text-[#1877f2] hover:bg-[#1877f2] hover:border-[#1877f2]' },
    { id: 'instagram', icon: InstagramIcon, url: 'https://www.instagram.com/dmxtechservices', label: 'Instagram', colorClass: 'text-[#E4405F] hover:bg-[#E4405F] hover:border-[#E4405F]' },
    { id: 'website', icon: Globe, url: 'https://www.dmxtechservices.com', label: 'Website', colorClass: 'text-[#0B1F3A] hover:bg-[#0B1F3A] hover:border-[#0B1F3A]' },
    { id: 'email', icon: Mail, url: 'mailto:info@dmxtechservices.com', label: 'Email', colorClass: 'text-[#EA4335] hover:bg-[#EA4335] hover:border-[#EA4335]' },
    { id: 'whatsapp', icon: WhatsappIcon, url: 'https://wa.me/919247090111', label: 'WhatsApp', colorClass: 'text-[#25D366] hover:bg-[#25D366] hover:border-[#25D366]' },
  ];

  return (
    <div 
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-3 bg-slate-100 p-2.5 rounded-l-xl shadow-lg border border-slate-200 border-r-0"
      aria-label="Social Media Links"
    >
      {socialLinks.map((link) => {
        const Icon = link.icon;
        const isExternal = link.url.startsWith('http');
        
        return (
          <a
            key={link.id}
            href={link.url}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            title={link.label}
            className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm border border-slate-200 hover:text-white transition-all duration-300 group ${link.colorClass}`}
          >
            <Icon 
              strokeWidth={2}
              className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
            />
          </a>
        );
      })}
    </div>
  );
}