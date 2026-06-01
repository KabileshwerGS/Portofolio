import { motion } from 'motion/react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { personalInfo, educationData, projectsData, skillsData } from '../data';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export default function ResumeViewer({ isOpen, onClose, isDark }: ResumeViewerProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Dark background blur overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
      />

      {/* Main Container */}
      <motion.div
        id="resume-viewer-modal"
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className={`relative w-full max-w-4xl rounded-3xl border z-10 flex flex-col h-[92vh] overflow-hidden shadow-2xl ${
          isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Controls Header */}
        <div className={`p-4 flex items-center justify-between border-b ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <h3 className={`font-display font-bold text-sm leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Interactive Curriculum Vitae (CV)
            </h3>
            <span className="block text-[10px] font-mono text-slate-500 uppercase">
              Printer-Friendly Layout
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className={`flex items-center space-x-1 px-3.5 py-2 rounded-xl text-xs font-semibold cursor-pointer border hover:shadow transition-all ${
                isDark
                  ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-white'
                  : 'border-slate-200 bg-white hover:bg-slate-100 text-cyan-600 hover:text-slate-950 shadow-sm'
              }`}
            >
              <Printer className="h-4 w-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="resume-close-btn"
              onClick={onClose}
              className={`p-2 rounded-xl border cursor-pointer hover:shadow transition-all ${
                isDark
                  ? 'border-slate-800 hover:border-slate-750 text-slate-400 hover:text-white bg-slate-950'
                  : 'border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-900 bg-slate-50'
              }`}
              aria-label="Close CV Viewer"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* Printable/Scrollable Resume Content Area */}
        <div id="printable-resume-body" className="flex-1 overflow-y-auto px-6 py-8 md:p-10 leading-relaxed text-left text-slate-900 bg-white print:p-0 print:overflow-visible">
          {/* Print media specific styles inline */}
          <style dangerouslySetInnerHTML={{ __html: `
            @media print {
              body * {
                visibility: hidden;
              }
              #printable-resume-body, #printable-resume-body * {
                visibility: visible;
              }
              #printable-resume-body {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                padding: 0px !important;
                margin: 0px !important;
                background-color: white !important;
                color: black !important;
              }
              #resume-viewer-modal {
                border: none !important;
                box-shadow: none !important;
              }
            }
          `}} />

          {/* CV Contents */}
          <div className="max-w-3xl mx-auto space-y-8 text-slate-800">
            {/* Header Block */}
            <div className="border-b-2 border-slate-200 pb-5 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-cyan-600 font-mono text-xs font-semibold uppercase tracking-wider mt-1.5 leading-none">
                  Computer Science & Engineering Student | CSE Developer
                </p>
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 mt-2 justify-center sm:justify-start">
                  <MapPin className="h-3.5 w-3.5 text-cyan-500 flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Channels Contacts */}
              <div className="flex flex-col items-center sm:items-end space-y-1.5 text-xs text-slate-600 font-medium">
                <a href={`mailto:${personalInfo.email}`} className="hover:underline flex items-center space-x-2">
                  <Mail className="h-3.5 w-3.5 text-slate-500" />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={`tel:${personalInfo.phone}`} className="hover:underline flex items-center space-x-2">
                  <Phone className="h-3.5 w-3.5 text-slate-500" />
                  <span>{personalInfo.phone}</span>
                </a>
                <div className="flex items-center space-x-4 mt-1 font-mono">
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-[11px] text-cyan-600">
                    LinkedIn
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline text-[11px] text-cyan-600">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Objective Narrative */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-600 border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                PROFESSIONAL OBJECTIVE
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                {personalInfo.about}
              </p>
            </div>

            {/* Academic History block */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-600 border-b border-slate-200 pb-1.5 mb-4 flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4" />
                ACADEMIC HISTORY
              </h2>
              <div className="space-y-4">
                {educationData.map((edu) => (
                  <div key={edu.institution} className="relative pl-4 border-l-2 border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-bold text-slate-900">
                      <h3 className="text-xs sm:text-sm">{edu.degree}</h3>
                      <span className="text-[10px] font-mono text-slate-500 font-medium mt-1 sm:mt-0">
                        {edu.period} | <b>{edu.score}</b>
                      </span>
                    </div>
                    <span className="block text-xs text-cyan-600 font-semibold mt-0.5 mb-2 leading-none">
                      {edu.institution}
                    </span>
                    <ul className="space-y-1">
                      {edu.details.map((det, idx) => (
                        <li key={idx} className="flex items-start text-[11px] text-slate-500">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 mr-2 flex-shrink-0" />
                          <span>{det}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* NCC Air Wing block */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-600 border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-1.5">
                <Award className="h-4 w-4" />
                NATIONAL CADET CORPS (NCC AIR WING)
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-600 mb-3 leading-relaxed">
                {personalInfo.ncc.description}
              </p>
              <ul className="space-y-1.5 grid grid-cols-1 md:grid-cols-2 gap-1.5">
                {personalInfo.ncc.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start text-[10px] text-slate-500">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 mr-2 flex-shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Skills block */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-600 border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-1.5">
                <Briefcase className="h-4 w-4" />
                TECHNICAL COMPETENCY MATRIX
              </h2>
              <div className="space-y-3.5">
                {skillsData.map((category) => (
                  <div key={category.title} className="flex flex-col sm:flex-row sm:items-start text-xs">
                    <span className="w-full sm:w-1/3 font-bold text-slate-900 pr-4 mb-1 sm:mb-0 leading-tight">
                      {category.title}
                    </span>
                    <div className="flex flex-wrap gap-1.5 w-full sm:w-2/3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono leading-none border border-slate-200 font-medium"
                        >
                          {skill.name} ({skill.level}%)
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Projects block */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-600 border-b border-slate-200 pb-1.5 mb-4 flex items-center gap-1.5">
                <Briefcase className="h-4 w-4" />
                SOFTWARE DEVELOPMENT PROJECTS
              </h2>
              <div className="space-y-4">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="relative pl-4 border-l-2 border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-bold text-slate-900">
                      <h3 className="text-xs sm:text-sm">{proj.title}</h3>
                      <span className="text-[10px] font-mono text-slate-500 mt-1 sm:mt-0 font-medium">
                        [{proj.category} Category]
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug font-medium mb-2">
                      {proj.description}
                    </p>
                    <ul className="space-y-1">
                      {proj.features.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="flex items-start text-[10px] text-slate-500">
                          <span className="inline-block w-1 h-1 rounded-full bg-slate-300 mt-1.5 mr-2 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-[9px] font-mono text-slate-500 mt-1.5 leading-none">
                      <b>Stack used:</b> {proj.techUsed.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Statement Footer info */}
            <div className="pt-6 border-t border-slate-200 text-center text-[9px] font-mono text-slate-400">
              * The information above is accurate to the best of my knowledge and represents my academic portfolio.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
