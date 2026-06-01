import React from 'react';
import { motion } from 'motion/react';
import { Calendar, GraduationCap, Award, BookOpen, Star, Building2, School } from 'lucide-react';
import { educationData } from '../data';

interface EducationProps {
  isDark: boolean;
}

export default function Education({ isDark }: EducationProps) {
  return (
    <section
      id="education"
      className={`py-24 relative overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* Decorative Grid Details */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest text-cyan-500 font-mono font-bold block mb-2">
            02 . EDUCATIONAL DATABASE INDEX
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Academic Milestones & Metrics
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical dashed indicator line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-dashed bg-gradient-to-b from-cyan-500 to-teal-400 opacity-20" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              const InstitutionIcon = index === 0 ? Building2 : School;

              return (
                <div
                  key={item.institution}
                  className={`flex flex-col md:flex-row items-stretch md:justify-between relative ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card Block */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-full md:w-[45%] p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative group z-10 ${
                      isDark
                        ? 'bg-slate-900 border-slate-850 hover:border-cyan-500/35 hover:shadow-2xl hover:shadow-slate-950/40'
                        : 'bg-white border-slate-200 hover:border-cyan-500/35 hover:shadow-xl hover:shadow-slate-100 shadow-sm'
                    }`}
                  >
                    {/* Visual left accent bar inside card */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-500 to-teal-500 rounded-l-2xl" />

                    {/* Header: Period & Score block */}
                    <div className="flex items-center justify-between mb-5 select-none pl-1">
                      <div className={`p-2 rounded-lg text-[10px] font-mono font-bold flex items-center space-x-1 border ${
                        isDark 
                          ? 'bg-cyan-950/20 border-cyan-800/10 text-cyan-400' 
                          : 'bg-cyan-50 border-cyan-100 text-cyan-705'
                      }`}>
                        <Calendar className="h-3 w-3" />
                        <span>{item.period}</span>
                      </div>
                      
                      <div className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold border flex items-center space-x-1.5 ${
                        isDark 
                          ? 'bg-emerald-950/20 border-emerald-800/20 text-emerald-450' 
                          : 'bg-emerald-50 border-emerald-100 text-emerald-650'
                      }`}>
                        <Star className="h-3 w-3 animate-spin" style={{ animationDuration: '6s' }} />
                        <span>{item.score}</span>
                      </div>
                    </div>

                    {/* Degree Title with custom hover */}
                    <h3 className={`font-display font-black text-lg mb-1 leading-snug group-hover:text-cyan-500 transition-colors pl-1 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <p className="cyan-500 text-xs font-semibold uppercase tracking-wider mb-5 flex items-center gap-1.5 pl-1 font-mono text-cyan-500">
                      <InstitutionIcon className="h-3.5 w-3.5 shrink-0" />
                      {item.institution}
                    </p>

                    {/* Bullet description metrics */}
                    <ul className="space-y-3.5 mb-6 pl-1 text-[11px] sm:text-xs">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2.5 flex-shrink-0 select-none" />
                          <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Activities category keywords list */}
                    {item.activities && item.activities.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-4.5 border-t border-slate-800/10 dark:border-slate-850 pl-1 select-none">
                        {item.activities.map((act) => (
                          <span
                            key={act}
                            className={`px-2 py-0.5 rounded text-[9.5px] font-mono tracking-tight font-medium ${
                              isDark ? 'bg-slate-950 text-slate-400 border border-slate-850' : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }`}
                          >
                            #{act}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  {/* Circular visual Timeline Node Point */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-[3.5px] border-cyan-400 items-center justify-center z-20 text-white shadow-lg shadow-cyan-500/20 active:scale-110 transition-transform">
                    <GraduationCap className="h-4.5 w-4.5 text-cyan-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
