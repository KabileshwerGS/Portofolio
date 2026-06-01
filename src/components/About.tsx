import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Trophy, Plane, Eye, Goal, HeartHandshake, Award, Flame, UserCheck, Compass } from 'lucide-react';
import { personalInfo } from '../data';

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  const nccTraits = [
    { 
      label: 'Squadron Discipline', 
      desc: 'Developed absolute punctuality, structured deportment, and deep respect for guidelines during demanding drills.', 
      icon: ShieldCheck,
      color: 'text-emerald-400'
    },
    { 
      label: 'Drill Leadership', 
      desc: 'Organized internal field campaigns and synchronized activities representing the Air Wing squadron.', 
      icon: Trophy,
      color: 'text-amber-400'
    },
    { 
      label: 'High-Stress Teamwork', 
      desc: 'Collaborated during simulated emergency events and tactical situations to solve collective problems.', 
      icon: HeartHandshake,
      color: 'text-cyan-400'
    },
    { 
      label: 'Balanced Demands', 
      desc: 'Synchronized rigorous physical wing regimes alongside core computer software academic objectives.', 
      icon: Calendar,
      color: 'text-indigo-400'
    },
  ];

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-800'
      }`}
    >
      {/* Structural background details */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-30">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-500/10 filter blur-3xl" />
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-teal-500/10 filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest text-cyan-500 font-mono font-bold block mb-2">
            01 . KABILESHWER SUMMARY NODE
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Leadership Mindset & Values
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Block: Professional Profile narrative */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between h-full relative overflow-hidden group ${
                isDark ? 'bg-slate-950 border-slate-850' : 'bg-white border-slate-200/80 shadow-md shadow-slate-100'
              }`}
            >
              <div>
                <div className="flex items-center space-x-3 mb-6 select-none">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-455 border border-cyan-500/10">
                    <Compass className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className={`font-display font-black text-xl ${isDark ? 'text-white' : 'text-slate-850'}`}>
                    Professional Archetype
                  </h3>
                </div>

                {/* Interactive Highlight Bar */}
                <div className={`p-4 rounded-xl border-l-4 border-cyan-500 mb-6 bg-slate-100/50 dark:bg-slate-900/40 text-xs sm:text-sm font-semibold tracking-wide italic leading-relaxed ${
                  isDark ? 'text-slate-200 border-slate-800' : 'text-slate-700 border-slate-200'
                }`}>
                  "Synthesizing high-integrity software engineering systems with structured operations protocols mastered in cadet training squadrons."
                </div>

                <div className={`leading-relaxed text-xs sm:text-sm space-y-4 font-normal text-justify ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  <p>
                    Highly motivated Computer Science and Engineering student with a strong interest in designing scalable, efficient, and user-focused web applications. Passionate about transforming ideas into practical digital solutions through modern full-stack development technologies and structured problem-solving approaches.
                  </p>
                  <p>
                    Experienced in developing responsive frontend interfaces, building backend application logic, managing database systems, and creating clean development workflows using technologies such as React.js, Node.js, Express.js, MongoDB, Python, HTML, and CSS. Focused on writing maintainable code, improving application performance, and continuously learning modern software engineering practices.
                  </p>
                  <p>
                    Driven by curiosity to explore real-world technical challenges and develop reliable software solutions that combine functionality, performance, and clean user experience.
                  </p>
                  <p>
                    Alongside technical development, active participation in NCC Air Wing has strengthened discipline, leadership, teamwork, communication skills, time management, and the ability to perform effectively in high-responsibility environments while maintaining consistency and professionalism.
                  </p>
                </div>
              </div>

              {/* Bio Stats Table */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-800/10 dark:border-slate-850 select-none">
                <div>
                  <span className="block text-[9.5px] font-mono text-cyan-500 uppercase tracking-widest font-bold">
                    Primary University
                  </span>
                  <span className={`block text-xs font-bold mt-1.5 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    K.S. Rangasamy College of Technology
                  </span>
                </div>
                <div>
                  <span className="block text-[9.5px] font-mono text-cyan-500 uppercase tracking-widest font-bold">
                    Academic Focus
                  </span>
                  <span className={`block text-xs font-bold mt-1.5 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    Full-Stack Engineering & System Safety
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Block: NCC Air Wing Honored Squadron Card */}
          <div id="ncc" className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden p-6 sm:p-8 h-full border border-sky-500/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white shadow-xl shadow-cyan-950/20 flex flex-col justify-between"
            >
              {/* Massive background plane outline for high design premium finish */}
              <div className="absolute top-6 right-6 text-cyan-500/5 select-none pointer-events-none transform rotate-45 scale-125">
                <Plane size={240} strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6 select-none">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Award className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-amber-400 uppercase tracking-tight">
                      {personalInfo.ncc.title}
                    </h3>
                    <span className="block text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
                      {personalInfo.ncc.wing}
                    </span>
                  </div>
                </div>

                <p className="leading-relaxed text-xs sm:text-sm text-slate-300 mb-6 text-justify">
                  {personalInfo.ncc.description}
                </p>

                {/* Squadron Trait Cards */}
                <div className="space-y-4">
                  {nccTraits.map((trait) => {
                    const Icon = trait.icon;
                    return (
                      <div key={trait.label} className="flex items-start space-x-3 group">
                        <div className={`p-1.5 rounded-lg bg-cyan-950 border border-cyan-800/10 ${trait.color} transition-colors mt-0.5 shrink-0`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-slate-100 group-hover:text-cyan-350 transition-colors">
                            {trait.label}
                          </span>
                          <span className="block text-[11px] text-slate-400 mt-0.5 leading-snug">
                            {trait.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="relative z-10 mt-8 pt-4 border-t border-slate-800/80 text-[9.5px] font-mono text-slate-400 flex items-center justify-between select-none">
                <span>FLIGHT CADET LOG STATUS: VERIFIED</span>
                <span>WING: AIR</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
