import { ArrowUp, Mail, Ghost, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenProfilePhoto?: () => void;
}

export default function Footer({ onOpenProfilePhoto }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Avatar, Name & Tagline */}
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <button
            type="button"
            id="footer-profile-photo-btn"
            onClick={onOpenProfilePhoto}
            className="w-10 h-10 rounded-xl overflow-hidden border border-neutral-800 hover:border-emerald-500/80 shrink-0 cursor-pointer group transition-all"
            title="Click to view full photo"
          >
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
            />
          </button>
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-tight">{PERSONAL_INFO.name}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-emerald-400 font-mono">
                Full-Stack &amp; Analyst
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              WhatsApp: {PERSONAL_INFO.whatsappNumber} • @{PERSONAL_INFO.xUsername}
            </p>
          </div>
        </div>

        {/* Center / Right: Social Links & Scroll to top */}
        <div className="flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-neutral-400 hover:text-emerald-400 bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/40 transition-colors"
            aria-label="WhatsApp"
            title={`WhatsApp: ${PERSONAL_INFO.whatsappNumber}`}
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-neutral-400 hover:text-white bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors"
            aria-label="X (Twitter)"
            title={`X: @${PERSONAL_INFO.xUsername}`}
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-neutral-400 hover:text-pink-400 bg-neutral-900/80 border border-neutral-800 hover:border-pink-500/40 transition-colors"
            aria-label="Instagram"
            title={`Instagram: @${PERSONAL_INFO.instagramUsername}`}
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.snapchatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-neutral-400 hover:text-yellow-400 bg-neutral-900/80 border border-neutral-800 hover:border-yellow-500/40 transition-colors"
            aria-label="Snapchat"
            title={`Snapchat: @${PERSONAL_INFO.snapchatUsername}`}
          >
            <Ghost className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-lg text-neutral-400 hover:text-emerald-400 bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors"
            aria-label="Email"
            title={PERSONAL_INFO.email}
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors ml-2 cursor-pointer"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-400 gap-2">
        <span>© {new Date().getFullYear()} Muhammad Bashir. All rights reserved.</span>
        <span>WhatsApp: {PERSONAL_INFO.whatsappNumber} • IG: @{PERSONAL_INFO.instagramUsername} • SC: @{PERSONAL_INFO.snapchatUsername} • X: @{PERSONAL_INFO.xUsername}</span>
      </div>
    </footer>
  );
}
