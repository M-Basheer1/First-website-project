import { motion } from 'motion/react';
import { History, Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Award, Sparkles } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/portfolioData';

export default function TimelineSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-800/80">
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-800/40">
          <History className="w-3.5 h-3.5" />
          <span>Track Record &amp; Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Experience &amp; Timeline
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
          Progressive leadership in engineering scalable full-stack applications and executing financial/data intelligence.
        </p>
      </div>

      {/* Compact Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 ml-2 sm:ml-6 border-l-2 border-neutral-800 space-y-12">
        {TIMELINE_MILESTONES.map((item, index) => {
          const isWork = item.type === 'experience';

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-neutral-950 border-2 border-emerald-500 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                {isWork ? (
                  <Briefcase className="w-3 h-3 text-emerald-400" />
                ) : (
                  <GraduationCap className="w-3 h-3 text-emerald-400" />
                )}
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all duration-200 hover:shadow-xl">
                {/* Header: Period & Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-emerald-400 mt-0.5 flex items-center gap-2">
                      <span>{item.organization}</span>
                      <span className="text-neutral-600">•</span>
                      <span className="text-neutral-400 text-xs font-normal flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 self-start sm:self-auto shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Impact Metrics Banner if present */}
                {item.impactMetrics && (
                  <div className="mb-4 p-2.5 rounded-xl bg-neutral-950/80 border border-emerald-800/30 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-xs font-mono font-medium text-emerald-300">
                      Key Impact: {item.impactMetrics}
                    </span>
                  </div>
                )}

                {/* Bullet Achievements */}
                <div className="space-y-2 mb-5">
                  {item.achievements.map((achievement, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-normal">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Skills used in this milestone */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/80">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-neutral-400 bg-neutral-950 border border-neutral-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
