import Link from 'next/link'

import {
    AlertTriangle,
    ArrowDownRight,
    ArrowUpRight,
    Check,
    CircleAlert,
    FileSearch,
    LockKeyhole,
    Radar,
    RotateCcw,
    ShieldCheck,
    Siren,
    Timer,
} from 'lucide-react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/site-interactions'
import { ContactSection } from '@/components/home/contact-section'

export const metadata = {
    title: 'Incident Response | Cyrus Technologies',
    description:
        'Respond decisively to cybersecurity incidents with expert investigation, containment, recovery, and guidance from Cyrus Technologies.',
}

export default function IncidentResponsePage() {
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
                    className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-[#56A9FF]/[0.12] blur-[150px]"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-48 bottom-[-180px] h-[520px] w-[520px] rounded-full bg-[#1769E8]/[0.07] blur-[140px]"
                />

                {/* Technical grid */}

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.035]"
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

                        {/* COPY */}

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
                                        Incident Response
                                    </p>

                                </div>

                                <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-[#0B1F38] md:text-6xl lg:text-[5.7rem]">
                                    When the moment
                                    <br />
                                    <span className="text-[#1769E8]">
                                        matters most.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-base leading-8 text-[#52657D] md:text-lg">
                                    Move from uncertainty to control with
                                    experienced incident responders who help
                                    investigate, contain, recover, and learn
                                    from security incidents.
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
                                        Preparedness changes outcomes
                                    </span>

                                </div>

                            </div>

                        </Reveal>


                        {/* INCIDENT VISUAL */}

                        <Reveal>

                            <div className="relative mx-auto w-full max-w-[500px]">

                                <div
                                    aria-hidden="true"
                                    className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#56A9FF]/[0.08] blur-[90px]"
                                />

                                <div className="relative h-[480px]">

                                    {/* Outer system boundary */}

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1769E8]/10"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1769E8]/15"
                                    />

                                    {/* Crosshair */}

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-[8%] right-[8%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#1769E8]/20 to-transparent"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute bottom-[8%] left-1/2 top-[8%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#1769E8]/20 to-transparent"
                                    />

                                    {/* Central incident */}

                                    <div className="absolute left-1/2 top-1/2 flex h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#1769E8]/25 bg-white shadow-[0_25px_80px_rgba(23,105,232,0.16)]">

                                        <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#1769E8]/[0.07] text-[#1769E8]">

                                            <Siren
                                                size={37}
                                                strokeWidth={1.25}
                                            />

                                        </div>

                                    </div>


                                    {/* Investigation node */}

                                    <div className="absolute left-[5%] top-[22%] flex flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <FileSearch
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Investigate
                                        </span>

                                    </div>


                                    {/* Containment node */}

                                    <div className="absolute right-[5%] top-[22%] flex flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <LockKeyhole
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Contain
                                        </span>

                                    </div>


                                    {/* Recovery node */}

                                    <div className="absolute bottom-[17%] left-[5%] flex flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <RotateCcw
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Recover
                                        </span>

                                    </div>


                                    {/* Learn node */}

                                    <div className="absolute bottom-[17%] right-[5%] flex flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <ShieldCheck
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Improve
                                        </span>

                                    </div>


                                    {/* Alert marker */}

                                    <div className="absolute left-1/2 top-[3%] flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#1769E8]/15 bg-white px-3 py-1.5 shadow-sm">

                                        <span className="h-1.5 w-1.5 rounded-full bg-[#1769E8]" />

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Active response
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
                                    When incidents happen
                                </p>

                            </div>

                            <h2 className="text-4xl font-medium leading-[1.03] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Calm under
                                <br />
                                pressure.
                            </h2>

                        </Reveal>


                        <Reveal>

                            <div className="max-w-2xl">

                                <p className="text-lg leading-8 text-[#52657D]">
                                    A security incident creates more than a
                                    technical problem. It creates uncertainty
                                    across leadership, operations, legal,
                                    communications, and the people responsible
                                    for getting the business moving again.
                                </p>

                                <p className="mt-6 text-base leading-8 text-[#64778E]">
                                    Our role is to bring structure to that
                                    uncertainty. We help establish what
                                    happened, determine what is affected,
                                    contain the threat, and guide the
                                    organization toward recovery.
                                </p>

                            </div>

                        </Reveal>

                    </div>

                </div>

            </section>


            {/* =========================================================
                RESPONSE PHASES
            ========================================================= */}

            <section className="border-y border-[#DCE8F7] bg-[#F4F8FD] py-24 md:py-32">

                <div className="container">

                    <Reveal>

                        <div className="max-w-3xl">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-[2px] w-10 bg-[#1769E8]" />

                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                    The response lifecycle
                                </p>

                            </div>

                            <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Move from
                                <br />
                                <span className="text-[#1769E8]">
                                    chaos to control.
                                </span>
                            </h2>

                        </div>

                    </Reveal>


                    <div className="relative mt-16">

                        {/* Timeline */}

                        <div
                            aria-hidden="true"
                            className="absolute left-[30px] top-8 bottom-8 hidden w-px bg-gradient-to-b from-[#56A9FF]/20 via-[#1769E8]/30 to-transparent md:block"
                        />

                        <div className="space-y-4">

                            {[
                                {
                                    number: '01',
                                    icon: Radar,
                                    title: 'Detect & understand',
                                    text: 'Establish the facts quickly. Determine what happened, what systems are involved, and whether the threat is still active.',
                                },
                                {
                                    number: '02',
                                    icon: LockKeyhole,
                                    title: 'Contain the threat',
                                    text: 'Limit the attacker’s ability to cause further harm while protecting evidence and maintaining critical business operations.',
                                },
                                {
                                    number: '03',
                                    icon: FileSearch,
                                    title: 'Investigate deeply',
                                    text: 'Trace activity, identify affected assets, understand the attack path, and build a reliable picture of the incident.',
                                },
                                {
                                    number: '04',
                                    icon: RotateCcw,
                                    title: 'Recover with confidence',
                                    text: 'Restore affected environments safely and validate that the organization can return to normal operations.',
                                },
                            ].map((item) => {

                                const Icon = item.icon

                                return (
                                    <Reveal key={item.number}>

                                        <div className="group relative grid gap-6 rounded-2xl border border-[#D5E3F0] bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#56A9FF]/50 hover:shadow-[0_20px_50px_rgba(23,105,232,0.08)] md:grid-cols-[62px_230px_1fr] md:items-center">

                                            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769E8]/[0.07] text-[#1769E8]">

                                                <Icon
                                                    size={21}
                                                    strokeWidth={1.5}
                                                />

                                            </div>

                                            <div>

                                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1769E8]/50">
                                                    {item.number}
                                                </span>

                                                <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-[#172B45]">
                                                    {item.title}
                                                </h3>

                                            </div>

                                            <p className="text-sm leading-7 text-[#64778E]">
                                                {item.text}
                                            </p>

                                        </div>

                                    </Reveal>
                                )
                            })}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                RAPID RESPONSE
            ========================================================= */}

            <section className="bg-white py-24 md:py-32">

                <div className="container">

                    <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">

                        {/* Response panel */}

                        <Reveal>

                            <div className="relative mx-auto max-w-[500px]">

                                <div className="absolute -inset-8 rounded-[3rem] bg-[#56A9FF]/[0.05] blur-3xl" />

                                <div className="relative overflow-hidden rounded-[2rem] border border-[#DCE8F7] bg-[#F7FAFE]">

                                    <div className="flex items-center justify-between border-b border-[#DCE8F7] px-7 py-5">

                                        <div>

                                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8A9CAF]">
                                                Response status
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#172B45]">
                                                Incident under control
                                            </p>

                                        </div>

                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1769E8]/10 text-[#1769E8]">

                                            <ShieldCheck size={18} />

                                        </div>

                                    </div>


                                    <div className="space-y-3 p-7">

                                        {[
                                            ['Threat identified', 'Confirmed'],
                                            ['Affected systems', 'Mapped'],
                                            ['Threat contained', 'Complete'],
                                            ['Evidence preserved', 'Secure'],
                                            ['Recovery plan', 'Ready'],
                                        ].map(([label, value], index) => (

                                            <div
                                                key={label}
                                                className="flex items-center justify-between rounded-xl border border-[#DCE8F7] bg-white px-4 py-3.5"
                                            >

                                                <div className="flex items-center gap-3">

                                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1769E8]/[0.07] text-[10px] font-bold text-[#1769E8]">
                                                        0{index + 1}
                                                    </span>

                                                    <span className="text-xs font-semibold text-[#52657D]">
                                                        {label}
                                                    </span>

                                                </div>

                                                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#1769E8]">

                                                    <Check size={13} />

                                                    {value}

                                                </span>

                                            </div>

                                        ))}

                                    </div>


                                    <div className="mx-7 mb-7 flex items-center gap-3 rounded-xl bg-[#1769E8] px-4 py-3.5 text-white">

                                        <Timer size={17} />

                                        <div>

                                            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">
                                                Priority
                                            </p>

                                            <p className="mt-0.5 text-xs font-semibold">
                                                Preserve control. Protect the business.
                                            </p>

                                        </div>

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
                                        Experienced response
                                    </p>

                                </div>

                                <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl">
                                    The first decision
                                    <br />
                                    <span className="text-[#1769E8]">
                                        sets the tone.
                                    </span>
                                </h2>

                                <p className="mt-7 text-lg leading-8 text-[#52657D]">
                                    During an incident, speed matters. So does
                                    making the right decision with incomplete
                                    information.
                                </p>

                                <p className="mt-5 text-base leading-8 text-[#64778E]">
                                    Our responders bring a structured approach
                                    to high-pressure situations, helping your
                                    team avoid rushed assumptions and focus on
                                    actions that reduce risk.
                                </p>

                                <div className="mt-9 space-y-3">

                                    {[
                                        'Structured incident coordination',
                                        'Evidence-led investigation',
                                        'Containment and recovery guidance',
                                        'Clear communication for decision-makers',
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
                PREPAREDNESS
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

                    <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">

                        <Reveal>

                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#56A9FF]">
                                Before the incident
                            </p>

                            <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                                Prepared teams
                                <br />
                                <span className="text-[#56A9FF]">
                                    recover faster.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-xl text-base leading-8 text-[#B8CDE0] md:text-lg">
                                Incident response should not begin when the
                                alarm goes off. Preparation gives your people
                                the clarity and confidence to act when pressure
                                is highest.
                            </p>

                        </Reveal>


                        <Reveal>

                            <div className="grid gap-3 sm:grid-cols-2">

                                {[
                                    {
                                        icon: AlertTriangle,
                                        title: 'Response planning',
                                        text: 'Define roles, decisions, escalation paths, and priorities before an incident.',
                                    },
                                    {
                                        icon: Siren,
                                        title: 'Readiness exercises',
                                        text: 'Test how your people and processes perform under realistic pressure.',
                                    },
                                    {
                                        icon: CircleAlert,
                                        title: 'Detection alignment',
                                        text: 'Make sure the signals reaching your team support meaningful response.',
                                    },
                                    {
                                        icon: ShieldCheck,
                                        title: 'Lessons learned',
                                        text: 'Turn incidents into measurable improvements to your security program.',
                                    },
                                ].map((item) => {

                                    const Icon = item.icon

                                    return (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:bg-white/[0.06]"
                                        >

                                            <Icon
                                                size={20}
                                                strokeWidth={1.5}
                                                className="text-[#56A9FF]"
                                            />

                                            <h3 className="mt-8 text-lg font-semibold text-white">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-7 text-[#AFC5D8]">
                                                {item.text}
                                            </p>

                                        </div>
                                    )
                                })}

                            </div>

                        </Reveal>

                    </div>

                </div>

            </section>


            {/* =========================================================
                OUTCOME
            ========================================================= */}

            <section className="bg-[#F4F8FD] py-24 md:py-32">

                <div className="container">

                    <Reveal>

                        <div className="mx-auto max-w-4xl text-center">

                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                The outcome
                            </p>

                            <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Less uncertainty.
                                <br />
                                <span className="text-[#1769E8]">
                                    Faster recovery.
                                </span>
                            </h2>

                            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#64778E] md:text-lg">
                                A strong response capability gives leadership
                                and technical teams something valuable when
                                an incident occurs: a clear path forward.
                            </p>

                        </div>

                    </Reveal>


                    <div className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            'Faster containment',
                            'Clearer investigation',
                            'Confident recovery',
                            'Stronger resilience',
                        ].map((item) => (

                            <Reveal key={item}>

                                <div className="flex items-center gap-3 rounded-xl border border-[#D5E3F0] bg-white px-5 py-5">

                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1769E8]/10 text-[#1769E8]">
                                        <Check size={14} />
                                    </span>

                                    <span className="text-sm font-semibold text-[#344B64]">
                                        {item}
                                    </span>

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
                                Be ready
                            </p>

                            <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">
                                When the unexpected
                                <br />
                                <span className="text-[#56A9FF]">
                                    happens, have a plan.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-[#B8CDE0] md:text-lg">
                                Build an incident response capability that
                                helps your organization act decisively when
                                security matters most.
                            </p>

                            <Link
                                href="/contact"
                                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#56A9FF] px-7 py-4 text-sm font-semibold text-[#071827] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7FC2FF]"
                            >
                                Prepare your organization

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