import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Server, Database, Hammer, CheckCircle, ShieldCheck, Cpu, Code2, Sparkles, Terminal, GitBranch, Github, Code, Box, Cloud, Monitor } from 'lucide-react';
import { skillsData } from '../data';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Icon mapping helper
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Backend Development': return <Server className="h-4 w-4" />;
      case 'Databases & Programming': return <Database className="h-4 w-4" />;
      case 'Tools & DevOps': return <Hammer className="h-4 w-4" />;
      default: return <Code2 className="h-4 w-4" />;
    }
  };

  const getSkillSubtitle = (name: string) => {
    switch (name) {
      case 'React.js': return 'Library & SPA Client';
      case 'TypeScript': return 'Type Safety Layer';
      case 'HTML5': return 'Semantic Structure';
      case 'CSS3': return 'Cascade Stylesheets';
      case 'Tailwind CSS': return 'Utility-First Styles';
      case 'Responsive Web Design': return 'Device Compatibility';
      case 'C': return 'Procedural Core Language';
      case 'C++': return 'Object-Oriented Design';
      case 'Node.js': return 'JS Server Runtime';
      case 'Express.js': return 'Framework Routing';
      case 'REST API Development': return 'HTTP Request Protocol';
      case 'MongoDB': return 'NoSQL Document Store';
      case 'MySQL': return 'Relational Management';
      case 'Python': return 'General Scripting';
      case 'Problem Solving': return 'Algorithmic Mindset';
      case 'Git': return 'Local Version Systems';
      case 'GitHub': return 'Remote Cloud Repositories';
      case 'VS Code': return 'Integrated Environment';
      case 'AntiGravity': return 'AI Code Agent Core';
      case 'Vercel': return 'CD/CI Client Deployments';
      case 'Render': return 'Full-Stack Hosting Node';
      default: return 'Core Engineering Unit';
    }
  };

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'React.js': return <Code2 className="h-4 w-4 text-cyan-400 group-hover:rotate-45 transition-transform" />;
      case 'TypeScript': return <Code className="h-4 w-4 text-sky-400" />;
      case 'HTML5': return <Monitor className="h-4 w-4 text-orange-400" />;
      case 'CSS3': return <Layout className="h-4 w-4 text-indigo-400" />;
      case 'Tailwind CSS': return <Sparkles className="h-4 w-4 text-teal-400" />;
      case 'Responsive Web Design': return <Layout className="h-4 w-4 text-emerald-400" />;
      case 'C': return <Code className="h-4 w-4 text-blue-400" />;
      case 'C++': return <Code2 className="h-4 w-4 text-emerald-405 text-emerald-400" />;
      case 'Node.js': return <Server className="h-4 w-4 text-green-400" />;
      case 'Express.js': return <Terminal className="h-4 w-4 text-amber-400" />;
      case 'REST API Development': return <Cpu className="h-4 w-4 text-cyan-405" />;
      case 'MongoDB': return <Database className="h-4 w-4 text-emerald-400" />;
      case 'MySQL': return <Database className="h-4 w-4 text-blue-400" />;
      case 'Python': return <Code className="h-4 w-4 text-teal-300" />;
      case 'Problem Solving': return <Cpu className="h-4 w-4 text-pink-400" />;
      case 'Git': return <GitBranch className="h-4 w-4 text-amber-500" />;
      case 'GitHub': return <Github className="h-4 w-4 text-slate-300" />;
      case 'VS Code': return <Code className="h-4 w-4 text-sky-400" />;
      case 'AntiGravity': return <Sparkles className="h-4 w-4 text-fuchsia-400 animate-pulse" />;
      case 'Vercel': return <Cloud className="h-4 w-4 text-indigo-400" />;
      case 'Render': return <Cloud className="h-4 w-4 text-rose-400" />;
      default: return <CheckCircle className="h-4 w-4 text-cyan-400" />;
    }
  };

  return (
    <section
      id="skills"
      className={`py-24 relative overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-800'
      }`}
    >
      {/* Visual circular gradient details */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full filter blur-3xl" />
        <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-teal-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-widest text-cyan-500 font-mono font-bold block mb-2">
            03 . SYSTEM COMPETENCY RADAR
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Technical Expertise Matrix
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto select-none">
          {skillsData.map((category, index) => (
            <button
              id={`skill-tab-${index}`}
              key={category.title}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2.5 px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-extrabold transition-all duration-200 cursor-pointer border ${
                activeTab === index
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white border-transparent shadow-lg shadow-cyan-500/15'
                  : isDark
                    ? 'bg-slate-950 border-slate-850 text-slate-450 hover:text-white hover:bg-slate-900'
                    : 'bg-white border-slate-200 text-slate-655 hover:text-slate-950 shadow-sm'
              }`}
            >
              {getCategoryIcon(category.title)}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Skill Level Progress Cluster */}
        <div className="max-w-5xl mx-auto text-left">
          <AnimatePresence mode="wait">
            <motion.div
              id={`skills-grid-${activeTab}`}
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {skillsData[activeTab].skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-4 rounded-xl border flex items-start space-x-3.5 group hover:border-cyan-500/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden ${
                    isDark 
                      ? 'bg-slate-950 border-slate-850 text-slate-300' 
                      : 'bg-white border-slate-200/80 text-slate-705 shadow-sm'
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 flex items-center justify-center border ${
                    isDark 
                      ? 'bg-slate-900 border-slate-800' 
                      : 'bg-slate-50 border-slate-200/60'
                  }`}>
                    {getSkillIcon(skill.name)}
                  </div>
                  <div>
                    <h3 className={`text-xs sm:text-sm font-bold group-hover:text-cyan-520 transition-colors leading-snug ${
                      isDark ? 'text-white' : 'text-slate-850'
                    }`}>
                      {skill.name}
                    </h3>
                    <p className={`text-[10px] sm:text-[11px] leading-normal mt-0.5 ${
                      isDark ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {getSkillSubtitle(skill.name)}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Disclaimer Node information */}
        <div className="text-center mt-12 max-w-2xl mx-auto select-none">
          <p className="text-xs font-mono text-slate-500 italic leading-relaxed">
            * Capability matrix based on successfully completed coursework at K.S. Rangasamy College, GitHub code repositories, and individual project compilations.
          </p>
        </div>
      </div>
    </section>
  );
}
