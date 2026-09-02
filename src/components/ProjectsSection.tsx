import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, TrendingUp, Sparkles, Activity, Layers, BarChart2, DollarSign, Zap } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full-Stack' | 'Data & BI' | 'Financial Analysis'>('All');

  const filteredProjects = activeFilter === 'All' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-800">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-800/40">
            <Layers className="w-3.5 h-3.5" />
            <span>High-Impact Engineering & Analytics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            Real-world systems engineered for measurable performance, automated operations, and financial intelligence.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 mt-6 md:mt-0 bg-neutral-900/80 p-1.5 rounded-xl border border-neutral-800">
          {(['All', 'Full-Stack', 'Data & BI', 'Financial Analysis'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === filter
                  ? 'bg-emerald-400 text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/60'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 3 Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/30"
            >
              {/* Thumbnail Placeholder with Interactive Rich Tech Mockup */}
              <div className="relative h-56 bg-neutral-950 overflow-hidden border-b border-neutral-800 flex flex-col justify-between p-4 group-hover:bg-neutral-950/80 transition-colors">
                {/* Top bar with category & status */}
                <div className="flex items-center justify-between z-10">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md border ${
                    project.category === 'Full-Stack'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/50'
                      : project.category === 'Data & BI'
                      ? 'bg-sky-950/80 text-sky-300 border-sky-800/50'
                      : 'bg-amber-950/80 text-amber-300 border-amber-800/50'
                  }`}>
                    {project.category}
                  </span>

                  <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-400 bg-neutral-900/90 px-2 py-0.5 rounded border border-neutral-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Verified Metric
                  </span>
                </div>

                {/* Visual Thumbnail Content according to project type */}
                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.thumbnailType === 'fintech' && (
                    <div className="w-full space-y-2 pt-6">
                      <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                        <span>Treasury Pool: 12 Currencies</span>
                        <span className="text-emerald-400 font-bold">+42% speed</span>
                      </div>
                      <div className="h-14 w-full bg-neutral-900/90 rounded-lg p-2 border border-neutral-800/90 flex items-end gap-1.5">
                        {[40, 65, 45, 80, 55, 90, 75, 100, 85, 95].map((h, i) => (
                          <div
                            key={i}
                            style={{ height: `${h}%` }}
                            className="flex-1 bg-gradient-to-t from-emerald-600/40 to-emerald-400 rounded-t-sm group-hover:brightness-110 transition-all"
                          ></div>
                        ))}
                      </div>
                      <div className="flex justify-between text-[9px] font-mono text-neutral-400">
                        <span>Automated Ledger: $2.4M/mo</span>
                        <span className="text-emerald-400">&lt;95ms latency</span>
                      </div>
                    </div>
                  )}

                  {project.thumbnailType === 'bi-dashboard' && (
                    <div className="w-full space-y-2 pt-6">
                      <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                        <span>Demand Forecast Model</span>
                        <span className="text-sky-400 font-bold">94.2% Accuracy</span>
                      </div>
                      <div className="h-14 w-full bg-neutral-900/90 rounded-lg p-2.5 border border-neutral-800/90 relative flex items-center">
                        <svg className="w-full h-full" viewBox="0 0 100 35" preserveAspectRatio="none">
                          <path
                            d="M 0,25 Q 25,5 50,18 T 100,8"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="2.5"
                            strokeDasharray="0"
                          />
                          <path
                            d="M 50,18 Q 75,30 100,12"
                            fill="none"
                            stroke="#94a3b8"
                            strokeWidth="1.5"
                            strokeDasharray="2,2"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-between text-[9px] font-mono text-neutral-400">
                        <span>ETL Automated: 280+ hrs/mo</span>
                        <span className="text-sky-400">Prophet / SARIMAX</span>
                      </div>
                    </div>
                  )}

                  {project.thumbnailType === 'valuation-engine' && (
                    <div className="w-full space-y-2 pt-6">
                      <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                        <span>Monte Carlo Simulation</span>
                        <span className="text-amber-400 font-bold">&lt;800ms Runtime</span>
                      </div>
                      <div className="h-14 w-full bg-neutral-900/90 rounded-lg p-2 border border-neutral-800/90 flex items-center justify-between gap-1">
                        <div className="w-1/2 h-full flex flex-col justify-center">
                          <span className="text-[9px] text-neutral-400 font-mono">10,000 Iterations</span>
                          <span className="text-xs font-bold text-amber-300 font-mono">DCF &amp; VaR Matrix</span>
                        </div>
                        <div className="w-1/2 h-full bg-amber-950/30 rounded p-1 flex items-center justify-center">
                          <span className="text-[10px] text-amber-400 font-mono text-center font-semibold leading-tight">
                            WACC &amp; Gordon Sensitivity
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between text-[9px] font-mono text-neutral-400">
                        <span>Fidelity: 99.9%</span>
                        <span className="text-amber-400">Multi-Asset Suite</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Quick-View action */}
                <div className="z-10 flex justify-end">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-[11px] font-semibold text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 px-2.5 py-1 rounded-md border border-neutral-700/80 transition-all flex items-center gap-1 shadow-sm cursor-pointer"
                  >
                    <span>Inspect Metrics</span>
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-neutral-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Highlight Metric Banner (Recruiter Scannability) */}
                  <div className="mb-4 p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-mono font-bold text-emerald-300">
                      {project.keyMetric}
                    </span>
                  </div>

                  {/* Description focused on results & metrics */}
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                {/* Bottom: Tech Stack Tags & Links */}
                <div className="space-y-4 pt-4 border-t border-neutral-800/80">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-neutral-800/90 border border-neutral-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions: Live Link & Details */}
                  <div className="flex items-center justify-between pt-1">
                    <a
                      id={`project-live-link-${project.id}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-emerald-400 transition-colors group/link"
                    >
                      <span className="tracking-wide">CASE STUDY</span>
                      <span className="text-emerald-400 transition-transform group-hover/link:translate-x-1">→</span>
                    </a>

                    <div className="flex items-center gap-2">
                      <a
                        id={`project-github-link-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition-colors"
                        title="View Source Repository"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-2.5 py-1.5 rounded-lg text-neutral-300 hover:text-emerald-400 hover:bg-neutral-800 border border-neutral-800 transition-colors text-xs font-mono"
                        title="Deep-dive Architecture"
                      >
                        Metrics
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
