import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Code2, Database, TrendingUp, Terminal, CheckCircle2, Award, Briefcase, MessageCircle, Twitter, Instagram, Ghost, ExternalLink } from 'lucide-react';
import { BIO_LINES, SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenProfilePhoto?: () => void;
}

export default function AboutSection({ onOpenProfilePhoto }: AboutSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'Terminal':
      default:
        return <Terminal className="w-5 h-5 text-teal-400" />;
    }
  };

  const displayedCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.id === selectedCategory);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-800/80">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-800/40">
          <User className="w-3.5 h-3.5" />
          <span>Profile &amp; Technical Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About Me &amp; Skills
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
          A unique synergy of technical full-stack engineering and deep financial/data acumen.
        </p>
      </div>

      {/* 4-Line Engaging Professional Bio Card with Portrait */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 shadow-xl"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-800/80">
          <div className="flex items-center gap-4">
            <button
              type="button"
              id="about-profile-photo-btn"
              onClick={onOpenProfilePhoto}
              className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-emerald-500/60 hover:border-emerald-400 hover:ring-2 hover:ring-emerald-500/40 shadow-lg shadow-emerald-500/10 shrink-0 bg-neutral-950 transition-all cursor-pointer group"
              title="Click to view full photo"
            >
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
              <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-neutral-900"></span>
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60 text-[10px] font-mono font-bold">
                  VERIFIED
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-mono mt-0.5">
                Full-Stack Engineer • Data &amp; Financial Analyst
              </p>
            </div>
          </div>

          {/* Social Quick-Access Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono text-emerald-400 hover:border-emerald-500/50 hover:bg-neutral-800 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={PERSONAL_INFO.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white hover:border-neutral-700 hover:bg-neutral-800 transition-colors"
            >
              <Twitter className="w-3.5 h-3.5" />
              <span>X</span>
            </a>
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono text-pink-400 hover:border-pink-500/50 hover:bg-neutral-800 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a
              href={PERSONAL_INFO.snapchatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono text-yellow-400 hover:border-yellow-500/50 hover:bg-neutral-800 transition-colors"
            >
              <Ghost className="w-3.5 h-3.5" />
              <span>Snapchat</span>
            </a>
          </div>
        </div>

        {/* The 4 Engaging Lines in Structured Visual Callout */}
        <div className="space-y-4">
          {BIO_LINES.map((line, idx) => (
            <div key={idx} className="flex items-start gap-3.5">
              <div className="w-6 h-6 rounded-md bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold text-emerald-400">
                0{idx + 1}
              </div>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                {line}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-8 pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
            <span className="text-[11px] font-mono text-neutral-400 block">Core Discipline</span>
            <span className="text-sm font-bold text-neutral-100">Full-Stack Dev</span>
          </div>
          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
            <span className="text-[11px] font-mono text-neutral-400 block">Analytics Depth</span>
            <span className="text-sm font-bold text-neutral-100">Data &amp; Financial</span>
          </div>
          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
            <span className="text-[11px] font-mono text-neutral-400 block">Code Philosophy</span>
            <span className="text-sm font-bold text-neutral-100">Type-Safe &amp; Scalable</span>
          </div>
          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
            <span className="text-[11px] font-mono text-neutral-400 block">Impact Goal</span>
            <span className="text-sm font-bold text-neutral-100">Measurable ROI</span>
          </div>
        </div>
      </motion.div>

      {/* Visual List of Categorized Skills and Tools */}
      <div>
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Categorized Skills &amp; Tools
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Production-ready tools, frameworks, and quantitative methodologies.
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-neutral-900/80 p-1.5 rounded-xl border border-neutral-800">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-emerald-400 text-neutral-950 font-bold'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all hidden sm:inline-block ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-400 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all hover:shadow-lg"
            >
              {/* Category Card Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 shadow-inner">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {category.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Tags List */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between px-3 py-2 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-colors group"
                  >
                    <span className="text-xs font-medium text-neutral-200 group-hover:text-white transition-colors truncate">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 shrink-0 ml-1.5">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
