
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from 'ai/react';
import { portfolioData } from '@/lib/data';
import { 
    Github, Linkedin, Mail, Phone, ExternalLink, X, 
    BrainCircuit, Rocket, Globe, Sparkles, 
    Contact, Cpu, Download, GraduationCap, Briefcase,
    Send, Terminal, User, Bot
} from 'lucide-react';
import FluidBackground from '@/components/FluidBackground';

export default function Home() {
  const [activeView, setActiveView] = useState<string | null>(null);

  const { messages, input, setInput, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    onFinish: () => {
      scrollToBottom();
    },
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (activeView === 'chat') {
      scrollToBottom();
    }
  }, [messages, activeView]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    handleSubmit(e);
  };
  
  const handleQuickReply = (question: string) => {
    setInput(question);
    setTimeout(() => {
      formRef.current?.requestSubmit();
    }, 0);
  }

  const selectedProject = portfolioData.projects.find(p => p.id === activeView);
  const selectedCareer = portfolioData.career.find(c => c.id === activeView);

  const openView = (viewId: string) => {
    setActiveView(viewId);
  };
  
  const closeAllViews = () => {
    setActiveView(null);
  };

  return (
    <main className="min-h-screen w-full bg-[#050505] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      <FluidBackground />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 min-h-screen flex flex-col justify-start md:justify-center pb-32 pt-8 md:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col justify-between group hover:border-white/20 transition-colors relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -right-10 -top-10 w-48 h-48 md:w-64 md:h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors" />
            
            <div>
              <div className="flex justify-between items-start">
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 text-cyan-400 bg-white/5 rounded-2xl p-2 md:p-3 border border-white/10"
                  >
                    <BrainCircuit className="w-full h-full" />
                  </motion.div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-400 mb-3 tracking-tight">
                {portfolioData.profile.name}
              </h1>
              <p className="text-sm md:text-lg text-neutral-400 max-w-lg leading-relaxed">
                <span className="text-cyan-400">{portfolioData.profile.role}</span>. {portfolioData.profile.bio}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a href={portfolioData.profile.contact.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all">
                <Linkedin size={20} />
              </a>
              <a href={portfolioData.profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors border border-white/5 shrink-0">
                  <Download size={14} /> Resume
              </a>
              <a href={`mailto:${portfolioData.profile.contact.email}`} className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all">
                <Mail size={20} />
              </a>
               <div className="flex-grow"></div>
               <div className="bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300 px-4 py-2 flex items-center gap-2">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
                 {portfolioData.profile.availability}
               </div>
            </div>
          </motion.div>

          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
              <div className="flex items-center gap-2 mb-6 text-neutral-400">
                  <Briefcase size={16} />
                  <span className="text-xs font-mono uppercase tracking-wider">Career Log</span>
              </div>
              
              <div className="flex-1 overflow-y-auto custom-scrollbar -mr-4 pr-4">
                  <div className="relative flex flex-col gap-6 border-l border-white/10 ml-1">
                    {portfolioData.career.map((item) => (
                        <motion.div 
                          key={item.id}
                          layoutId={`card-${item.id}`}
                          onClick={() => openView(item.id)}
                          className="relative pl-6 cursor-pointer group"
                        >
                            <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-neutral-800 group-hover:bg-cyan-500 transition-colors border-2 border-background" />
                            <span className="text-[10px] font-mono text-cyan-500/80 mb-1 block">{item.year}</span>
                            <h4 className="text-sm font-bold text-white group-hover:text-cyan-100">{item.role}</h4>
                            <p className="text-xs text-neutral-500 group-hover:text-neutral-400">{item.org}</p>
                        </motion.div>
                    ))}
                  </div>
              </div>
          </motion.div>

          {portfolioData.projects.map((project, i) => (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              onClick={() => openView(project.id)}
              className="col-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all relative overflow-hidden group min-h-[180px] md:min-h-[220px] flex flex-col justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-4 right-4 text-3xl md:text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-50 group-hover:opacity-100">{project.emoji}</div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-mono uppercase tracking-widest border px-2 py-0.5 rounded-full ${project.status === 'Live App' ? 'text-green-400 border-green-900/50 bg-green-950/30' : 'text-cyan-400 border-cyan-900/50 bg-cyan-950/30'}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-100 transition-colors">{project.title}</h3>
                <p className="text-xs text-neutral-400 line-clamp-2">{project.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-full flex gap-6 md:gap-8 shadow-2xl items-center ring-1 ring-white/5">
           <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="cursor-pointer text-neutral-400 hover:text-white flex flex-col items-center gap-1 group relative" onClick={closeAllViews}>
             <Globe size={22} />
           </motion.button>
           
           <div className="h-6 w-[1px] bg-white/10"></div>
           
           <motion.button 
             whileHover={{ scale: 1.2 }}
             whileTap={{ scale: 0.9 }} 
             className="cursor-pointer relative group" 
             onClick={() => openView('chat')}
           >
             <div className="absolute inset-0 bg-cyan-500 rounded-full blur-lg opacity-40 animate-pulse group-hover:opacity-60 transition-opacity"></div>
             <div className={`relative p-2 rounded-full transition-colors ${activeView === 'chat' ? 'bg-cyan-500 text-black' : 'bg-white/10 text-cyan-400 group-hover:text-white'}`}>
                 <Sparkles size={22} />
             </div>
           </motion.button>

           <div className="h-6 w-[1px] bg-white/10"></div>

           <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="cursor-pointer text-neutral-400 hover:text-white flex flex-col items-center gap-1 group relative" onClick={() => openView('contact')}>
             <Contact size={22} />
           </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-40 flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-8" onClick={closeAllViews}>
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-[90vh] md:h-auto md:max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:max-h-[90vh]"
            >
              <button onClick={closeAllViews} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-white/20 z-20 text-white border border-white/10"><X size={20} /></button>
              
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="h-40 md:h-48 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 relative flex items-center justify-center">
                   <div className="absolute -bottom-8 left-6 md:left-12 flex items-end gap-4">
                      <div className="text-5xl md:text-6xl filter drop-shadow-lg">{selectedProject.emoji}</div>
                      <div className="pb-1">
                         <h2 className="text-2xl md:text-4xl font-bold text-white">{selectedProject.title}</h2>
                         <div className="flex items-center gap-2 mt-1">
                            <span className="text-cyan-400 font-mono text-[10px] md:text-xs uppercase border border-cyan-500/30 px-2 py-0.5 rounded">{selectedProject.category}</span>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="p-6 md:p-12 pt-16 md:pt-16">
                  <p className="text-base md:text-lg text-neutral-300 mb-8 leading-relaxed max-w-3xl">{selectedProject.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                     <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2"><Contact size={14} /> Key Metrics</h4>
                        <ul className="space-y-3">
                          {selectedProject.metrics.map((m, i) => (<li key={i} className="text-sm text-neutral-300 flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>{m}</li>))}
                        </ul>
                     </div>
                     <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2"><Cpu size={14} /> Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map(tech => (<span key={tech} className="px-3 py-1.5 bg-black/40 text-neutral-200 text-xs md:text-sm rounded-lg border border-white/10">{tech}</span>))}
                        </div>
                     </div>
                  </div>
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className={`w-full md:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all ${selectedProject.type === 'app' ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'bg-white text-black hover:bg-neutral-200'}`}>
                    {selectedProject.type === 'app' ? 'Launch App' : 'View Presentation'} <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCareer && (
          <div className="fixed inset-0 z-40 flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-8" onClick={closeAllViews}>
            <motion.div
              layoutId={`card-${selectedCareer.id}`}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-[90vh] md:h-auto md:max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:max-h-[90vh]"
            >
              <button onClick={closeAllViews} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-white/20 z-20 text-white border border-white/10"><X size={20} /></button>

              <div className="p-6 md:p-12 flex-1 overflow-y-auto custom-scrollbar">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl shrink-0">
                      <GraduationCap size={24} className="text-cyan-400"/>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-500/80">{selectedCareer.year}</span>
                      <h2 className="text-xl md:text-2xl font-bold text-white">{selectedCareer.role}</h2>
                      <p className="text-sm text-neutral-400">{selectedCareer.org}</p>
                    </div>
                </div>
                <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
                  {selectedCareer.desc.split('\n').map((item, index) => {
                    const trimmedItem = item.trim();
                    if (trimmedItem.startsWith('•')) {
                      return <p key={index} className="flex items-start gap-2"><span className='mt-1.5'>•</span><span>{trimmedItem.substring(1).trim()}</span></p>
                    }
                    return <p key={index}>{trimmedItem}</p>;
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {activeView === 'chat' && (
          <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/80 backdrop-blur-md p-0 md:p-4 md:items-center" onClick={closeAllViews}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 50 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-[90vh] md:h-auto md:max-h-[80vh] md:w-full md:max-w-lg bg-[#0a0a0a]/80 backdrop-blur-xl border border-cyan-500/30 rounded-t-3xl md:rounded-3xl shadow-2xl shadow-cyan-900/20 overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-cyan-950/10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                      <Terminal size={18} className="text-cyan-400" />
                  </div>
                  <div>
                      <span className="block font-bold text-sm text-white">AI Twin System</span>
                      <span className="block text-[10px] text-cyan-300/60 font-mono">ONLINE • GEMINI-2.5-FLASH</span>
                  </div>
                </div>
                <button onClick={closeAllViews} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm custom-scrollbar bg-opacity-5 min-h-0">
                {messages.length === 0 && (
                  <div className="text-center text-neutral-500 mt-16 flex flex-col items-center px-8">
                    <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                        <Sparkles className="w-8 h-8 text-cyan-500" />
                    </div>
                    <p className="text-lg font-medium text-white mb-2">System Online ⚡️</p>
                    <div className="text-sm text-neutral-400 space-y-2">
                        <p>I am Umar's AI Digital Twin.</p>
                        <p>I have access to his entire neural network—from his 0-to-1 Product Management strategies to his obsession with Firebase Studio. I'm ready to deploy answers about his experience, projects, or why he thinks AI is the ultimate assistant.</p>
                        <p>Initiate a query below! 👇</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center mt-6">
                        <button type="button" onClick={() => handleQuickReply("Tell me about BillFlow")} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors">"Tell me about BillFlow"</button>
                        <button type="button" onClick={() => handleQuickReply("How can I contact him?")} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors">"How can I contact him?"</button>
                    </div>
                  </div>
                )}
                {messages.map((m, idx) => (
                  <div key={m.id || idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3.5 rounded-2xl flex gap-3 ${
                      m.role === 'user' 
                        ? 'bg-cyan-600 text-white rounded-br-none' 
                        : 'bg-white/10 text-neutral-200 rounded-bl-none border border-white/5'
                    }`}>
                      <div className="mt-1 shrink-0 opacity-70">
                          {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                      </div>
                      <div className="leading-relaxed break-words whitespace-pre-wrap">
                          {m.content}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && messages[messages.length - 1]?.role === 'user' && (
                   <div className="flex justify-start">
                      <div className="flex gap-3 bg-white/10 text-neutral-200 rounded-2xl rounded-bl-none border border-white/5 p-3.5 max-w-[85%]">
                        <div className="mt-1 shrink-0 opacity-70">
                          <Bot size={14} />
                        </div>
                        <div className="text-neutral-400 text-sm animate-pulse">
                            Processing Query...
                        </div>
                      </div>
                   </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form ref={formRef} onSubmit={handleFormSubmit} className="p-4 border-t border-white/10 bg-[#050505] shrink-0">
                <div className="flex gap-2 items-end">
                  <textarea
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Query the system..."
                    rows={1}
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-neutral-600 resize-none min-h-[44px] max-h-32"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleFormSubmit(e as any);
                      }
                    }}
                  />
                  <button 
                    type="submit" 
                    disabled={!input || !input.trim() || isLoading} 
                    className="p-3 bg-cyan-500 text-black rounded-xl hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <p className="text-[10px] text-center text-neutral-600 mt-2 font-mono">AI can make mistakes. Check important info.</p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeView === 'contact' && (
          <div className="fixed inset-0 z-40 flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm" onClick={closeAllViews}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{type: 'spring', stiffness: 300, damping: 25}}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-t-3xl md:rounded-3xl p-8 m-4 shadow-2xl relative"
            >
              <h3 className="text-xl font-bold mb-1">Quick Contact</h3>
              <p className="text-neutral-400 text-sm mb-6">Let's build something great together.</p>

              <div className="space-y-4">
                 <a href={`mailto:${portfolioData.profile.contact.email}`} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-colors">
                   <Mail size={20} className="text-cyan-400"/>
                   <div>
                     <span className="text-xs text-neutral-400">Email</span>
                     <p className="text-sm font-medium">{portfolioData.profile.contact.email}</p>
                   </div>
                 </a>
                 <a href={`tel:${portfolioData.profile.contact.phone}`} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-colors">
                   <Phone size={20} className="text-cyan-400"/>
                   <div>
                     <span className="text-xs text-neutral-400">Phone</span>
                     <p className="text-sm font-medium">{portfolioData.profile.contact.phone}</p>
                   </div>
                 </a>
                 <a href={portfolioData.profile.contact.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-colors">
                   <Linkedin size={20} className="text-cyan-400"/>
                   <div>
                     <span className="text-xs text-neutral-400">LinkedIn</span>
                     <p className="text-sm font-medium">Connect with me</p>
                   </div>
                 </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
