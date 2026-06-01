import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Laptop, Layers, Github, ExternalLink, Filter, FolderGit, ArrowLeft, ArrowRight, X, Sparkles, Terminal, Code } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  isDark: boolean;
}

export default function Projects({ isDark }: ProjectsProps) {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Frontend' | 'Database'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'All') return true;
    return proj.category === filter;
  });

  const categories: ('All' | 'Full-Stack' | 'Frontend' | 'Database')[] = [
    'All',
    'Full-Stack',
    'Frontend',
    'Database',
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full-Stack': return <Layers className="h-3.5 w-3.5" />;
      case 'Frontend': return <Laptop className="h-3.5 w-3.5 animate-pulse" />;
      case 'Database': return <Database className="h-3.5 w-3.5" />;
      default: return <FolderGit className="h-3.5 w-3.5" />;
    }
  };

  return (
    <section
      id="projects"
      className={`py-24 relative overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* Visual background details */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <div className="absolute top-10 left-5 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-5 w-80 h-80 bg-teal-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-widest text-cyan-500 font-mono font-bold block mb-2">
            04 . SYSTEM REGISTRY LOGS
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Software Codebases
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Category Filtering Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto select-none">
          {categories.map((cat) => (
            <button
              id={`project-filter-${cat}`}
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-305 border cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white border-transparent shadow-lg shadow-cyan-500/15'
                  : isDark
                    ? 'bg-slate-900 border-slate-850 text-slate-400 hover:text-white hover:bg-slate-800'
                    : 'bg-white text-slate-650 border border-slate-200 hover:text-slate-950 hover:bg-slate-50 shadow-sm'
              }`}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Responsive Grid List of Projects */}
        <motion.div
          id="projects-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                id={`project-card-${project.id}`}
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden group min-h-[290px] ${
                  isDark
                    ? 'bg-slate-900 border-slate-850 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/20'
                    : 'bg-white border-slate-200/80 shadow-md hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-50 shadow-sm'
                }`}
              >
                {/* Neon side indicator strip that glows on hover */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-500 to-teal-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                <div>
                  {/* Card Pill Category Indicator */}
                  <div className="flex items-center justify-between mb-5 select-none">
                    <span className={`inline-flex items-center space-x-1.5 text-[10px] font-mono tracking-wider font-bold uppercase px-3 py-1.5 rounded-full border ${
                      isDark 
                        ? 'bg-slate-950 border-slate-850 text-cyan-400' 
                        : 'bg-cyan-50 border-cyan-100 text-cyan-705'
                    }`}>
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>
                    
                    <span className="text-[10.5px] uppercase font-mono text-cyan-500 font-bold tracking-wider group-hover:underline flex items-center gap-1">
                      Expand Details <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-display font-black text-xl sm:text-2xl mb-2.5 tracking-tight group-hover:text-cyan-500 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 block font-normal text-justify ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>
                </div>

                {/* Tags highlights and visual info bar */}
                <div className="select-none">
                  <div className="flex flex-wrap gap-1.5 mb-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9.5px] font-mono font-medium px-2 py-0.5 rounded ${
                          isDark ? 'bg-slate-950 text-slate-400 border border-slate-850' : 'bg-slate-100 text-slate-600 border border-slate-205'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className={`text-[9.5px] font-mono font-semibold px-2 py-1 leading-none rounded ${
                        isDark ? 'bg-slate-950 text-cyan-400 border border-slate-850' : 'bg-cyan-50 text-cyan-700 border border-cyan-100'
                      }`}>
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Window Overlay Dialog */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
              
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                id="project-detail-modal"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className={`relative w-full max-w-2xl rounded-2xl border p-6 sm:p-8 md:p-9 z-10 max-h-[92vh] overflow-y-auto shadow-2xl leading-relaxed text-left ${
                  isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
                }`}
              >
                {/* Close Button top corner */}
                <button
                  id="project-modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-4 right-4 p-2 rounded-xl transition-all cursor-pointer border ${
                    isDark
                      ? 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white bg-slate-950'
                      : 'border-slate-200 hover:border-slate-350 text-slate-500 hover:text-slate-900 bg-slate-50'
                  }`}
                  aria-label="Close Modal"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Category tags */}
                <div className="flex items-center space-x-2 mt-2 pb-1.5 mb-2 select-none">
                  <span className={`inline-flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${
                    isDark ? 'bg-slate-950 border-slate-850 text-cyan-400' : 'bg-cyan-50 border-cyan-100 text-cyan-700'
                  }`}>
                    {selectedProject.category}
                  </span>
                  
                  <span className="text-[9.5px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                    SYSTEM PROJECT RUNTIME MODULE
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-display font-black text-2xl sm:text-3xl tracking-tight mb-4 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {selectedProject.title}
                </h3>

                {/* Detailed narrative block */}
                <p className={`text-xs sm:text-sm mb-6 font-normal text-justify ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {selectedProject.longDescription}
                </p>

                {/* Feature checklist */}
                <div className="mb-6">
                  <h4 className={`text-xs font-mono font-extrabold uppercase tracking-widest mb-3.5 flex items-center gap-1.5 ${
                    isDark ? 'text-cyan-400' : 'text-cyan-600'
                  }`}>
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    Built Operational Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-1 pl-1">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs leading-relaxed">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-505 bg-cyan-400 mt-1.5 mr-2.5 flex-shrink-0" />
                        <span className={isDark ? 'text-slate-305 text-slate-300' : 'text-slate-655 text-slate-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech specifications label */}
                <div className="mb-8 p-4.5 rounded-xl border bg-slate-950/20 dark:bg-slate-950/50 border-slate-800/10 dark:border-slate-850">
                  <h4 className="text-[9.5px] font-mono tracking-widest uppercase text-slate-500 mb-2.5 font-bold select-none">
                    COMPILER TECHNOLOGIES ENGAGED
                  </h4>
                  <div className="flex flex-wrap gap-1.5 select-none">
                    {selectedProject.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[10.5px] font-mono font-bold px-2.5 py-1 rounded border ${
                          isDark 
                            ? 'bg-slate-950 border-slate-850 text-slate-205 text-slate-200' 
                            : 'bg-slate-50 border-slate-100 text-slate-705 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer anchor action buttons */}
                <div className="flex flex-wrap gap-3 pt-5 border-t border-slate-805 border-slate-800/10 dark:border-slate-850">
                  <a
                    id="project-code-link"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-850 hover:bg-slate-800 dark:bg-white dark:border-transparent dark:hover:bg-slate-200 dark:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Repository Source</span>
                  </a>

                  {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                    <a
                      id="project-demo-link"
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-cyan-500/10"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Prototype</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
