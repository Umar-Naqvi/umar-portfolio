'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from 'ai/react';
import { portfolioData } from '@/lib/data';
import { 
    Github, Linkedin, Mail, Phone, ExternalLink, X, 
    Rocket, Cpu, Download,
    Send, Terminal, User, Bot, CheckCircle, ArrowRight,
    BarChart3, TrendingUp, Package, Award, Youtube, Instagram, Globe, Sparkles, Contact
} from 'lucide-react';
import FluidBackground from '@/components/FluidBackground';
import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';


export default function Home() {
  const [activeView, setActiveView] = useState<string | null>(null);
  const [showAiHint, setShowAiHint] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAiHint(true);
    }, 2500); // Show after 2.5s

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
  const shippedProducts = portfolioData.projects.filter(p => p.type === 'live');
  const caseStudies = portfolioData.projects.filter(p => p.type === 'case-study');

  const openView = (viewId: string) => {
    setActiveView(viewId);
  };
  
  const closeAllViews = () => {
    setActiveView(null);
  };
  
  const StatIcon = ({ index }: { index: number }) => {
    const icons = [
        <BarChart3 key={0} className="w-5 h-5 mx-auto mb-2 text-cyan-400" />,
        <TrendingUp key={1} className="w-5 h-5 mx-auto mb-2 text-cyan-400" />,
        <Package key={2} className="w-5 h-5 mx-auto mb-2 text-cyan-400" />,
        <Award key={3} className="w-5 h-5 mx-auto mb-2 text-cyan-400" />,
    ];
    return icons[index] || null;
  };

  const TechnicalImplementation = ({ impl }: { impl: any }) => {
    if (!impl) return null;
    return (
      <div className="mt-8 pt-8 border-t border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">{impl.title}</h3>
        {impl.techDecisions && (
          <div className="mb-6">
            <h4 className="font-semibold text-cyan-400 mb-2">{impl.techDecisions.title}</h4>
            <ul className="space-y-2">
              {impl.techDecisions.points.map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-neutral-300"><CheckCircle size={16} className="mt-1 shrink-0 text-green-500" /><span>{point}</span></li>
              ))}
            </ul>
          </div>
        )}
        {impl.architectureChoice && (
          <div className="mb-6">
            <h4 className="font-semibold text-cyan-400 mb-2">{impl.architectureChoice.title}</h4>
            <p className="text-neutral-300 whitespace-pre-wrap">{impl.architectureChoice.body}</p>
          </div>
        )}
        {impl.whyThisMattered && (
          <div className="mb-6">
            <h4 className="font-semibold text-cyan-400 mb-2">{impl.whyThisMattered.title}</h4>
            <p className="text-neutral-300">{impl.whyThisMattered.body}</p>
          </div>
        )}
        {impl.aiIntegrationChallenge && (
          <div className="mb-6">
            <h4 className="font-semibold text-cyan-400 mb-2">{impl.aiIntegrationChallenge.title}</h4>
            <p className="text-neutral-300 mb-2">{impl.aiIntegrationChallenge.body}</p>
            <ul className="space-y-2">
              {impl.aiIntegrationChallenge.points.map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-neutral-300"><CheckCircle size={16} className="mt-1 shrink-0 text-green-500" /><span>{point}</span></li>
              ))}
            </ul>
          </div>
        )}
        {impl.productInsight && (
          <div>
            <h4 className="font-semibold text-cyan-400 mb-2">{impl.productInsight.title}</h4>
            <p className="text-neutral-300">{impl.productInsight.body}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen w-full bg-[#050505] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      <FluidBackground />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 pt-8">
        <div className="mb-48">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            
            <motion.div 
              className="col-span-1 md:col-span-2 lg:col-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col justify-between group hover:border-white/20 transition-colors relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -right-10 -top-10 w-48 h-48 md:w-64 md:h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors" />
              
              <div>
                <div className="flex justify-between items-start mb-4">
                    <motion.div whileHover={{ rotate: 15 }}>
                      <Image src={portfolioData.profile.logoUrl} alt="Logo" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />
                    </motion.div>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-300 mb-2 tracking-tight">
                  {portfolioData.profile.name}
                </h1>
                <p className="text-xl md:text-2xl font-medium text-neutral-300 mb-1">
                  {portfolioData.profile.role}
                </p>
                <p className="text-lg md:text-xl text-cyan-400 font-medium mb-4">{portfolioData.profile.tagline}</p>

                <p className="text-sm md:text-base text-neutral-400 max-w-3xl leading-relaxed">
                  {portfolioData.profile.bio}
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
            
            <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {portfolioData.socialProof.map((stat, i) => (
                        <motion.div 
                            key={i} 
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center group hover:border-white/20 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <StatIcon index={i} />
                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">{stat.metric}</h3>
                            <p className="text-xs md:text-sm text-neutral-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">Shipped Products</h2>
              <div className="grid grid-cols-1 gap-6">
                {shippedProducts.map((project, i) => (
                  <motion.div
                    layoutId={`card-${project.id}`}
                    key={project.id}
                    onClick={() => openView(project.id)}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all relative overflow-hidden group flex flex-col md:flex-row items-start gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-black/20 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Image src={project.logoUrl} alt={`${project.title} logo`} width={48} height={48} />
                    </div>
                    <div className='flex-1'>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-100 transition-colors">{project.heading}</h3>
                      <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStackBadge.map(tech => (
                          <span key={tech} className="text-[10px] font-mono uppercase tracking-widest border px-2 py-0.5 rounded-full text-cyan-400 border-cyan-900/50 bg-cyan-950/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-full md:w-auto flex items-center justify-end gap-2 ml-auto">
                        {project.secondaryLink && (
                           <Link href={project.secondaryLink.link} className="text-xs font-bold text-neutral-300 hover:text-white transition-colors px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                {project.secondaryLink.text}
                           </Link>
                        )}
                       <a href={project.cta.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold bg-cyan-500 text-black hover:bg-cyan-400 px-4 py-2 rounded-full transition-colors flex items-center gap-1">
                           {project.cta.text}
                       </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((project, i) => (
                  <motion.div
                    layoutId={`card-${project.id}`}
                    key={project.id}
                    onClick={() => openView(project.id)}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all relative overflow-hidden group min-h-[180px] md:min-h-[220px] flex flex-col justify-end"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="absolute top-4 right-4 transition-all duration-300">
                      <Image src={project.logoUrl} alt={`${project.title} logo`} width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" />
                    </div>
                    <div className="relative z-10">
                       <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-100 transition-colors">{project.title}</h3>
                       <p className="text-sm text-neutral-400 line-clamp-2">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

             <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight text-center">My Stack</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioData.skills.map((skillCategory, i) => (
                        <motion.div 
                            key={i} 
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-white/20 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-bold text-cyan-400 mb-4">{skillCategory.title}</h3>
                            <ul className="space-y-2">
                                {skillCategory.items.map((item, j) => (
                                    <li key={j} className="text-sm text-neutral-300 flex items-start gap-2">
                                        <CheckCircle size={14} className="shrink-0 mt-1 text-green-500/70" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-24">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed whitespace-pre-wrap mb-6">{portfolioData.profile.aboutPreview}</p>
                    <Link href="/about" className="font-bold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                        Read My Full Journey <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw] flex flex-col items-center">
        <AnimatePresence>
          {showAiHint && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9, transition: { duration: 0.2 } }}
              className="mb-4 w-max"
            >
              <div className="bg-cyan-500 text-black text-xs font-bold rounded-full shadow-lg shadow-cyan-500/40 relative pl-4 pr-3 py-2 flex items-center gap-2">
                <p>Chat with my AI Twin!</p>
                <button
                  onClick={() => setShowAiHint(false)}
                  className="p-1 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                >
                  <X size={12} />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-[8px] border-t-cyan-500"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <TooltipProvider>
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-full flex gap-6 md:gap-8 shadow-2xl items-center ring-1 ring-white/5">
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="cursor-pointer text-neutral-400 hover:text-white flex flex-col items-center gap-1 group relative" onClick={closeAllViews}>
              <Globe size={22} />
            </motion.button>
            
            <div className="h-6 w-[1px] bg-white/10"></div>
            
            <Tooltip>
              <TooltipTrigger asChild>
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
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-black/50 border-cyan-500/30 text-cyan-300 backdrop-blur-md">
                <p>Chat with my AI Twin</p>
              </TooltipContent>
            </Tooltip>

            <div className="h-6 w-[1px] bg-white/10"></div>

            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="cursor-pointer text-neutral-400 hover:text-white flex flex-col items-center gap-1 group relative" onClick={() => openView('contact')}>
              <Contact size={22} />
            </motion.button>
          </div>
        </TooltipProvider>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-40 flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-4 pt-16 pb-28" onClick={closeAllViews}>
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              onClick={(e) => e.stopPropagation()}
              className="w-full md:max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] h-auto"
            >
              <button onClick={closeAllViews} className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-white/20 z-20 text-white border border-white/10"><X size={20} /></button>
              
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="h-40 md:h-48 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 relative flex items-center justify-center">
                   <div className="absolute -bottom-8 left-6 md:left-12 flex items-end gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 p-2 flex items-center justify-center bg-black/30 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <Image src={selectedProject.logoUrl} alt={`${selectedProject.title} logo`} width={80} height={80} />
                      </div>
                      <div className="pb-1">
                         <h2 className="text-2xl md:text-4xl font-bold text-white">{selectedProject.heading}</h2>
                      </div>
                   </div>
                </div>

                <div className="p-6 md:p-12 pt-16 md:pt-16">
                  <p className="text-base md:text-lg text-neutral-300 mb-8 leading-relaxed max-w-3xl">{selectedProject.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                     <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2"><Rocket size={14} /> Key Metrics</h4>
                        <ul className="space-y-3">
                          {selectedProject.metrics.map((m, i) => (<li key={i} className="text-sm text-neutral-300 flex items-center gap-3"><CheckCircle size={16} className="text-green-500"/>{m}</li>))}
                        </ul>
                     </div>
                     <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2"><Cpu size={14} /> Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStackBadge.map(tech => (<span key={tech} className="px-3 py-1.5 bg-black/40 text-neutral-200 text-xs md:text-sm rounded-lg border border-white/10">{tech}</span>))}
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-wrap gap-4 items-center">
                    <a href={selectedProject.cta.link} target="_blank" rel="noopener noreferrer" className={`w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]`}>
                      {selectedProject.cta.text}
                    </a>
                    {selectedProject.secondaryLink && (
                        <Link href={selectedProject.secondaryLink.link} className="font-bold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                            {selectedProject.secondaryLink.text}
                        </Link>
                    )}
                  </div>
                  
                  <TechnicalImplementation impl={(selectedProject as any).technicalImplementation} />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeView === 'chat' && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 pb-28" onClick={closeAllViews}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 50 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="w-full md:max-w-lg bg-[#0a0a0a]/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-900/20 overflow-hidden flex flex-col max-h-[85vh] h-full"
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
                   <div className="h-full flex flex-col justify-center items-center text-center text-neutral-500 p-4">
                     <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                         <Sparkles className="w-8 h-8 text-cyan-500" />
                     </div>
                     <p className="text-lg font-medium text-white mb-2">System Online ⚡️</p>
                     <div className="text-sm text-neutral-400 space-y-2 max-w-sm">
                         <p>I am Umar's AI Digital Twin. I have access to his entire neural network—from his 0-to-1 Product Management strategies to his obsession with Firebase Studio.</p>
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
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-sm pb-24" onClick={closeAllViews}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{type: 'spring', stiffness: 300, damping: 25}}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 m-4 shadow-2xl relative"
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
