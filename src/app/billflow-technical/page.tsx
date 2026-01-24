
import Link from 'next/link';
import FluidBackground from '@/components/FluidBackground';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';

const content = {
    hero: {
        title: "BillFlow: Technical Deep Dive",
        subtitle: "How I built an offline-first invoicing platform from scratch",
        link: { text: "View Live Product", url: "https://billflow.shop" }
    },
    problem: {
        title: "The Problem I Solved",
        userPain: {
            title: "User Pain Point:",
            body: "Indian SMB owners (like my friend Tameem, a furniture shop owner) were trapped between two bad options:\n1. Pen & paper - Fast but error-prone, no records\n2. Excel - Professional but slow, requires internet, frustrating UX"
        },
        marketGap: {
            title: "The Market Gap:",
            body: "No existing tool was BOTH offline-first AND mobile-native. Every \"invoicing app\" assumed stable internet—a luxury most small shops don't have."
        },
        myInsight: {
            title: "My Insight:",
            body: "Build for the worst-case scenario (zero internet) and everything else becomes easier."
        }
    },
    challenges: [
        {
            title: "Challenge 1: Offline-First Data Architecture",
            problem: "Firebase is cloud-first. How do you build a reliable offline experience when the database expects internet?",
            solution: [
                "Implemented Firebase's offline persistence layer",
                "Built custom conflict resolution for simultaneous edits from multiple devices",
                "Used Firestore's atomic transactions for stock updates (critical for inventory accuracy)"
            ],
            codeDecision: {
                title: "Code Decision:",
                body: "I chose Firestore over a traditional SQL database because:",
                points: [
                    "Built-in real-time sync (no custom WebSocket code)",
                    "Offline persistence out-of-the-box",
                    "Simpler security rules for user data isolation"
                ]
            },
            tradeOff: {
                title: "Trade-off:",
                body: "This meant accepting eventual consistency instead of strict ACID guarantees—acceptable for SMB invoicing but would be wrong for, say, banking."
            }
        },
        {
            title: "Challenge 2: Mobile-First UX with Complex Features",
            problem: "Invoicing requires complex workflows (customer selection, item search, calculations, PDF generation) but must feel instant on a mobile device.",
            solution: [
                "Built the \"Unified Invoice Hub\" - a dual-view interface (All Invoices vs. By Customer)",
                "Implemented virtual scrolling for large customer lists",
                "Used React Context to avoid prop-drilling in deeply nested components",
                "Lazy-loaded PDF generation (only renders when user clicks \"Download\")"
            ],
            performanceResult: {
                title: "Performance Result:",
                points: [
                    "Initial page load: <2 seconds on 3G",
                    "Invoice creation: <10 seconds end-to-end",
                    "Offline invoice save: Instant (localStorage buffer)"
                ]
            }
        },
        {
            title: "Challenge 3: Payment UX for Low-Tech Users",
            problem: "UPI is ubiquitous in India, but getting customers to scan QR codes required making it brain-dead simple.",
            solution: [
                "Auto-generate UPI QR codes from business details",
                "Created a shareable QR image (PNG) with logo and invoice details",
                "Integrated native device share API for WhatsApp/SMS distribution"
            ],
            whyThisMatters: {
                title: "Why This Matters:",
                body: "Shop owners don't email invoices in India—they WhatsApp them. I built for the actual behavior, not the \"ideal\" workflow."
            }
        }
    ],
    architecture: {
        title: "System Architecture",
        techStack: {
            title: "Tech Stack Decisions:",
            frontend: { title: "Frontend:", body: "Next.js (App Router) - For PWA support and optimal performance\nTypeScript - Type safety across 50+ components\nTailwind + ShadCN UI - Rapid, consistent design system" },
            backend: { title: "Backend:", body: "Firebase Auth - Secure user management\nFirestore - Real-time database with offline support\nCloud Storage - Invoice PDF archival" }
        },
        dataModel: {
            title: "Data Model:",
            body: "Every document (invoices, products, customers) includes a userId field. This is critical:\n- Ensures data isolation (User A can't see User B's invoices)\n- Simplifies security rules (no complex nested queries)\n- Allows for walk-in invoices (not tied to a customer but still owned by the business)"
        },
        security: {
            title: "Security Approach:",
            body: "All Firestore rules are userId-based. Even if a bug exposes a document ID, cross-user data leaks are impossible."
        }
    },
    deployment: {
        title: "Deployment & Performance",
        hosting: { title: "Hosting:", body: "Firebase App Hosting (auto-deploys from GitHub)\nPWA manifest for \"Add to Home Screen\" functionality" },
        metrics: { title: "Performance Metrics:", body: "Lighthouse Score: 98/100 (Performance)\nFirst Contentful Paint: <1.5s\nTime to Interactive: <2.5s" },
        realWorld: { title: "Real-World Usage:", body: "Tested with 5 beta users (shop owners)\nHandles invoices up to 50 line items without lag\nOffline invoice creation works even with complete network loss" }
    },
    learnings: {
        title: "What I Learned",
        technical: {
            title: "Technical Lessons:",
            points: [
                "**Offline-first is a design philosophy, not a feature.** Every decision (data structure, UX flow, error handling) must assume zero connectivity.",
                "**Firebase is incredible for solo builders.** I shipped this in 3 weeks because I didn't have to build auth, database, or hosting from scratch.",
                "**AI-accelerated development is real.** I used Claude/Cursor for boilerplate, debugging, and architecture validation—but I reviewed every line. The LLM suggests, I decide."
            ]
        },
        product: {
            title: "Product Lessons:",
            points: [
                "**Build for the worst-case user.** My target user has a $100 Android phone and unreliable 3G. If it works for them, it works for everyone.",
                "**Speed trumps features.** I cut 10+ \"nice-to-have\" features from V1 to ship faster. Users don't care about what's missing—they care about what works.",
                "**Metrics matter from Day 1.** I built analytics hooks before launch so I could see: Where do users drop off? What features get used?"
            ]
        }
    }
};

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="mb-16">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-300 mb-6 tracking-tight">{title}</h2>
        {children}
    </section>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
     <div className="mb-8">
        <h3 className="text-xl font-semibold text-cyan-400 mb-3">{title}</h3>
        <div className="space-y-4 text-neutral-300 leading-relaxed">{children}</div>
    </div>
);

