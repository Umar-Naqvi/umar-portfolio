'use client';

import { useChat } from 'ai/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Sparkles, Send, X, Terminal, User, Bot } from 'lucide-react';

interface AICoreProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AICore({ isOpen, onClose }: AICoreProps) {
  const { messages, input, setInput, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    handleSubmit(e);
  };
  
  const handleQuickReply = (question: string) => {
    setInput(question);
    // Use a timeout to allow React to update the input state before submitting
    setTimeout(() => {
      formRef.current?.requestSubmit();
    }, 0);
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 backdrop-blur-md p-0 md:p-4 md:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full h-[90vh] md:h-auto md:max-h-[80vh] md:w-full md:max-w-lg md:rounded-3xl bg-[#0a0a0a] border border-cyan-500/30 shadow-2xl shadow-cyan-900/20 overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-cyan-950/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <Terminal size={18} className="text-cyan-400" />
              </div>
              <div>
                  <span className="block font-bold text-sm text-white">AI Twin System</span>
                  <span className="block text-[10px] text-cyan-300/60 font-mono">ONLINE • GEMINI-1.5-FLASH</span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm custom-scrollbar bg-[url('/grid.svg')] bg-opacity-5 min-h-0">
            {messages.length === 0 && (
              <div className="text-center text-neutral-500 mt-24 flex flex-col items-center px-8">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <Sparkles className="w-8 h-8 text-cyan-500" />
                </div>
                <p className="text-lg font-medium text-white mb-2">System Initialized</p>
                <p className="text-sm text-neutral-400">Ask about experience, project details, or request contact info.</p>
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
                  <div className="leading-relaxed whitespace-pre-wrap">
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

          {/* Input Area */}
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
    </AnimatePresence>
  );
}
