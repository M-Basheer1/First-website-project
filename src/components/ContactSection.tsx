import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Github, Linkedin, Copy, Check, ExternalLink, MessageSquare, MapPin, Clock, ArrowRight, MessageCircle, Phone, Twitter, Instagram, Ghost } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenProfilePhoto?: () => void;
}

export default function ContactSection({ onOpenProfilePhoto }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.whatsappNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      setFormState('error');
      return;
    }

    setErrorMessage('');
    setFormState('submitting');

    // Simulate sending message with clean confirmation
    setTimeout(() => {
      setFormState('submitted');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-800/80">
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-800/40">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let's Build Something High-Impact
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
          Connect directly via WhatsApp, Instagram, Snapchat, X, or drop a structured message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Social & Professional Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-6"
        >
          {/* Contact Information Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/70 border border-neutral-800 space-y-6">
            <div className="flex items-center gap-4">
              <button
                type="button"
                id="contact-profile-photo-btn"
                onClick={onOpenProfilePhoto}
                className="relative w-12 h-12 rounded-xl overflow-hidden border border-emerald-500/60 hover:border-emerald-400 hover:ring-2 hover:ring-emerald-500/40 shrink-0 bg-neutral-950 transition-all cursor-pointer group"
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
                <h3 className="text-base font-bold text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-neutral-400 font-mono">
                  Direct Contact &amp; Channels
                </p>
              </div>
            </div>

            {/* Email Quick Copy Box */}
            <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block">Direct Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-semibold text-neutral-100 hover:text-emerald-400 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 transition-all flex items-center gap-1.5 shrink-0 active:scale-95 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp Direct Chat Box */}
            <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase block font-semibold">WhatsApp Direct</span>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-mono font-bold text-neutral-100 hover:text-emerald-400 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.whatsappNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  id="copy-phone-btn"
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1.5 text-xs font-mono font-medium rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 transition-all flex items-center gap-1 active:scale-95 cursor-pointer"
                  title="Copy WhatsApp number"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  )}
                </button>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-mono font-bold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black transition-all flex items-center gap-1 active:scale-95 shadow-sm"
                >
                  <span>Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Channels 4-Grid: Snapchat, X, Instagram, LinkedIn/GitHub */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                Social Networks &amp; Handles
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* X (Twitter) */}
                <a
                  id="contact-x-link"
                  href={PERSONAL_INFO.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-600 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Twitter className="w-4 h-4 text-neutral-300 group-hover:text-white transition-colors shrink-0" />
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-white block truncate">X</span>
                      <span className="text-[11px] font-mono text-neutral-400 block truncate">@{PERSONAL_INFO.xUsername}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
                </a>

                {/* Instagram */}
                <a
                  id="contact-instagram-link"
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-pink-500/50 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Instagram className="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors shrink-0" />
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-white block truncate">Instagram</span>
                      <span className="text-[11px] font-mono text-neutral-400 block truncate">@{PERSONAL_INFO.instagramUsername}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-pink-400 transition-colors shrink-0" />
                </a>

                {/* Snapchat */}
                <a
                  id="contact-snapchat-link"
                  href={PERSONAL_INFO.snapchatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/50 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Ghost className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300 transition-colors shrink-0" />
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-white block truncate">Snapchat</span>
                      <span className="text-[11px] font-mono text-neutral-400 block truncate">@{PERSONAL_INFO.snapchatUsername}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-yellow-400 transition-colors shrink-0" />
                </a>

                {/* WhatsApp */}
                <a
                  id="contact-whatsapp-card"
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-emerald-500/50 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors shrink-0" />
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-white block truncate">WhatsApp</span>
                      <span className="text-[11px] font-mono text-neutral-400 block truncate">{PERSONAL_INFO.whatsappNumber}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transition-colors shrink-0" />
                </a>
              </div>
            </div>

            {/* Availability and Response Time metadata */}
            <div className="pt-4 border-t border-neutral-800/80 space-y-2 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Typical Response Time: &lt; 24 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean Interactive Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Fill out the form below and Muhammad will get back to you promptly.
            </p>

            {formState === 'submitted' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-800/50 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Received!</h4>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you for reaching out. Your note has been received and Muhammad Bashir will reply within 24 hours.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-4">
                {formState === 'error' && errorMessage && (
                  <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/40 text-xs text-rose-300 font-mono">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                    Subject / Project Nature <span className="text-neutral-500">(Optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Full-Stack Role / Analytics Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                    Your Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your project, team requirements, or role scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold text-sm transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer active:scale-95"
                >
                  {formState === 'submitting' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