export default function BillflowTechnicalPage() {
    return (
        <main className="min-h-screen w-full bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
            <FluidBackground />
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

            <div className="relative z-10 max-w-4xl mx-auto p-4 md:p-8 pt-16 pb-24">
                <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
                    <ArrowLeft size={16} />
                    Back to Portfolio
                </Link>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-300 mb-4 tracking-tight">
                        {content.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-300 mb-6">{content.hero.subtitle}</p>
                    <a href={content.hero.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                        {content.hero.link.text} <ExternalLink size={20}/>
                    </a>
                </div>

                <Section title={content.problem.title}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-6">
                        <SubSection title={content.problem.userPain.title}><p className="whitespace-pre-wrap">{content.problem.userPain.body}</p></SubSection>
                        <SubSection title={content.problem.marketGap.title}><p>{content.problem.marketGap.body}</p></SubSection>
                        <SubSection title={content.problem.myInsight.title}><p className="font-medium text-cyan-300">{content.problem.myInsight.body}</p></SubSection>
                    </div>
                </Section>
                
                <Section title="Technical Challenges & Solutions">
                    {content.challenges.map((challenge, i) => (
                         <div key={i} className="mb-12 p-6 bg-white/5 border border-white/10 rounded-2xl">
                             <h3 className="text-2xl font-bold text-white mb-4">{challenge.title}</h3>
                             <p className="italic text-neutral-400 mb-4">"{challenge.problem}"</p>
                             <ul className="space-y-2 mb-6">
                                {challenge.solution.map((item, j) => <li key={j} className="flex items-start gap-3"><CheckCircle size={18} className="text-green-500 shrink-0 mt-1"/><span>{item}</span></li>)}
                             </ul>
                             {challenge.codeDecision && (
                                <div className="p-4 bg-black/20 rounded-lg border border-white/5 mb-4">
                                    <h4 className="font-semibold text-neutral-200 mb-2">{challenge.codeDecision.title}</h4>
                                    <p className="text-neutral-400 mb-2">{challenge.codeDecision.body}</p>
                                    <ul className="text-neutral-400 text-sm space-y-1 list-disc list-inside">
                                        {challenge.codeDecision.points.map((p, k) => <li key={k}>{p}</li>)}
                                    </ul>
                                </div>
                             )}
                             {challenge.tradeOff && (
                                <div className="p-4 bg-black/20 rounded-lg border border-white/5">
                                    <h4 className="font-semibold text-neutral-200 mb-2">{challenge.tradeOff.title}</h4>
                                    <p className="text-neutral-400">{challenge.tradeOff.body}</p>
                                </div>
                             )}
                             {challenge.performanceResult && (
                                <div className="p-4 bg-black/20 rounded-lg border border-white/5">
                                    <h4 className="font-semibold text-neutral-200 mb-2">{challenge.performanceResult.title}</h4>
                                    <ul className="text-neutral-400 text-sm space-y-1 list-disc list-inside">
                                         {challenge.performanceResult.points.map((p, k) => <li key={k}>{p}</li>)}
                                    </ul>
                                </div>
                             )}
                             {challenge.whyThisMatters && (
                                <div className="p-4 bg-black/20 rounded-lg border border-white/5">
                                    <h4 className="font-semibold text-neutral-200 mb-2">{challenge.whyThisMatters.title}</h4>
                                    <p className="text-neutral-400">{challenge.whyThisMatters.body}</p>
                                </div>
                             )}
                         </div>
                    ))}
                </Section>

                <Section title={content.architecture.title}>
                     <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">{content.architecture.techStack.title}</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                               <div className="p-4 bg-white/5 rounded-lg border border-white/10"><h4 className="font-semibold mb-2">{content.architecture.techStack.frontend.title}</h4><p className="whitespace-pre-wrap text-neutral-400 text-sm">{content.architecture.techStack.frontend.body}</p></div>
                               <div className="p-4 bg-white/5 rounded-lg border border-white/10"><h4 className="font-semibold mb-2">{content.architecture.techStack.backend.title}</h4><p className="whitespace-pre-wrap text-neutral-400 text-sm">{content.architecture.techStack.backend.body}</p></div>
                            </div>
                        </div>
                        <SubSection title={content.architecture.dataModel.title}><p className="whitespace-pre-wrap">{content.architecture.dataModel.body}</p></SubSection>
                        <SubSection title={content.architecture.security.title}><p>{content.architecture.security.body}</p></SubSection>
                    </div>
                </Section>
                
                <Section title={content.deployment.title}>
                     <div className="grid md:grid-cols-2 gap-6">
                         <div className="p-4 bg-white/5 rounded-lg border border-white/10"><h4 className="font-semibold mb-2">{content.deployment.hosting.title}</h4><p className="whitespace-pre-wrap text-neutral-400 text-sm">{content.deployment.hosting.body}</p></div>
                         <div className="p-4 bg-white/5 rounded-lg border border-white/10"><h4 className="font-semibold mb-2">{content.deployment.metrics.title}</h4><p className="whitespace-pre-wrap text-neutral-400 text-sm">{content.deployment.metrics.body}</p></div>
                         <div className="md:col-span-2 p-4 bg-white/5 rounded-lg border border-white/10"><h4 className="font-semibold mb-2">{content.deployment.realWorld.title}</h4><p className="whitespace-pre-wrap text-neutral-400 text-sm">{content.deployment.realWorld.body}</p></div>
                     </div>
                </Section>

                <Section title={content.learnings.title}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">{content.learnings.technical.title}</h3>
                            <ul className="space-y-3 text-neutral-300">
                                {content.learnings.technical.points.map((p, i) => <li key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-neutral-100">$1</strong>') }}/>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">{content.learnings.product.title}</h3>
                            <ul className="space-y-3 text-neutral-300">
                                {content.learnings.product.points.map((p, i) => <li key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-neutral-100">$1</strong>') }}/>)}
                            </ul>
                        </div>
                    </div>
                </Section>

                <Section title="Bonus: AI Twin - A RAG Implementation">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-8">
                        <p className="text-lg text-neutral-300">While building my portfolio, I realized: "Why make recruiters read a PDF resume when they can just ask questions?"</p>
                        
                        <div>
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">The Build:</h3>
                            <ul className="space-y-2 list-disc list-inside text-neutral-300">
                                <li>Built a custom RAG (Retrieval-Augmented Generation) chatbot using Gemini 2.5 Flash</li>
                                <li>Trained it on all my project docs (BillFlow, DukaanBill, NoteVault), resume, and methodologies</li>
                                <li>Custom chat UI with suggested prompts and error handling</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">Technical Stack:</h3>
                            <ul className="space-y-2 list-disc list-inside text-neutral-300">
                                <li>Gemini 2.5 Flash API (for speed + cost efficiency)</li>
                                <li>Vector embeddings for context retrieval</li>
                                <li>Next.js API routes for backend</li>
                                <li>Responsive modal interface</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">Why This Matters:</h3>
                            <p className="text-neutral-300">This isn't a resume gimmick—it's a demonstration of practical AI implementation. I can architect, build, and deploy AI features that solve real UX problems.</p>
                        </div>
                        
                        <p className="text-cyan-400 font-medium">Try it: Click the ✨ icon on my portfolio to chat with my AI twin.</p>
                    </div>
                </Section>

            </div>
        </main>
    )
}
