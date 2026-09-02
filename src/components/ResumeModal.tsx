import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, CheckCircle2, FileText, Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, BIO_LINES, SKILL_CATEGORIES, TIMELINE_MILESTONES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProfilePhoto?: () => void;
}

export default function ResumeModal({ isOpen, onClose, onOpenProfilePhoto }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-neutral-800 bg-neutral-950">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Executive Resume — {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-neutral-400">
                  Full-Stack Developer • Data Analyst • Financial Analyst
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs font-semibold text-neutral-300 border border-neutral-700 transition-colors"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5 text-emerald-400" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Scannable Resume Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto bg-neutral-950/60 font-sans text-neutral-200">
            {/* Header info */}
            <div className="border-b border-neutral-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  id="resume-profile-photo-btn"
                  onClick={onOpenProfilePhoto}
                  className="relative w-14 h-14 rounded-xl overflow-hidden border border-emerald-500/60 hover:border-emerald-400 hover:ring-2 hover:ring-emerald-500/40 shrink-0 bg-neutral-900 cursor-pointer group transition-all"
                  title="Click to view full photo"
                >
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-white">{PERSONAL_INFO.name}</h1>
                  <p className="text-sm font-semibold text-emerald-400 mt-0.5">
                    Full-Stack Developer | Data, Business &amp; Financial Analyst
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-400 mt-1.5 font-mono">
                    <span>Email: {PERSONAL_INFO.email}</span>
                    <span>•</span>
                    <span>WhatsApp: {PERSONAL_INFO.whatsappNumber}</span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-neutral-400 flex flex-wrap sm:flex-col items-start sm:items-end gap-1">
                <span>X: @{PERSONAL_INFO.xUsername}</span>
                <span>IG: @{PERSONAL_INFO.instagramUsername}</span>
                <span>SC: @{PERSONAL_INFO.snapchatUsername}</span>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Executive Profile &amp; Value Proposition
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-neutral-900/60 p-4 rounded-xl border border-neutral-800">
                {BIO_LINES.join(' ')}
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3">
                Core Competencies &amp; Technical Stack
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="p-3 rounded-xl bg-neutral-900/70 border border-neutral-800">
                    <span className="font-bold text-white block mb-1.5">{cat.title}</span>
                    <p className="text-neutral-400 leading-relaxed">
                      {cat.skills.map(s => s.name).join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience / Milestones */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3">
                Experience &amp; Track Record
              </h4>
              <div className="space-y-4">
                {TIMELINE_MILESTONES.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-white text-sm">{item.role}</span>
                        <span className="text-emerald-400 font-medium block">{item.organization}</span>
                      </div>
                      <span className="font-mono text-neutral-400">{item.period}</span>
                    </div>
                    <p className="text-xs text-neutral-300">{item.summary}</p>
                    <ul className="space-y-1 pt-1">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx} className="text-xs text-neutral-400 flex items-start gap-1.5">
                          <span className="text-emerald-400">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-400">
              Muhammad Bashir • Ready for Interviews &amp; Consultations
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold text-xs transition-colors"
            >
              Done Viewing
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
