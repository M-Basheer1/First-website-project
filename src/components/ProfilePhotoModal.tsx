import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Download, ExternalLink, ShieldCheck, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfilePhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfilePhotoModal({ isOpen, onClose }: ProfilePhotoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="profile-photo-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl shadow-black/80 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/60">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-[11px] font-mono text-emerald-400">
                    Official Profile Photo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.avatar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition-colors"
                  title="Open full resolution in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  id="close-profile-modal-btn"
                  onClick={onClose}
                  className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition-colors cursor-pointer"
                  aria-label="Close photo preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Photo Display Container */}
            <div className="relative p-6 sm:p-8 flex flex-col items-center justify-center bg-radial from-neutral-900 to-neutral-950">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-2xl shadow-emerald-950/30 group">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <span className="text-xs font-mono font-medium text-white flex items-center gap-1.5 bg-neutral-900/80 px-3 py-1 rounded-full border border-neutral-700 backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
                    Passport View
                  </span>
                </div>
              </div>

              {/* Verified Identity Badge */}
              <div className="mt-5 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Portfolio Identity</span>
                <span className="text-neutral-500">•</span>
                <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.name}</span>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-6 py-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between gap-3">
              <span className="text-xs font-mono text-neutral-400">
                Click background or ESC to close
              </span>
              <a
                href={PERSONAL_INFO.avatar}
                target="_blank"
                download="Muhammad_Bashir_Passport.png"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs transition-colors active:scale-95 shadow-sm shadow-emerald-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Full Resolution</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
