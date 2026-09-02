import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, FileText, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenProfilePhoto?: () => void;
}

export default function Navbar({ onOpenResume, onOpenProfilePhoto }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'projects', 'about', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'About & Skills', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-neutral-800 py-3.5 shadow-lg shadow-black/50'
          : 'bg-[#0A0A0A]/60 backdrop-blur-sm border-b border-neutral-800/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            id="nav-profile-photo-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpenProfilePhoto?.();
            }}
            className="relative w-10 h-10 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-emerald-500/80 hover:ring-2 hover:ring-emerald-500/30 shadow-sm transition-all flex items-center justify-center cursor-pointer group"
            title="Click to view profile picture"
          >
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-emerald-400" />
            </div>
          </button>
          <a
            id="nav-brand-logo"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex flex-col cursor-pointer"
          >
            <span className="text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              MUHAMMAD BASHIR
            </span>
            <span className="text-[11px] text-emerald-500 font-mono tracking-widest uppercase flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Full-Stack Dev • Data • Finance
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center gap-6 text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`transition-all duration-200 py-1 cursor-pointer ${
                  isActive
                    ? 'text-white border-b-2 border-emerald-500 font-bold'
                    : 'hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-full transition-all hover:bg-neutral-800 active:scale-95 cursor-pointer"
            title="View summary resume"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-500" />
            <span>Resume</span>
          </button>

          <a
            id="nav-contact-cta"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-mono uppercase tracking-wider font-bold text-black bg-emerald-500 hover:bg-emerald-400 rounded-full transition-all shadow-sm shadow-emerald-500/20 hover:shadow-emerald-500/40 active:scale-95"
          >
            <span>Get In Touch</span>
            <Send className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-resume-btn"
            onClick={onOpenResume}
            className="px-3 py-1.5 text-xs font-mono font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-full flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-500" />
            <span>CV</span>
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-neutral-100 bg-neutral-900 border border-neutral-800 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-lg mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Available for Full-Stack & Analyst roles</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-neutral-800/80 text-emerald-400 font-semibold'
                      : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </a>
              ))}
              <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
                <a
                  id="mobile-contact-cta"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="w-full text-center py-2.5 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm"
                >
                  Contact Muhammad Bashir
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
