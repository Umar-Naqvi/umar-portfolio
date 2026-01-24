
import Link from 'next/link';
import FluidBackground from '@/components/FluidBackground';
import { ArrowLeft } from 'lucide-react';

const aboutData = {
    title: "Builder. Engineer. Product Thinker.",
    body: "I'm a product engineer who combines strategic product thinking with hands-on technical execution. I don't just design features—I architect systems, write code, and deploy to production.",
    whatMakesMeDifferent: {
        title: "What makes me different:",
        content: "I use AI-native workflows (Cursor, Claude, ChatGPT) not just for code generation, but for architectural planning, debugging, and rapid prototyping. This allows me to compress 3-month development cycles into 2-3 weeks without sacrificing quality."
    },
    coreBelief: {
        title: "My Core Belief:",
        content: "The best product people ship code. Understanding technical constraints isn't optional—it's the foundation of good product decisions."
    },
    technicalFoundation: {
        title: "Technical Foundation",
        fullStack: {
            title: "Full-Stack Capabilities:",
            points: [
                "Frontend: React, Next.js, TypeScript, Tailwind CSS",
                "Backend: Firebase (Auth, Firestore, Cloud Functions, Hosting)",
                "AI Integration: Gemini API, prompt engineering, LLM workflow design",
                "DevOps: Firebase App Hosting, PWA deployment, performance optimization",
            ]
        },
        productSkills: {
            title: "Product Skills:",
            points: [
                "User Research & Persona Development",
                "PRD Writing & MVP Scoping",
                "Metrics Framework (AARRR, North Star)",
                "Go-to-Market Strategy",
            ]
        },
        aiAccelerated: {
            title: "AI-Accelerated Development:",
            intro: "I leverage LLMs for:",
            points: [
                "Rapid architecture prototyping",
                "Code generation with human oversight",
                "Technical documentation",
                "Debugging complex issues",
            ],
            outro: "This doesn't replace engineering—it amplifies it. I review, refactor, and own every line of code that ships."
        }
    },
    myJourney: {
        title: "My Journey",
        fromPMtoPE: {
            title: "From Product Manager to Product Engineer:",
            content: "My MBA taught me to think strategically about markets and users. But I realized the best product people don't just write specs—they ship. So I taught myself to code using AI-accelerated learning.\n\nIn 6 months, I went from \"can read code\" to \"built and deployed 3 production applications.\" This isn't about being a developer OR a PM—it's about being both. I can discuss go-to-market strategy in the morning and debug Firebase security rules in the afternoon."
        }
    }
}

export default function AboutPage() {
    return (
        <main className="min-h-screen w-full bg-[#050505] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
            <FluidBackground />
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

            <div className="relative z-10 max-w-4xl mx-auto p-4 md:p-8 pt-16 pb-24">
                <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
                    <ArrowLeft size={16} />
                    Back to Portfolio
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-300 mb-6 tracking-tight">
                    {aboutData.title}
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-6">{aboutData.body}</p>

                <div className="space-y-4 text-neutral-400 leading-relaxed mb-12">
                   <p><strong className="text-neutral-200">{aboutData.whatMakesMeDifferent.title}</strong> {aboutData.whatMakesMeDifferent.content}</p>
                   <p><strong className="text-neutral-200">{aboutData.coreBelief.title}</strong> {aboutData.coreBelief.content}</p>
                </div>
                
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">{aboutData.technicalFoundation.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold text-cyan-400 mb-3">{aboutData.technicalFoundation.fullStack.title}</h3>
                            <ul className="space-y-2 list-disc list-inside text-neutral-300">
                                {aboutData.technicalFoundation.fullStack.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-cyan-400 mb-3">{aboutData.technicalFoundation.productSkills.title}</h3>
                            <ul className="space-y-2 list-disc list-inside text-neutral-300">
                                {aboutData.technicalFoundation.productSkills.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                             <h3 className="font-semibold text-cyan-400 mb-3">{aboutData.technicalFoundation.aiAccelerated.title}</h3>
                             <p className="text-neutral-300 mb-2">{aboutData.technicalFoundation.aiAccelerated.intro}</p>
                             <ul className="space-y-2 list-disc list-inside text-neutral-300 mb-3">
                                {aboutData.technicalFoundation.aiAccelerated.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                            <p className="text-neutral-400 italic">{aboutData.technicalFoundation.aiAccelerated.outro}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">{aboutData.myJourney.title}</h2>
                    <div className="bg-cyan-950/20 p-6 rounded-xl border border-cyan-500/20">
                      <h3 className="font-semibold text-cyan-400 mb-3">{aboutData.myJourney.fromPMtoPE.title}</h3>
                      <p className="text-neutral-300 leading-relaxed whitespace-pre-wrap">{aboutData.myJourney.fromPMtoPE.content}</p>
                    </div>
                </div>

            </div>
        </main>
    )
}
