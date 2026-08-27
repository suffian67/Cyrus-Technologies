import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Reveal } from '@/components/site-interactions'

import {
    ArrowUpRight,
    Compass,
    Layers3,
    MoveUpRight,
} from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { ContactSection } from '@/components/home/contact-section'

export const metadata = {
    title: 'About Cyrus Technologies',
    description:
        'Meet Cyrus Technologies, an independent cybersecurity partner for ambitious organizations.',
}

const principles = [
    {
        number: '01',
        title: 'Clarity',
        text: 'Complex security problems should become clear decisions. We remove the noise and focus attention where it creates the most value.',
        icon: Compass,
    },
    {
        number: '02',
        title: 'Context',
        text: 'Security does not exist in isolation. Our recommendations account for your people, technology, priorities, and the reality of your business.',
        icon: Layers3,
    },
    {
        number: '03',
        title: 'Momentum',
        text: 'Good security should create confidence, not friction. We build programs that strengthen protection while keeping your organization moving.',
        icon: MoveUpRight,
    },
]

const workingStyle = [
    [
        '01',
        'Listen first',
        'We start by understanding your environment, your priorities, and the decisions that matter.',
    ],
    [
        '02',
        'Find the signal',
        'We separate meaningful exposure from the noise and focus effort where it has the greatest impact.',
    ],
    [
        '03',
        'Move together',
        'We work alongside your team to turn recommendations into practical, lasting improvements.',
    ],
]

