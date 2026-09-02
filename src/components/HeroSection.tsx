import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Send, Code, Database, TrendingUp, BarChart3, CheckCircle2, Sparkles, Terminal, Instagram, Twitter, Ghost, MessageCircle, Phone } from 'lucide-react';
import { PERSONAL_INFO, RECRUITER_GLANCE } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onOpenProfilePhoto?: () => void;
}

export default function HeroSection({ onExploreProjects, onContactClick, onOpenProfilePhoto }: HeroSectionProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roleTitles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Subtle Tech Grid & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-emerald-600/10 via-teal-500/10 to-transparent blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2626260a_1px,transparent_1px),linear-gradient(to_bottom,#2626260a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline, Value Proposition & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* User Profile Badge with Passport Photo & Live Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <button
              type="button"
              id="hero-profile-photo-btn"
              onClick={onOpenProfilePhoto}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-emerald-500/70 text-xs font-mono text-neutral-300 shadow-sm transition-all hover:bg-neutral-850 cursor-pointer group"
              title="Click to view full photo"
            >
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-emerald-500/60 shrink-0 group-hover:scale-110 transition-transform">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 font-semibold group-hover:text-emerald-300">{PERSONAL_INFO.name}</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400 group-hover:text-white">View Photo</span>
            </button>

            {/* Quick Social Icon Pills */}
            <div className="flex items-center gap-1.5">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`WhatsApp: ${PERSONAL_INFO.whatsappNumber}`}
                className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/50 hover:bg-neutral-800 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`X: @${PERSONAL_INFO.xUsername}`}
                className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 hover:bg-neutral-800 transition-all"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Instagram: @${PERSONAL_INFO.instagramUsername}`}
                className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-pink-400 hover:text-pink-300 hover:border-pink-500/50 hover:bg-neutral-800 transition-all"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.snapchatUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Snapchat: @${PERSONAL_INFO.snapchatUsername}`}
                className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-yellow-400 hover:text-yellow-300 hover:border-yellow-500/50 hover:bg-neutral-800 transition-all"
              >
                <Ghost className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Name & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Building the <span className="text-emerald-500 underline decoration-2 underline-offset-8">Logic</span> Behind the Business.
            </h1>

            {/* Dynamic Animated Role Title */}
            <div className="h-10 sm:h-12 flex items-center overflow-hidden mb-6">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-400 mr-2.5">Expertise:</span>
              <motion.div
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold font-mono text-emerald-400 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800"
              >
                {currentRoleIndex === 0 && <Code className="w-3.5 h-3.5 text-emerald-500" />}
                {currentRoleIndex === 1 && <Database className="w-3.5 h-3.5 text-emerald-500" />}
                {currentRoleIndex === 2 && <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />}
                {currentRoleIndex === 3 && <BarChart3 className="w-3.5 h-3.5 text-emerald-500" />}
                <span>{PERSONAL_INFO.roleTitles[currentRoleIndex]}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Punchy One-Sentence Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-8"
          >
            {PERSONAL_INFO.valueProposition}
          </motion.p>

          {/* Two Clear Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-view-projects-btn"
              onClick={onExploreProjects}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-500 text-black px-7 py-3 rounded-full font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer text-sm"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              id="hero-contact-me-btn"
              onClick={onContactClick}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 border border-neutral-700 bg-transparent text-white px-7 py-3 rounded-full font-bold hover:bg-neutral-800 hover:border-neutral-600 transition-colors active:scale-95 cursor-pointer text-sm shadow-sm"
            >
              <span>Contact Me</span>
              <Send className="w-4 h-4 text-emerald-500" />
            </button>
          </motion.div>

          {/* 30-Second Recruiter Summary Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-6 border-t border-neutral-800/80 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 font-mono"
          >
            <span className="flex items-center gap-1.5 text-neutral-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Full-Stack Architecture (React/Node/Python)
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Quantitative Financial Modeling & DCF
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Actionable Business Intelligence (SQL/BI)
            </span>
          </motion.div>
        </div>

        {/* Right Column: Visual Value-Glance Interactive Card for 30-Second Evaluation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-neutral-800 p-6 shadow-2xl shadow-black/60 backdrop-blur-xl">
            {/* Window Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-800 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/70 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/70 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block"></span>
                <span className="ml-2 text-neutral-400 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  bashir_profile.ts
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 text-[10px] border border-emerald-800/40 font-semibold">
                30-SEC GLANCE
              </span>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {RECRUITER_GLANCE.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/80 hover:border-emerald-500/40 transition-colors"
                >
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                    {item.label}
                  </span>
                  <div className="text-sm font-bold text-neutral-100 flex items-center gap-1 mb-0.5">
                    {item.value}
                  </div>
                  <span className="text-[11px] text-neutral-400 block leading-tight">
                    {item.subtext}
                  </span>
                </div>
              ))}
            </div>

            {/* Dual Superpower Badge */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-neutral-900 to-teal-950/30 border border-emerald-800/30 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-semibold text-emerald-300 uppercase font-mono tracking-wider">
                  The Dual Advantage
                </h2>
                <p className="text-xs text-neutral-300 mt-0.5 leading-relaxed">
                  Unlike pure developers or pure analysts, Muhammad writes production code that embodies complex financial algorithms and business logic without translation loss.
                </p>
              </div>
            </div>

            {/* Quick Code/Model Snippet Preview */}
            <div className="mt-4 p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 font-mono text-[11px] text-neutral-400 space-y-1">
              <div className="text-neutral-500">// Quantitative Stack Ready</div>
              <div>
                <span className="text-emerald-400">const</span> stack = [<span className="text-sky-300">'React'</span>, <span className="text-sky-300">'TypeScript'</span>, <span className="text-amber-300">'Python'</span>, <span className="text-emerald-300">'SQL'</span>, <span className="text-purple-300">'DCF_Engine'</span>];
              </div>
              <div>
                <span className="text-neutral-400">return</span> <span className="text-emerald-300">optimizeROI</span>(businessLogic, techStack);
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
