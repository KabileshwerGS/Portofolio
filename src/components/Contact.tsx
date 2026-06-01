import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, CheckCircle2, Copy } from 'lucide-react';
import { personalInfo } from '../data';

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-800'
      }`}
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest text-cyan-500 font-mono font-bold block mb-2">
            05 . DIRECT COMMUNICATION GATEWAY
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Info and Channels Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between relative overflow-hidden group ${
              isDark ? 'bg-slate-950 border-slate-850' : 'bg-white border-slate-200/80 shadow-md shadow-slate-100'
            }`}
          >
            <div>
              <h3 className={`font-display font-black text-xl mb-3 text-center ${isDark ? 'text-white' : 'text-slate-850'}`}>
                Communication Channels
              </h3>
              <p className={`text-xs sm:text-sm mb-8 leading-relaxed font-normal text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Have discussions, internship proposals, or feedback? Use these immediate developer contacts to reach out directly:
              </p>

              {/* Centralized Channels List */}
              <div className="space-y-4 max-w-md mx-auto">
                
                {/* Email Channel */}
                <div className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                  isDark ? 'bg-slate-900/60 border-slate-850 hover:bg-slate-900' : 'bg-slate-50 border-slate-200 hover:bg-slate-100/50'
                }`}>
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-400">
                      <Mail className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[9px] uppercase font-mono text-slate-500 font-bold tracking-wider">Primary Email Address</span>
                      <a href={`mailto:${personalInfo.email}`} className={`text-xs font-bold font-mono transition-colors ${isDark ? 'text-white hover:text-cyan-405 text-slate-200' : 'text-slate-855 hover:text-cyan-600'}`}>
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    id="copy-email-btn"
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-1.5 text-slate-500 hover:text-cyan-400 rounded-lg cursor-pointer transition-colors"
                    title="Copy Address to Clipboard"
                  >
                    {copiedText === 'email' ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Phone Cell */}
                <div className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                  isDark ? 'bg-slate-900/60 border-slate-850 hover:bg-slate-900' : 'bg-slate-50 border-slate-200 hover:bg-slate-100/50'
                }`}>
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-400">
                      <Phone className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[9px] uppercase font-mono text-slate-500 font-bold tracking-wider">Mobile Phone Contact</span>
                      <a href={`tel:${personalInfo.phone}`} className={`text-xs font-bold font-mono transition-colors ${isDark ? 'text-white hover:text-cyan-400 text-slate-200' : 'text-slate-800 hover:text-cyan-600'}`}>
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    id="copy-phone-btn"
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-1.5 text-slate-500 hover:text-cyan-400 rounded-lg cursor-pointer transition-colors"
                    title="Copy Phone to Clipboard"
                  >
                    {copiedText === 'phone' ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* LinkedIn Connect */}
                <div className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                  isDark ? 'bg-slate-900/60 border-slate-850 hover:bg-slate-900' : 'bg-slate-50 border-slate-200 hover:bg-slate-100/50'
                }`}>
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                      <Linkedin className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[9px] uppercase font-mono text-slate-500 font-bold tracking-wider">LinkedIn Handle</span>
                      <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={`text-xs font-bold font-mono transition-colors ${isDark ? 'text-white hover:text-cyan-450 text-slate-200' : 'text-slate-800 hover:text-cyan-603'}`}>
                        linkedin.com/in/kabileshwergs
                      </a>
                    </div>
                  </div>
                  <a
                    id="visit-linkedin-btn"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-slate-500 hover:text-cyan-400 rounded-lg cursor-pointer transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>

                {/* GitHub URL */}
                <div className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                  isDark ? 'bg-slate-900/60 border-slate-850 hover:bg-slate-900' : 'bg-slate-50 border-slate-200 hover:bg-slate-100/50'
                }`}>
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-slate-500/10 text-slate-400">
                      <Github className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[9px] uppercase font-mono text-slate-500 font-bold tracking-wider">GitHub Code Repository</span>
                      <a href={personalInfo.github} target="_blank" rel="noreferrer" className={`text-xs font-bold font-mono transition-colors ${isDark ? 'text-white hover:text-cyan-455 text-slate-200' : 'text-slate-800 hover:text-cyan-600'}`}>
                        @KabileshwerGS
                      </a>
                    </div>
                  </div>
                  <a
                    id="visit-github-btn"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-slate-500 hover:text-cyan-400 rounded-lg cursor-pointer transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Developer note disclaimer */}
            <div className="text-[10px] font-mono text-slate-500 mt-8 pt-4.5 border-t border-slate-800/10 dark:border-slate-850 select-none text-center">
              * Communication lines are updated regularly. Click any icon to copy or follow the immediate links.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