export default function AboutPage() {
    return (
        <main>
            <Header />

            {/* =========================================================
          HERO
      ========================================================= */}

            {/* <PageHero
                eyebrow="About Cyrus Technologies"
                index="01"
                title="Security expertise"
                highlight="with a human edge."
                description="We help ambitious organizations turn cybersecurity into a competitive advantage through practical strategy, seasoned operators, and technology that makes complex environments easier to understand."
            /> */}
            <PageHero
                eyebrow="About Cyrus Technologies"
                index="01"
                title="Security expertise"
                highlight="with a human edge."
                description="We help ambitious organizations turn cybersecurity into a competitive advantage through practical strategy, seasoned operators, and technology that makes complex environments easier to understand."
                backgroundImage="/about-us.jpg"
            />

            {/* =========================================================
          POINT OF VIEW — WHITE
      ========================================================= */}

            <section className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
                <div className="container">

                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                        <Reveal>
                            <p className="eyebrow">
                                Our point of view
                            </p>

                            <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Make security
                                <br />
                                <span className="text-[#1769E8]">
                                    move with you.
                                </span>
                            </h2>
                        </Reveal>

                        <Reveal className="lg:pt-10">
                            <div className="max-w-2xl space-y-6 text-base leading-8 text-[#52657D] md:text-lg">

                                <p>
                                    Cyrus Technologies was built for teams that need more than
                                    alerts and audits. We work alongside your people to create
                                    durable security programs that support growth.
                                </p>

                                <p>
                                    Our approach is direct, collaborative, and grounded in the
                                    moments that matter: before risk becomes an incident, and
                                    after the right decision creates momentum.
                                </p>

                            </div>

                            <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#1769E8]">
                                <span className="h-px w-10 bg-[#56A9FF]" />
                                Independent. Practical. Human-led.
                            </div>
                        </Reveal>

                    </div>
                </div>
            </section>

            {/* =========================================================
          PRINCIPLES — PALE BLUE
      ========================================================= */}

            <section className="relative overflow-hidden border-y border-[#DCE8F7] bg-[#F4F8FD] py-20 md:py-28">

                {/* Ambient glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-48 top-10 h-[500px] w-[500px] rounded-full bg-[#56A9FF]/[0.10] blur-[130px]"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#1769E8]/[0.05] blur-[120px]"
                />

                {/* Grid */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `
              linear-gradient(#1769E8 1px, transparent 1px),
              linear-gradient(90deg, #1769E8 1px, transparent 1px)
            `,
                        backgroundSize: '72px 72px',
                    }}
                />

                <div className="container relative">

                    <Reveal>
                        <div className="max-w-2xl">

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-[2px] w-10 bg-[#1769E8]" />

                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                    What we believe
                                </p>
                            </div>

                            <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Principles that shape
                                <br />
                                <span className="text-[#1769E8]">
                                    how we work.
                                </span>
                            </h2>

                        </div>
                    </Reveal>

                    <div className="mt-14 grid gap-4 md:grid-cols-3">

                        {principles.map(({ number, title, text, icon: Icon }) => (
                            <Reveal
                                key={number}
                                className="group"
                            >
                                <div className="relative h-full overflow-hidden rounded-2xl border border-[#D4E2F1] bg-gradient-to-br from-white via-white to-[#EAF4FF] p-7 shadow-[0_8px_30px_rgba(23,105,232,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-[#56A9FF]/50 hover:shadow-[0_24px_60px_rgba(23,105,232,0.12)]">

                                    {/* Number / icon */}
                                    <div className="flex items-start justify-between">

                                        <span className="text-xs font-bold tracking-[0.2em] text-[#1769E8]/40">
                                            {number}
                                        </span>

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1769E8]/10 bg-[#1769E8]/[0.06] text-[#1769E8] transition-all duration-300 group-hover:border-[#56A9FF]/30 group-hover:bg-[#1769E8]/10">
                                            <Icon
                                                size={20}
                                                strokeWidth={1.7}
                                            />
                                        </div>

                                    </div>

                                    <h3 className="mt-12 text-2xl font-semibold tracking-[-0.02em] text-[#172B45] transition-colors duration-300 group-hover:text-[#0B4D91]">
                                        {title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#64778E]">
                                        {text}
                                    </p>

                                    {/* Bottom accent */}
                                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#1769E8] to-[#56A9FF] transition-all duration-500 group-hover:w-full" />

                                    {/* Corner glow */}
                                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#56A9FF]/[0.08] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                </div>
                            </Reveal>
                        ))}

                    </div>
                </div>
            </section>

            {/* =========================================================
          HOW WE WORK — DARK BLUE
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#0B2742] py-20 md:py-28 lg:py-32">

                {/* Background lighting */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-60 -top-60 h-[600px] w-[600px] rounded-full bg-[#56A9FF]/[0.08] blur-[150px]"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-60 right-0 h-[550px] w-[550px] rounded-full bg-[#1769E8]/[0.12] blur-[150px]"
                />

                <div className="container relative">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                        <Reveal>

                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#56A9FF]">
                                How we work
                            </p>

                            <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-white md:text-5xl lg:text-6xl">
                                Sharp thinking.
                                <br />
                                <span className="text-[#56A9FF]">
                                    Clear action.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-md text-base leading-7 text-[#B8CDE0]">
                                We combine technical expertise with the context and care
                                required to make better decisions under pressure.
                            </p>

                        </Reveal>

                        <Reveal className="relative">

                            <div className="divide-y divide-white/10 border-y border-white/10">

                                {workingStyle.map(([number, title, text]) => (
                                    <div
                                        key={number}
                                        className="group grid gap-5 py-8 md:grid-cols-[70px_190px_1fr] md:items-start"
                                    >

                                        <span className="text-xs font-bold tracking-[0.2em] text-[#56A9FF]">
                                            {number}
                                        </span>

                                        <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#56A9FF]">
                                            {title}
                                        </h3>

                                        <p className="text-sm leading-7 text-[#AFC5D8]">
                                            {text}
                                        </p>

                                    </div>
                                ))}

                            </div>

                        </Reveal>

                    </div>
                </div>
            </section>

            {/* =========================================================
          CYRUS DIFFERENCE — BRIGHT BLUE
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#56A9FF] py-20 md:py-28">

                {/* Decorative circles */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full border border-[#0B2742]/10"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-24 h-[350px] w-[350px] rounded-full border border-[#0B2742]/10"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-32 -bottom-40 h-[400px] w-[400px] rounded-full bg-white/10 blur-[80px]"
                />

                <div className="container relative">

                    <Reveal>
                        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

                            <div>

                                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#0B2742]/65">
                                    The Cyrus difference
                                </p>

                                <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-[#061321] md:text-5xl lg:text-6xl">
                                    Less noise.
                                    <br />
                                    <span className="text-[#0B2742]">
                                        More confidence.
                                    </span>
                                </h2>

                            </div>

                            <div className="max-w-xl">

                                <p className="text-base leading-8 text-[#0B2742]/75 md:text-lg">
                                    We do not believe security has to feel complicated to be
                                    sophisticated. Our role is to bring clarity to complex
                                    environments and help your team make decisions with
                                    confidence.
                                </p>

                                <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#0B2742]">

                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0B2742]/20 bg-white/20">
                                        <ArrowUpRight size={16} />
                                    </span>

                                    Built around your momentum.

                                </div>

                            </div>

                        </div>
                    </Reveal>

                </div>
            </section>

            {/* =========================================================
          CTA
      ========================================================= */}

            {/* <CTASection /> */}
            <ContactSection />

            {/* =========================================================
          FOOTER
      ========================================================= */}

            <Footer />
        </main>
    )
}