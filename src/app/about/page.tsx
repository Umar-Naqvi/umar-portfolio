
import Link from 'next/link';
import { ArrowLeft, Rocket, Target, Lightbulb, Workflow, BarChart3, Users } from 'lucide-react';

const philosophyPoints = [
    {
        icon: <Rocket className="text-cyan-400" size={24} />,
        title: "Ship to Learn, Don't Plan to Perfection",
        body: "I built BillFlow's MVP in 1 day to validate demand. Most PMs would spend 2 weeks writing specs. I learned more from 5 real users in 1 week than I would from 10 stakeholder meetings."
    },
    {
        icon: <Lightbulb className="text-cyan-400" size={24} />,
        title: "AI is a Tool, Not a Strategy",
        body: "AI Twin and NoteVault use Gemini API, but AI isn't the product—it's the implementation layer. The product is 'better UX through intelligence.' I focus on user problems, not shiny tech."
    },
    {
        icon: <Target className="text-cyan-400" size={24} />,
        title: "Constraints Breed Creativity",
        body: "A recent EdTech assignment had strict requirements (Grade 3-6 math, 10 minutes, prevent drop-off). I chose the hardest topic (algebra variables) to prove gamification works on difficult concepts."
    },
    {
        icon: <BarChart3 className="text-cyan-400" size={24} />,
        title: "Metrics > Opinions",
        body: "For BillFlow, I track invoices per user, retention, and feature adoption. For my EdTech projects, I proposed Mission Completion Rate as the North Star. Data tells you if the product works. Opinions don't."
    },
    {
        icon: <Users className="text-cyan-400" size={24} />,
        title: "Build for the Worst Case",
        body: "BillFlow was designed for shop owners with unreliable internet in rural India. If the product works for them, it works for everyone. Design for your least tech-savvy user."
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen w-full text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
            <div className="relative z-10 max-w-4xl mx-auto p-4 md:p-8 pt-16 pb-24">
                <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
                    <ArrowLeft size={16} />
                    Back to Portfolio
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-300 mb-6 tracking-tight">
                    I build what I design—using AI as my implementation layer.
                </h1>
                
                <div className="space-y-6 text-lg md:text-xl text-neutral-300 leading-relaxed mb-16">
                    <p>I don't write code traditionally. Instead, I architect products and use AI-native workflows to ship them. This allows me to compress months of development into days while maintaining deep technical understanding.</p>
                </div>

                <div className="glass-card rounded-3xl p-8 md:p-12 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">How I Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">Understand the Problem</h3>
                                    <p className="text-sm text-neutral-400">Deep dive into user research, market analysis, and persona development to find the real friction points.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">Architect the Solution</h3>
                                    <p className="text-sm text-neutral-400">Design data models, user flows, and system architecture. Choosing the right tech (e.g., Firestore vs SQL) for the use case.</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">Direct AI to Implement</h3>
                                    <p className="text-sm text-neutral-400">Using Cursor, Claude, and Gemini as my development team to implement the architecture I designed.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">4</div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">Ship and Iterate</h3>
                                    <p className="text-sm text-neutral-400">Deploying to real users and iterating based on analytics and feedback. Moving at the speed of thought.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">My Product Philosophy</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {philosophyPoints.map((point, i) => (
                            <div key={i} className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-cyan-500/30 transition-all">
                                <div className="shrink-0 p-3 bg-white/5 rounded-xl border border-white/10 h-max">
                                    {point.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                                    <p className="text-neutral-400 leading-relaxed">{point.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-cyan-950/20 p-8 md:p-12 rounded-3xl border border-cyan-500/20">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Technical Depth Without Manual Coding</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-neutral-300 leading-relaxed">
                        <p>Most PMs hand off specs to engineers and wait weeks. I compress that cycle. I understand database design, API architecture, and security models because I've architected them myself.</p>
                        <p>I don't manually write production code—AI does that. But I validate, test, and iterate. This makes me a product manager with zero implementation bottlenecks and the ability to speak the language of engineers natively.</p>
                    </div>
                </div>

            </div>
        </main>
    )
}
