import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ArrowUpRight, Award, Mail, Sparkles, MapPin, Upload, FileSignature, CheckCircle, Smartphone, Globe, Github, Info, Play, Trash2, RotateCcw } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  isDark: boolean;
  openResume: () => void;
}

interface TerminalCommand {
  command: string;
  output: React.ReactNode;
}

export default function Hero({ isDark, openResume }: HeroProps) {
  // Image uploader state
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Interactive Terminal State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<TerminalCommand[]>([
    {
      command: 'systeminfo',
      output: (
        <div className="space-y-1 text-slate-400 text-[11px] font-mono leading-relaxed">
          <p className="text-cyan-400 font-bold">--- Kabileshwer G.S Portfolio Engine OS v1.0.0 ---</p>
          <p>🎓 Student Branch: Computer Science & Engineering</p>
          <p>🎯 Status: <span className="text-green-400 font-semibold animate-pulse">● Available for Summer Internships</span></p>
          <p>🌍 Geo Coordinates: Erode, Tamil Nadu, India</p>
          <p className="text-slate-500 mt-1">💡 Type <span className="text-teal-400 font-bold">help</span> or click the quick-chips below to query cognitive nodes.</p>
        </div>
      )
    }
  ]);
  
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal stdout to bottom on changes
  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Process Custom Terminal Commands
  const runCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let reply: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        reply = (
          <div className="space-y-1 text-slate-350">
            <p className="text-[11px] font-bold text-cyan-400">Available Diagnostic Commands:</p>
            <div className="grid grid-cols-2 gap-y-1 gap-x-4 max-w-sm font-mono text-[11px] mt-1">
              <p><span className="text-teal-450 font-bold">about</span> - Brief academic summary</p>
              <p><span className="text-teal-455 font-bold">skills</span> - Technics competence matrix</p>
              <p><span className="text-teal-455 font-bold">projects</span> - View active codebase highlight</p>
              <p><span className="text-teal-455 font-bold">education</span> - Institutional degrees</p>
              <p><span className="text-teal-455 font-bold">ncc</span> - NCC Air Wing attributes</p>
              <p><span className="text-teal-455 font-bold">resume</span> - Open interactive print CV</p>
              <p><span className="text-teal-455 font-bold">contact</span> - Retrieve channels</p>
              <p><span className="text-red-400 font-bold">clear</span> - Flush terminal history</p>
            </div>
          </div>
        );
        break;

      case 'about':
        reply = (
          <div className="text-slate-350 text-[11px] font-mono leading-relaxed max-w-lg space-y-1.5">
            <p className="text-cyan-400 font-bold"># User Profile Node:</p>
            <p className="text-slate-200 italic">"{personalInfo.tagline}"</p>
            <p>{personalInfo.about}</p>
          </div>
        );
        break;

      case 'skills':
        reply = (
          <div className="space-y-2 text-slate-355 text-[11px] font-mono leading-relaxed">
            <p className="text-cyan-400 font-semibold"># Core System Competence Matrix:</p>
            <div className="space-y-2 pl-2">
              <div>
                <p className="text-white font-bold">&gt; Backend Development</p>
                <p className="text-slate-400">Node.js, Express.js, REST API Development</p>
              </div>
              <div>
                <p className="text-white font-bold">&gt; Databases & Programming</p>
                <p className="text-slate-400">MongoDB, MySQL, Python, C, C++, Problem Solving</p>
              </div>
              <div>
                <p className="text-white font-bold">&gt; Tools & DevOps</p>
                <p className="text-slate-400">Git, GitHub, VS Code, AntiGravity, Vercel, Render</p>
              </div>
            </div>
          </div>
        );
        break;

      case 'projects':
        reply = (
          <div className="space-y-2 text-slate-355 text-[11px] leading-relaxed max-w-md font-mono">
            <p className="text-cyan-400 font-bold"># Active Featured Codebase Matrix:</p>
            <div className="space-y-2 pl-2">
              <div>
                <p className="text-white font-bold">1. Vyara HR [Full-Stack]</p>
                <p className="text-slate-400 text-[10px]">Automated HR, shift management, and payroll processor.</p>
              </div>
              <div>
                <p className="text-white font-bold">2. Trader Management System [Full-Stack]</p>
                <p className="text-slate-400 text-[10px]">Real-time item tracking databases, invoices, and analytics.</p>
              </div>
            </div>
          </div>
        );
        break;

      case 'education':
        reply = (
          <div className="space-y-1.5 text-slate-350 text-[11px] leading-relaxed font-mono max-w-md">
            <p className="text-cyan-400 font-bold"># Institutional Database Records:</p>
            <div className="pl-2 border-l border-cyan-500/20 space-y-2 mt-1">
              <div>
                <p className="text-white font-semibold">K.S. Rangasamy College of Technology</p>
                <p className="text-teal-400">BE Computer Science & Engineering (2024 - Present)</p>
                <p className="text-slate-400">Performance Metric: <span className="text-emerald-400 font-bold">CGPA 8.05</span></p>
              </div>
              <div>
                <p className="text-white font-semibold">Secondary Schooling Certificate (10th)</p>
                <p className="text-teal-400">Graduated 2022</p>
                <p className="text-slate-400">Performance Metric: <span className="text-emerald-400 font-bold">79%</span></p>
              </div>
            </div>
          </div>
        );
        break;

      case 'ncc':
        reply = (
          <div className="space-y-1 text-slate-350 text-[11px] leading-relaxed font-mono max-w-lg">
            <p className="text-amber-400 font-bold">✈️ NCC Air Wing Squadron Logs:</p>
            <p className="text-slate-200">National Cadet Corps - Air Wing Cadet</p>
            <p className="text-slate-400 mt-1">{personalInfo.ncc.description}</p>
            <div className="grid grid-cols-2 gap-1 text-[10px] text-teal-400 font-semibold mt-1">
              <p>✓ absolute discipline</p>
              <p>✓ active leadership</p>
              <p>✓ teamwork under stress</p>
              <p>✓ strategic confidence</p>
            </div>
          </div>
        );
        break;

      case 'resume':
        reply = (
          <div className="text-slate-350 text-[11px] font-mono">
            <p className="text-green-400 font-bold">✓ Executed system: openResume();</p>
            <p className="text-slate-400 mt-1">Framer modal overlay dispatched. Click on the modal prompts to print/download CV.</p>
          </div>
        );
        // Dispatch callback
        setTimeout(() => openResume(), 100);
        break;

      case 'contact':
        reply = (
          <div className="space-y-1 text-slate-350 text-[11px] font-mono leading-relaxed max-w-md">
            <p className="text-cyan-400 font-bold"># Communication Interface Active:</p>
            <p>✉ Email: <a href={`mailto:${personalInfo.email}`} className="text-white underline">{personalInfo.email}</a></p>
            <p>☎ Mobile: <a href={`tel:${personalInfo.phone}`} className="text-white underline">{personalInfo.phone}</a></p>
            <p>🔗 LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">linkedin.com/in/kabileshwergs</a></p>
            <p>🐙 Github Source: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/KabileshwerGS</a></p>
            <p className="text-teal-400 font-semibold mt-1.5 animate-pulse">💡 Scroll down to complete the interactive contact form!</p>
          </div>
        );
        break;

      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;

      default:
        reply = (
          <div className="text-[11px] text-red-400 font-mono">
            <p>⚠️ Command unrecognized: "{cmdText}"</p>
            <p className="text-slate-500 mt-0.5">Please specify: <span className="text-cyan-400">help</span> to view active system diagnostics node queries.</p>
          </div>
        );
    }

    setTerminalHistory((prev) => [
      ...prev,
      { command: cmdText, output: reply }
    ]);
    setTerminalInput('');
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(terminalInput);
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden ${
        isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* Visual background grids / tech circles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow ${
          isDark ? 'bg-cyan-500' : 'bg-cyan-200'
        }`} />
        <div className={`absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse-slow ${
          isDark ? 'bg-indigo-500' : 'bg-indigo-200'
        }`} />
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:32px_32px] ${
          isDark ? 'opacity-40' : 'opacity-70'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Core Bio & Visual Monogram Card */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
            
            {/* Cadet badge + open positions flag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold leading-normal border ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 text-cyan-400 shadow-cyan-950/20 shadow-md' 
                  : 'bg-white border-slate-200 text-cyan-750 shadow-md'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
              <span>Available for Summer Internships v2026</span>
            </motion.div>

            {/* High Impact Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.08] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Hi, I’m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 font-black">
                Kabileshwer G.S
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-3xl xl:text-4xl mt-3 font-semibold text-slate-400 leading-normal">
                Computer Science Engineer
              </span>
            </motion.h1>

            {/* Paragraph summary */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`max-w-xl text-sm sm:text-base ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              } leading-relaxed`}
            >
              {personalInfo.tagline} Student at KSRCT with CGPA of 8.05. Experienced with MongoDB, Express.js, React, Node.js, and military-grade integrity from NCC Air Wing.
            </motion.p>

            {/* Location Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-2 text-xs font-mono text-slate-500 font-medium"
            >
              <MapPin className="h-4 w-4 text-cyan-500" />
              <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                {personalInfo.location} • Tamil Nadu, India
              </span>
            </motion.div>

            {/* Micro-interactive Action Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <button
                id="hero-scroll-projects-c"
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-1 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 dark:bg-white dark:border-transparent dark:hover:bg-slate-200 dark:text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer shadow transition-all group"
              >
                <span>Browse Projects</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-scroll-contact-c"
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-lg shadow-cyan-500/10 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>Get In Touch</span>
              </button>

              <button
                id="hero-framer-resume"
                onClick={openResume}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl border font-bold text-xs uppercase tracking-wider cursor-pointer transition-all ${
                  isDark
                    ? 'border-slate-800 bg-slate-900/40 hover:bg-slate-800 text-slate-100'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm'
                }`}
              >
                <FileSignature className="h-4 w-4 text-cyan-500" />
                <span>Resume CV</span>
              </button>
            </motion.div>

            {/* Profile Photo Upload card beneath bio */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className={`flex items-center space-x-4 p-4 rounded-2xl border w-full max-w-md ${
                isDark ? 'bg-slate-900/50 border-slate-850' : 'bg-white border-slate-200/80 shadow-sm'
              }`}
            >
              <div 
                onClick={triggerFileSelect} 
                className="relative cursor-pointer group w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-tr from-cyan-400 to-teal-400 p-0.5 flex-shrink-0 flex items-center justify-center transition-all duration-300"
                title="Click to load custom headshot photograph"
              >
                <div className={`w-full h-full rounded-[10px] overflow-hidden flex items-center justify-center relative ${
                  isDark ? 'bg-slate-950' : 'bg-slate-100'
                }`}>
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Student Headshot" 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="text-center flex flex-col items-center justify-center">
                      <span className="text-xs font-mono font-black text-cyan-400">K</span>
                      <Upload className="h-3 w-3 text-cyan-400 animate-bounce absolute bottom-1 text-center" />
                    </div>
                  )}
                  {/* Hover upload badge */}
                  <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Upload className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
              </div>

              <div>
                <span className={`block font-display font-bold text-sm ${isDark ? 'text-white' : 'text-slate-850'}`}>
                  Photo Attachment Node
                </span>
                <span className="block text-[10px] text-slate-400 leading-normal mt-0.5 max-w-[210px] sm:max-w-xs text-justify">
                  {profileImage ? '✓ Custom headshot parsed successfully!' : 'Drag or click the block to upload an academic photograph of Kabileshwer G.S.'}
                </span>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </motion.div>
          </div>

          {/* Column 2: Live Simulator Command Terminal Block */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-[390px] border border-slate-800 rounded-2xl flex flex-col overflow-hidden bg-slate-950 text-slate-300 shadow-2xl shadow-cyan-500/5 select-text text-left relative"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800/80 shrink-0 select-none">
                <div className="flex items-center space-x-1.5 matches-glow">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" onClick={() => setTerminalHistory([])} title="Flush log" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono font-medium tracking-wide text-slate-500 flex items-center gap-1.5 selection:bg-cyan-500/10">
                  <Terminal className="h-3.5 w-3.5 text-cyan-400" /> cse_diagnostic_panel.sh
                </span>
                <div className="w-8 shrink-0 text-right">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-ping" />
                </div>
              </div>

              {/* Terminal Logs stdout Section */}
              <div id="terminal-stdout-scroller" className="flex-1 overflow-y-auto px-5 py-4 space-y-4 font-mono text-[11px] leading-relaxed select-text">
                {terminalHistory.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-slate-400 flex items-center">
                      <span className="text-teal-400 font-bold block shrink-0 mr-1.5">guest@kabileshwer-cse:~$</span>
                      <span>{item.command}</span>
                    </p>
                    {item.output}
                  </div>
                ))}
                
                <div ref={terminalBottomRef} />
              </div>

              {/* Suggestion Prompt Chips */}
              <div className="px-5 py-2.5 bg-slate-900/45 border-t border-slate-800/80 flex flex-wrap gap-1.5 shrink-0 select-none">
                <span className="text-[9px] uppercase font-mono tracking-wider font-bold text-slate-500 mr-1 mt-1">Quick chips:</span>
                <button
                  id="term-quick-about"
                  onClick={() => runCommand('about')}
                  className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[9.5px] text-cyan-400 font-semibold font-mono cursor-pointer transition-colors"
                >
                  about
                </button>
                <button
                  id="term-quick-skills"
                  onClick={() => runCommand('skills')}
                  className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[9.5px] text-cyan-400 font-semibold font-mono cursor-pointer transition-colors"
                >
                  skills
                </button>
                <button
                  id="term-quick-projects"
                  onClick={() => runCommand('projects')}
                  className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[9.5px] text-cyan-400 font-semibold font-mono cursor-pointer transition-colors"
                >
                  projects
                </button>
                <button
                  id="term-quick-ncc"
                  onClick={() => runCommand('ncc')}
                  className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[9.5px] text-amber-400 hover:text-white font-semibold font-mono cursor-pointer transition-colors"
                >
                  ncc
                </button>
                <button
                  id="term-quick-resume"
                  onClick={() => runCommand('resume')}
                  className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-850 border border-slate-800 text-[9.5px] text-green-400 font-semibold font-mono cursor-pointer transition-colors"
                >
                  [open-cv]
                </button>
                {terminalHistory.length > 2 && (
                  <button
                    id="term-quick-clear"
                    onClick={() => runCommand('clear')}
                    className="px-2 py-0.5 rounded bg-slate-900 hover:bg-red-950 hover:border-red-800 border border-slate-800 text-[9.5px] text-red-400 font-semibold font-mono cursor-pointer transition-colors flex items-center gap-1"
                  >
                    <Trash2 className="h-2.5 w-2.5" /> clear
                  </button>
                )}
              </div>

              {/* Terminal Form command stdin */}
              <form onSubmit={handleTerminalSubmit} className="flex border-t border-slate-800 bg-slate-900 shrink-0 select-none">
                <span className="pl-4 pr-1.5 flex items-center text-teal-400 font-mono text-[11px] font-bold">
                  guest@kabileshwer-cse:~$
                </span>
                <input
                  id="terminal-interactive-input"
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type help or select a quick-chip..."
                  className="flex-1 bg-transparent px-1.5 py-3 font-mono text-[11px] text-white placeholder-slate-600 focus:outline-none focus:ring-0 min-w-0"
                />
                <button
                  id="terminal-enter-arrow-submit"
                  type="submit"
                  className="px-4 text-cyan-500 hover:text-cyan-400 flex items-center justify-center transition-colors border-l border-slate-800 bg-slate-900/60 cursor-pointer"
                  title="Run command"
                >
                  <Play className="h-3 w-3 fill-cyan-500" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
