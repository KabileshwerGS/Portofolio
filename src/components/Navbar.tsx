import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Briefcase, User, GraduationCap, Code2, Mail, Award, FileText } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  openResume: () => void;
}

export default function Navbar({ isDark, setIsDark, openResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = ['home', 'about', 'ncc', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'ncc', label: 'NCC Air Wing', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'glass-effect-dark bg-slate-900/90 shadow-lg shadow-slate-950/20 py-3'
            : 'glass-effect-light bg-white/90 shadow-md shadow-slate-100/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Branding */}
          <button
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 text-left cursor-pointer group"
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isDark ? 'bg-slate-800 group-hover:bg-cyan-950 text-cyan-400' : 'bg-slate-100 group-hover:bg-cyan-50 text-cyan-600'
            }`}>
              <Code2 className="h-5 w-5 animate-pulse-slow" />
            </div>
            <div>
              <span className={`block font-display font-bold text-lg tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {personalInfo.name}
              </span>
              <span className="block text-[10px] font-mono tracking-wider uppercase text-cyan-500 font-semibold">
                Portfolio Engine v1.0
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? isDark
                        ? 'text-cyan-400 bg-cyan-950/40'
                        : 'text-cyan-600 bg-cyan-50'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeBorder"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Area */}
          <div className="flex items-center space-x-2">
            {/* Resume Fast-View Button */}
            <button
              id="navbar-resume-btn"
              onClick={openResume}
              className="hidden sm:flex items-center space-x-1 text-xs px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-200 cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </button>

            {/* Dark Mode Switcher */}
            <button
              id="dark-mode-toggle"
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-705 text-amber-400 hover:text-amber-300'
                  : 'bg-slate-100 hover:bg-slate-200 text-indigo-600 hover:text-indigo-800'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl md:hidden cursor-pointer ${
                isDark
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden border-t mt-3 overflow-hidden ${
              isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-100'
            }`}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    id={`mobile-nav-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? isDark
                          ? 'text-cyan-400 bg-cyan-950/50'
                          : 'text-cyan-600 bg-cyan-50'
                        : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <button
                id="mobile-nav-resume-btn"
                onClick={() => {
                  setIsOpen(false);
                  openResume();
                }}
                className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 mt-2"
              >
                <FileText className="h-4 w-4" />
                <span>Download / View Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
