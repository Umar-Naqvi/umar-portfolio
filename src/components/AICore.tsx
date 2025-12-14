'use client';

import { useChat } from 'ai/react';
import { motion } from 'framer-motion';
import { SendHorizonal, Sparkles, X, User, Bot } from 'lucide-react';
import { FormEvent, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type AICoreProps = {
  isOpen: boolean;
  onClose: () => void;
};

const initialMessages = [
  {
    id: 'initial-greeting',
    role: 'assistant' as const,
    content: "Hey there! I'm Umar's AI Twin. Feel free to ask me anything about his projects, skills, or career. How can I help you today? 🚀",
  }
];

export default function AICore({ isOpen, onClose }: AICoreProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages, append } = useChat({
    initialMessages,
    api: '/api/chat',
    onFinish: () => {
      scrollToBottom();
    }
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if(!isOpen) {
      setTimeout(() => setMessages(initialMessages), 500);
    }
  }, [isOpen, setMessages]);

  useEffect(scrollToBottom, [messages]);
  
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userInput = input;
    if (!userInput.trim()) return;

    await append({
      role: 'user',
      content: userInput,
    });
  
    // Clear input after appending
    handleInputChange({ target: { value: '' } } as any);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="w-full h-[85vh] md:h-auto md:max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:max-h-[80vh]"
      >
        <header className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-900/50 border border-cyan-500/30 rounded-lg">
              <Sparkles className="text-cyan-400" size={20} />
            </div>
            <div>
              <h2 className="font-bold text-white">AI Twin</h2>
              <p className="text-xs text-neutral-400">Powered by Gemini 2.5 Flash</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-neutral-400 hover:text-white">
            <X size={20} />
          </Button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar">
          {messages.map((m) => (
            <div key={m.id} className={`flex items-start gap-3 w-full ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.role !== 'user' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shrink-0">
                  <Bot size={18} className="text-black"/>
                </div>
              )}
              <div className={`p-3 rounded-2xl max-w-sm md:max-w-md break-words ${m.role === 'user' ? 'bg-white/10' : 'bg-transparent'}`}>
                <p className="text-sm text-neutral-200 leading-relaxed whitespace-pre-wrap">{m.content}</p>
              </div>
               {m.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <User size={18} />
                </div>
              )}
            </div>
          ))}
           <div ref={messagesEndRef} />
        </div>

        <footer className="p-4 md:p-6 border-t border-white/10 shrink-0">
          <form onSubmit={handleFormSubmit} className="flex items-center gap-3">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about projects, skills, contact..."
              className="bg-black/40 border-white/10 h-12 focus-visible:ring-cyan-500"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" className="h-12 w-12 bg-cyan-500 hover:bg-cyan-400 text-black shrink-0" disabled={isLoading || !input.trim()}>
              <SendHorizonal size={20} />
            </Button>
          </form>
        </footer>
      </motion.div>
    </div>
  );
}
