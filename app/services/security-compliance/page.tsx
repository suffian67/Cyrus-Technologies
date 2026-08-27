import Link from 'next/link'

import {
    ArrowDownRight,
    ArrowUpRight,
    Check,
    ClipboardCheck,
    FileCheck2,
    FileSearch,
    Gauge,
    LockKeyhole,
    Network,
    Scale,
    ShieldCheck,
    Target,
} from 'lucide-react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/site-interactions'
import { ContactSection } from '@/components/home/contact-section'

export const metadata = {
    title: 'Security & Compliance | Cyrus Technologies',
    description:
        'Build practical security and compliance programs that create confidence with customers, regulators, and your organization.',
}

export default function SecurityCompliancePage() {
    return (
        <main>
            <Header />

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden border-b border-[#DCE8F7] bg-[#F7FAFE]">

                {/* Ambient light */}

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-56 -top-48 h-[650px] w-[650px] rounded-full bg-[#56A9FF]/[0.11] blur-[160px]"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-48 bottom-[-250px] h-[600px] w-[600px] rounded-full bg-[#1769E8]/[0.07] blur-[150px]"
                />

                {/* Technical grid */}

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(#1769E8 1px, transparent 1px),
                            linear-gradient(90deg, #1769E8 1px, transparent 1px)
                        `,
                        backgroundSize: '72px 72px',
                    }}
                />

                <div className="container relative">

                    <div className="grid min-h-[700px] items-center gap-16 py-24 lg:grid-cols-[1fr_0.9fr] lg:py-28">

                        {/* HERO COPY */}

                        <Reveal>

                            <div className="max-w-3xl">

                                <Link
                                    href="/services"
                                    className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#71859A] transition-colors hover:text-[#1769E8]"
                                >
                                    <ArrowDownRight size={14} />
                                    All capabilities
                                </Link>

                                <div className="mb-6 flex items-center gap-3">

                                    <span className="h-[2px] w-10 bg-[#1769E8]" />

                                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1769E8]">
                                        Security & Compliance
                                    </p>

                                </div>

                                <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-[#0B1F38] md:text-6xl lg:text-[5.7rem]">
                                    Turn compliance
                                    <br />
                                    <span className="text-[#1769E8]">
                                        into confidence.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-base leading-8 text-[#52657D] md:text-lg">
                                    Build security and compliance programs
                                    that stand up to scrutiny while actually
                                    improving how your organization manages
                                    risk.
                                </p>

                                <div className="mt-10 flex flex-wrap items-center gap-5">

                                    <Link
                                        href="/contact"
                                        className="group inline-flex items-center gap-3 rounded-full bg-[#1769E8] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B4D91] hover:shadow-[0_15px_40px_rgba(23,105,232,0.2)]"
                                    >
                                        Talk to an expert

                                        <ArrowUpRight
                                            size={17}
                                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </Link>

                                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#71859A]">
                                        Build trust by design
                                    </span>

                                </div>

                            </div>

                        </Reveal>


                        {/* COMPLIANCE VISUAL */}

                        <Reveal>

                            <div className="relative mx-auto w-full max-w-[500px]">

                                <div
                                    aria-hidden="true"
                                    className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#56A9FF]/[0.06] blur-[90px]"
                                />

                                <div className="relative h-[500px]">

                                    {/* Outer rings */}

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1769E8]/10"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1769E8]/10"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#56A9FF]/20"
                                    />

                                    {/* Cross lines */}

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-[7%] right-[7%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#1769E8]/20 to-transparent"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute bottom-[7%] left-1/2 top-[7%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#1769E8]/15 to-transparent"
                                    />


                                    {/* Central compliance seal */}

                                    <div className="absolute left-1/2 top-1/2 flex h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#1769E8]/20 bg-white shadow-[0_30px_90px_rgba(23,105,232,0.13)]">

                                        <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full border border-[#1769E8]/10 bg-[#1769E8]/[0.06]">

                                            <ShieldCheck
                                                size={42}
                                                strokeWidth={1.2}
                                                className="text-[#1769E8]"
                                            />

                                        </div>

                                    </div>


                                    {/* Framework nodes */}

                                    <div className="absolute left-[0%] top-[15%] flex flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <Scale
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Governance
                                        </span>

                                    </div>


                                    <div className="absolute right-[0%] top-[15%] flex flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <FileCheck2
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Controls
                                        </span>

                                    </div>


                                    <div className="absolute bottom-[15%] left-[0%] flex flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <FileSearch
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Evidence
                                        </span>

                                    </div>


                                    <div className="absolute bottom-[15%] right-[0%] flex flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <ClipboardCheck
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Assurance
                                        </span>

                                    </div>


                                    {/* Status */}

                                    <div className="absolute left-1/2 top-[1%] flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#1769E8]/15 bg-white px-3 py-1.5 shadow-sm">

                                        <span className="h-1.5 w-1.5 rounded-full bg-[#1769E8]" />

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Controls aligned
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </Reveal>

                    </div>

                </div>

            </section>


            {/* =========================================================
                INTRO
            ========================================================= */}

            <section className="bg-white py-24 md:py-32">

                <div className="container">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                        <Reveal>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-[2px] w-10 bg-[#1769E8]" />

                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                    More than a checkbox
                                </p>

                            </div>

                            <h2 className="text-4xl font-medium leading-[1.03] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Compliance should
                                <br />
                                <span className="text-[#1769E8]">
                                    strengthen security.
                                </span>
                            </h2>

                        </Reveal>


                        <Reveal>

                            <div className="max-w-2xl">

                                <p className="text-lg leading-8 text-[#52657D]">
                                    Compliance requirements can become
                                    complicated quickly. Different frameworks,
                                    customer expectations, regulations, and
                                    internal policies can create a maze of
                                    controls and evidence.
                                </p>

                                <p className="mt-6 text-base leading-8 text-[#64778E]">
                                    We help turn those requirements into a
                                    practical security program — connecting
                                    governance, technology, people, controls,
                                    and evidence around the risks that matter.
                                </p>

                            </div>

                        </Reveal>

                    </div>

                </div>

            </section>


            {/* =========================================================
                CAPABILITIES
            ========================================================= */}

            <section className="border-y border-[#DCE8F7] bg-[#F4F8FD] py-24 md:py-32">

                <div className="container">

                    <Reveal>

                        <div className="max-w-3xl">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-[2px] w-10 bg-[#1769E8]" />

                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                    What we help build
                                </p>

                            </div>

                            <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                A stronger program.
                                <br />
                                <span className="text-[#1769E8]">
                                    Not just a stronger report.
                                </span>
                            </h2>

                        </div>

                    </Reveal>


                    <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                number: '01',
                                icon: ShieldCheck,
                                title: 'Security program design',
                                text: 'Build practical security programs aligned with your organization, risk profile, and business objectives.',
                            },
                            {
                                number: '02',
                                icon: Scale,
                                title: 'Governance & risk',
                                text: 'Establish clear ownership, policies, risk processes, and decision-making structures.',
                            },
                            {
                                number: '03',
                                icon: ClipboardCheck,
                                title: 'Control assessment',
                                text: 'Evaluate whether security controls are appropriately designed and operating as intended.',
                            },
                            {
                                number: '04',
                                icon: FileCheck2,
                                title: 'Compliance readiness',
                                text: 'Prepare your organization for customer reviews, audits, assessments, and regulatory expectations.',
                            },
                            {
                                number: '05',
                                icon: FileSearch,
                                title: 'Evidence & documentation',
                                text: 'Create the documentation and evidence needed to demonstrate that controls actually work.',
                            },
                            {
                                number: '06',
                                icon: Gauge,
                                title: 'Continuous improvement',
                                text: 'Turn assessments into an ongoing cycle of measurable security improvement rather than a once-a-year exercise.',
                            },
                        ].map((item) => {

                            const Icon = item.icon

                            return (
                                <Reveal
                                    key={item.number}
                                    className="group"
                                >

                                    <div className="relative h-full overflow-hidden rounded-2xl border border-[#D5E3F0] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#56A9FF]/50 hover:shadow-[0_24px_60px_rgba(23,105,232,0.10)]">

                                        <div className="flex items-start justify-between">

                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1769E8]/[0.07] text-[#1769E8]">

                                                <Icon
                                                    size={20}
                                                    strokeWidth={1.5}
                                                />

                                            </div>

                                            <span className="text-xs font-bold tracking-[0.2em] text-[#1769E8]/30">
                                                {item.number}
                                            </span>

                                        </div>

                                        <h3 className="mt-10 text-xl font-semibold tracking-[-0.02em] text-[#172B45]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-[#64778E]">
                                            {item.text}
                                        </p>

                                        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#1769E8] to-[#56A9FF] transition-all duration-500 group-hover:w-full" />

                                    </div>

                                </Reveal>
                            )
                        })}

                    </div>

                </div>

            </section>


            {/* =========================================================
                FRAMEWORKS
            ========================================================= */}

            <section className="bg-white py-24 md:py-32">

                <div className="container">

                    <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

                        {/* Framework visual */}

                        <Reveal>

                            <div className="relative mx-auto max-w-[500px]">

                                <div className="absolute -inset-10 rounded-[3rem] bg-[#56A9FF]/[0.05] blur-3xl" />

                                <div className="relative rounded-[2rem] border border-[#DCE8F7] bg-[#F7FAFE] p-8">

                                    <div className="flex items-center justify-between border-b border-[#DCE8F7] pb-5">

                                        <div>

                                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8A9CAF]">
                                                Security framework
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#172B45]">
                                                Control environment
                                            </p>

                                        </div>

                                        <Network
                                            size={21}
                                            strokeWidth={1.4}
                                            className="text-[#1769E8]"
                                        />

                                    </div>


                                    <div className="mt-7 space-y-3">

                                        {[
                                            ['Governance', 'Defined'],
                                            ['Risk management', 'Measured'],
                                            ['Access controls', 'Implemented'],
                                            ['Security operations', 'Monitored'],
                                            ['Evidence', 'Documented'],
                                        ].map(([label, status], index) => (

                                            <div
                                                key={label}
                                                className="flex items-center gap-4 rounded-xl border border-[#DCE8F7] bg-white px-4 py-4"
                                            >

                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1769E8]/[0.07] text-[#1769E8]">

                                                    <span className="text-[10px] font-bold">
                                                        0{index + 1}
                                                    </span>

                                                </div>

                                                <div className="min-w-0 flex-1">

                                                    <p className="text-xs font-semibold text-[#344B64]">
                                                        {label}
                                                    </p>

                                                </div>

                                                <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[#1769E8]">

                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#56A9FF]" />

                                                    {status}

                                                </span>

                                            </div>

                                        ))}

                                    </div>


                                    <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#1769E8]/[0.07] px-4 py-3 text-xs font-semibold text-[#1769E8]">

                                        <Target size={16} />

                                        Controls connected to real security outcomes.

                                    </div>

                                </div>

                            </div>

                        </Reveal>


                        {/* Copy */}

                        <Reveal>

                            <div className="max-w-xl">

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-[2px] w-10 bg-[#1769E8]" />

                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                        Framework-aligned
                                    </p>

                                </div>

                                <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl">
                                    Frameworks provide
                                    <br />
                                    <span className="text-[#1769E8]">
                                        structure. Context provides value.
                                    </span>
                                </h2>

                                <p className="mt-7 text-lg leading-8 text-[#52657D]">
                                    We help organizations interpret security
                                    requirements in the context of their actual
                                    environment rather than treating every
                                    control as an isolated checkbox.
                                </p>

                                <p className="mt-5 text-base leading-8 text-[#64778E]">
                                    Whether you are preparing for an assessment,
                                    responding to customer requirements, or
                                    building a more mature security program,
                                    our approach keeps the focus on practical
                                    risk reduction.
                                </p>

                                <div className="mt-9 grid gap-3 sm:grid-cols-2">

                                    {[
                                        'Risk-based prioritization',
                                        'Control maturity',
                                        'Audit readiness',
                                        'Evidence management',
                                    ].map((item) => (

                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >

                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1769E8]/10 text-[#1769E8]">
                                                <Check size={14} />
                                            </span>

                                            <span className="text-sm font-medium text-[#344B64]">
                                                {item}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </Reveal>

                    </div>

                </div>

            </section>


            {/* =========================================================
                APPROACH
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#0B2742] py-24 md:py-32">

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-[#56A9FF]/10 blur-[150px]"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-48 bottom-[-200px] h-[500px] w-[500px] rounded-full bg-[#1769E8]/15 blur-[140px]"
                />

                <div className="container relative">

                    <Reveal>

                        <div className="max-w-3xl">

                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#56A9FF]">
                                Our approach
                            </p>

                            <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                                Practical governance.
                                <br />
                                <span className="text-[#56A9FF]">
                                    Measurable confidence.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-[#B8CDE0] md:text-lg">
                                We help you move from knowing what the
                                requirements say to knowing what your
                                organization needs to do next.
                            </p>

                        </div>

                    </Reveal>


                    <div className="mt-16 grid gap-4 md:grid-cols-4">

                        {[
                            {
                                number: '01',
                                title: 'Understand',
                                text: 'Map requirements against your environment and risk.',
                            },
                            {
                                number: '02',
                                title: 'Prioritize',
                                text: 'Focus resources on controls and risks that matter most.',
                            },
                            {
                                number: '03',
                                title: 'Implement',
                                text: 'Build practical controls, processes, and ownership.',
                            },
                            {
                                number: '04',
                                title: 'Prove',
                                text: 'Create evidence and assurance that demonstrate progress.',
                            },
                        ].map((item) => (

                            <Reveal key={item.number}>

                                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:bg-white/[0.06]">

                                    <span className="text-xs font-bold tracking-[0.2em] text-[#56A9FF]">
                                        {item.number}
                                    </span>

                                    <h3 className="mt-12 text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#AFC5D8]">
                                        {item.text}
                                    </p>

                                </div>

                            </Reveal>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                CTA
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#081A2C] py-24 md:py-32">

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#1769E8]/15 blur-[150px]"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#56A9FF]/10 blur-[130px]"
                />

                <div className="container relative">

                    <Reveal>

                        <div className="max-w-4xl">

                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#56A9FF]">
                                Build with confidence
                            </p>

                            <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">
                                Make security
                                <br />
                                <span className="text-[#56A9FF]">
                                    easier to prove.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-[#B8CDE0] md:text-lg">
                                Build a security and compliance program that
                                supports growth, earns trust, and creates
                                confidence when it matters.
                            </p>

                            <Link
                                href="/contact"
                                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#56A9FF] px-7 py-4 text-sm font-semibold text-[#071827] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7FC2FF]"
                            >
                                Start a conversation

                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>

                        </div>

                    </Reveal>

                </div>

            </section>
            <ContactSection />

            <Footer />
        </main>
    )
}