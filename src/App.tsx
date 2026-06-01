import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeViewer from './components/ResumeViewer';
import { personalInfo } from './data';
import { ArrowUp, Code2, Heart } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : true; // Default to eye-safe dark
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync dark class on document root
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Monitor scroll height to show back-to-top button
  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-cyan-500/30 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Dynamic Navigation Pane */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        openResume={() => setIsResumeOpen(true)}
      />

      {/* Main Single-Screen/View Sections */}
      <main id="portfolio-main-layout">
        {/* HERO SECTION */}
        <Hero
          isDark={isDark}
          openResume={() => setIsResumeOpen(true)}
        />

        {/* ABOUT SECTION & NCC */}
        <About isDark={isDark} />

        {/* EDUCATION HISTORIES TIMELINE */}
        <Education isDark={isDark} />

        {/* SKILLS CHART CLUSTER */}
        <Skills isDark={isDark} />

        {/* SELECTED PORTFOLIO CODES */}
        <Projects isDark={isDark} />

        {/* INTERACTIVE FORM & CONTACT INFOS */}
        <Contact isDark={isDark} />
      </main>

      {/* FOOTER BLOCK */}
      <footer id="portfolio-footer-pane" className={`py-12 border-t text-center ${
        isDark ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2 text-left">
            <div className={`p-2 rounded-xl ${isDark ? 'bg-slate-900 text-cyan-400' : 'bg-slate-100 text-cyan-600'}`}>
              <Code2 className="h-5 w-5 animate-pulse-slow" />
            </div>
            <div>
              <span className={`block font-display font-extrabold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.name}
              </span>
              <span className="block text-[10px] font-mono text-slate-500 uppercase">
                CSE Portfolio Engine • Tamil Nadu, India
              </span>
            </div>
          </div>

          <p className="text-xs font-mono font-medium leading-normal">
            Designed with <Heart className="h-3.5 w-3.5 text-red-500 inline fill-red-500 mx-0.5 animate-pulse" /> using React, TailwindCSS & Motion.
          </p>

          <p className="text-[10px] font-mono text-slate-500">
            © {new Date().getFullYear()} Kabileshwer G.S. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* MODALS WINDOWS & FLOATING COMPONENTS */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeViewer
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
            isDark={isDark}
          />
        )}
      </AnimatePresence>

      {/* FLOATING ACTION: SCROLL-TO-TOP CHIP */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white rounded-full shadow-lg shadow-cyan-500/20 active:translate-y-0.5 group transition-all duration-200 cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="h-4.5 w-4.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
