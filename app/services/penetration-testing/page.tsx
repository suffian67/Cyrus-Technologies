import Link from 'next/link'

import {
    Activity,
    ArrowDownRight,
    ArrowUpRight,
    Check,
    Crosshair,
    FileSearch,
    Fingerprint,
    Globe2,
    LockKeyhole,
    Radar,
    ScanLine,
    ShieldCheck,
    Target,
    Terminal,
} from 'lucide-react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/site-interactions'
import { ContactSection } from '@/components/home/contact-section'

export const metadata = {
    title: 'Penetration Testing | Cyrus Technologies',
    description:
        'Identify exploitable weaknesses before attackers do with practical penetration testing from Cyrus Technologies.',
}

export default function PenetrationTestingPage() {
    return (
        <main>
            <Header />

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden border-b border-[#DCE8F7] bg-[#F7FAFE]">

                {/* Ambient lighting */}

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full bg-[#56A9FF]/[0.12] blur-[160px]"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-48 bottom-[-220px] h-[520px] w-[520px] rounded-full bg-[#1769E8]/[0.07] blur-[140px]"
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
                                        Penetration Testing
                                    </p>

                                </div>

                                <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-[#0B1F38] md:text-6xl lg:text-[5.7rem]">
                                    Find the weakness
                                    <br />
                                    <span className="text-[#1769E8]">
                                        before they do.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-base leading-8 text-[#52657D] md:text-lg">
                                    Put your defenses under controlled pressure
                                    and discover which weaknesses could
                                    actually be exploited before a real
                                    attacker finds them.
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
                                        Think like an attacker
                                    </span>

                                </div>

                            </div>

                        </Reveal>


                        {/* ATTACK SURFACE VISUAL */}

                        <Reveal>

                            <div className="relative mx-auto w-full max-w-[500px]">

                                <div
                                    aria-hidden="true"
                                    className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#56A9FF]/[0.07] blur-[90px]"
                                />

                                <div className="relative h-[480px]">

                                    {/* Scan rings */}

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1769E8]/10"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1769E8]/15"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#56A9FF]/25"
                                    />

                                    {/* Scan lines */}

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-[5%] right-[5%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#1769E8]/25 to-transparent"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute bottom-[5%] left-1/2 top-[5%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#1769E8]/20 to-transparent"
                                    />

                                    {/* Diagonal targeting line */}

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 h-px w-[310px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-transparent via-[#1769E8]/15 to-transparent"
                                    />


                                    {/* Central target */}

                                    <div className="absolute left-1/2 top-1/2 flex h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#1769E8]/25 bg-white shadow-[0_25px_80px_rgba(23,105,232,0.15)]">

                                        <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#1769E8]/[0.07] text-[#1769E8]">

                                            <Crosshair
                                                size={38}
                                                strokeWidth={1.2}
                                            />

                                        </div>

                                    </div>


                                    {/* Attack surface nodes */}

                                    <div className="absolute left-[3%] top-[19%] flex flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <Globe2
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            External
                                        </span>

                                    </div>


                                    <div className="absolute right-[3%] top-[19%] flex flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <Terminal
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Application
                                        </span>

                                    </div>


                                    <div className="absolute bottom-[17%] left-[3%] flex flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <Fingerprint
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Identity
                                        </span>

                                    </div>


                                    <div className="absolute bottom-[17%] right-[3%] flex flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <LockKeyhole
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Infrastructure
                                        </span>

                                    </div>


                                    {/* Scan indicator */}

                                    <div className="absolute left-1/2 top-[2%] flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#1769E8]/15 bg-white px-3 py-1.5 shadow-sm">

                                        <ScanLine
                                            size={12}
                                            className="text-[#1769E8]"
                                        />

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Attack surface mapped
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
                                    Beyond vulnerability scanning
                                </p>

                            </div>

                            <h2 className="text-4xl font-medium leading-[1.03] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Finding a flaw
                                <br />
                                is not enough.
                            </h2>

                        </Reveal>


                        <Reveal>

                            <div className="max-w-2xl">

                                <p className="text-lg leading-8 text-[#52657D]">
                                    A vulnerability tells you something is
                                    wrong. A penetration test helps establish
                                    what an attacker could actually do with it.
                                </p>

                                <p className="mt-6 text-base leading-8 text-[#64778E]">
                                    We combine technical testing with
                                    adversarial thinking to identify realistic
                                    attack paths, validate impact, and give your
                                    team a clear understanding of where risk
                                    actually matters.
                                </p>

                            </div>

                        </Reveal>

                    </div>

                </div>

            </section>


            {/* =========================================================
                TESTING AREAS
            ========================================================= */}

            <section className="border-y border-[#DCE8F7] bg-[#F4F8FD] py-24 md:py-32">

                <div className="container">

                    <Reveal>

                        <div className="max-w-3xl">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-[2px] w-10 bg-[#1769E8]" />

                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                    Testing coverage
                                </p>

                            </div>

                            <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Test the paths
                                <br />
                                <span className="text-[#1769E8]">
                                    attackers actually take.
                                </span>
                            </h2>

                        </div>

                    </Reveal>


                    <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                number: '01',
                                icon: Globe2,
                                title: 'External testing',
                                text: 'Assess internet-facing systems, exposed services, and externally accessible attack surfaces.',
                            },
                            {
                                number: '02',
                                icon: Terminal,
                                title: 'Web application testing',
                                text: 'Identify weaknesses in application logic, authentication, authorization, and data handling.',
                            },
                            {
                                number: '03',
                                icon: Fingerprint,
                                title: 'Identity testing',
                                text: 'Evaluate how authentication, privilege, and identity weaknesses could be chained into meaningful compromise.',
                            },
                            {
                                number: '04',
                                icon: LockKeyhole,
                                title: 'Internal testing',
                                text: 'Simulate an attacker operating inside the environment to understand lateral movement and privilege escalation.',
                            },
                            {
                                number: '05',
                                icon: Radar,
                                title: 'Attack path analysis',
                                text: 'Connect individual weaknesses into realistic attack chains instead of treating vulnerabilities in isolation.',
                            },
                            {
                                number: '06',
                                icon: ShieldCheck,
                                title: 'Validation & retesting',
                                text: 'Confirm that remediation has actually reduced exposure and closed the identified attack paths.',
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
                ATTACK PATH
            ========================================================= */}

            <section className="bg-white py-24 md:py-32">

                <div className="container">

                    <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">

                        {/* Attack path visual */}

                        <Reveal>

                            <div className="relative mx-auto max-w-[500px]">

                                <div className="absolute -inset-10 rounded-[3rem] bg-[#56A9FF]/[0.05] blur-3xl" />

                                <div className="relative rounded-[2rem] border border-[#DCE8F7] bg-[#F7FAFE] p-8">

                                    <div className="flex items-center justify-between border-b border-[#DCE8F7] pb-5">

                                        <div>

                                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8A9CAF]">
                                                Simulated attack path
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#172B45]">
                                                Exposure chain identified
                                            </p>

                                        </div>

                                        <Target
                                            size={21}
                                            strokeWidth={1.4}
                                            className="text-[#1769E8]"
                                        />

                                    </div>


                                    <div className="relative mt-7 space-y-3">

                                        {[
                                            {
                                                icon: Globe2,
                                                label: 'Public-facing service',
                                                status: 'Entry point',
                                            },
                                            {
                                                icon: ScanLine,
                                                label: 'Application weakness',
                                                status: 'Validated',
                                            },
                                            {
                                                icon: Fingerprint,
                                                label: 'Identity compromise',
                                                status: 'Possible',
                                            },
                                            {
                                                icon: LockKeyhole,
                                                label: 'Privileged access',
                                                status: 'Impact',
                                            },
                                        ].map((item, index) => {

                                            const Icon = item.icon

                                            return (
                                                <div key={item.label}>

                                                    <div className="flex items-center gap-4 rounded-xl border border-[#DCE8F7] bg-white px-4 py-4">

                                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1769E8]/[0.07] text-[#1769E8]">

                                                            <Icon
                                                                size={17}
                                                                strokeWidth={1.5}
                                                            />

                                                        </div>

                                                        <div className="min-w-0 flex-1">

                                                            <p className="text-xs font-semibold text-[#344B64]">
                                                                {item.label}
                                                            </p>

                                                            <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#8A9CAF]">
                                                                {item.status}
                                                            </p>

                                                        </div>

                                                        <span className="text-[9px] font-bold text-[#1769E8]">
                                                            0{index + 1}
                                                        </span>

                                                    </div>

                                                    {index < 3 && (
                                                        <div
                                                            aria-hidden="true"
                                                            className="ml-8 h-3 w-px bg-[#1769E8]/20"
                                                        />
                                                    )}

                                                </div>
                                            )
                                        })}

                                    </div>


                                    <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#1769E8]/[0.07] px-4 py-3 text-xs font-semibold text-[#1769E8]">

                                        <Activity size={16} />

                                        Individual weaknesses connected into one realistic path.

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
                                        Think beyond the finding
                                    </p>

                                </div>

                                <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl">
                                    Attackers do not
                                    <br />
                                    <span className="text-[#1769E8]">
                                        stop at one weakness.
                                    </span>
                                </h2>

                                <p className="mt-7 text-lg leading-8 text-[#52657D]">
                                    The real danger often comes from how
                                    seemingly minor weaknesses connect.
                                </p>

                                <p className="mt-5 text-base leading-8 text-[#64778E]">
                                    Our testing looks beyond isolated
                                    vulnerabilities to understand whether an
                                    attacker could combine weaknesses to reach
                                    sensitive systems, identities, or data.
                                </p>

                                <div className="mt-9 space-y-3">

                                    {[
                                        'Prioritize exploitable attack paths',
                                        'Understand realistic business impact',
                                        'Separate theoretical risk from practical exposure',
                                        'Give technical teams clear remediation priorities',
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
                METHODOLOGY
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
                                How we test
                            </p>

                            <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                                Methodical by design.
                                <br />
                                <span className="text-[#56A9FF]">
                                    Adversarial by nature.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-[#B8CDE0] md:text-lg">
                                Effective penetration testing requires more
                                than running tools. We combine automated
                                discovery with human-led investigation and
                                contextual judgment.
                            </p>

                        </div>

                    </Reveal>


                    <div className="mt-16 grid gap-4 md:grid-cols-4">

                        {[
                            {
                                number: '01',
                                title: 'Map',
                                text: 'Understand the environment and identify the attack surface.',
                            },
                            {
                                number: '02',
                                title: 'Probe',
                                text: 'Test exposed systems and controls for exploitable weaknesses.',
                            },
                            {
                                number: '03',
                                title: 'Validate',
                                text: 'Determine which findings can become meaningful attack paths.',
                            },
                            {
                                number: '04',
                                title: 'Prioritize',
                                text: 'Translate technical findings into clear actions and risk decisions.',
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
                REPORTING
            ========================================================= */}

            <section className="bg-[#F4F8FD] py-24 md:py-32">

                <div className="container">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                        <Reveal>

                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                The deliverable
                            </p>

                            <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl">
                                Findings your team
                                <br />
                                <span className="text-[#1769E8]">
                                    can act on.
                                </span>
                            </h2>

                        </Reveal>


                        <Reveal>

                            <div className="grid gap-3 sm:grid-cols-2">

                                {[
                                    'Executive-level risk summary',
                                    'Technical findings and evidence',
                                    'Attack-path context',
                                    'Severity and business impact',
                                    'Prioritized remediation guidance',
                                    'Retesting and validation',
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-xl border border-[#D5E3F0] bg-white px-5 py-4"
                                    >

                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1769E8]/10 text-[#1769E8]">
                                            <Check size={14} />
                                        </span>

                                        <span className="text-sm font-medium text-[#344B64]">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </Reveal>

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
                                Test your defenses
                            </p>

                            <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">
                                Find the weakness
                                <br />
                                <span className="text-[#56A9FF]">
                                    before it becomes one.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-[#B8CDE0] md:text-lg">
                                Understand how your environment could be
                                attacked and turn the findings into practical
                                security improvements.
                            </p>

                            <Link
                                href="/contact"
                                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#56A9FF] px-7 py-4 text-sm font-semibold text-[#071827] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7FC2FF]"
                            >
                                Scope a penetration test

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