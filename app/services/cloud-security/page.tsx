import Image from 'next/image'
import Link from 'next/link'

import {
    ArrowDownRight,
    ArrowUpRight,
    Check,
    Cloud,
    Boxes,
    GitBranch,
    LockKeyhole,
    Network,
    ShieldCheck,
} from 'lucide-react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/site-interactions'
import { ContactSection } from '@/components/home/contact-section'

export const metadata = {
    title: 'Cloud Security | Cyrus Technologies',
    description:
        'Secure your cloud environment with practical architecture, visibility, identity controls, and continuous security improvement.',
}

export default function CloudSecurityPage() {
    return (
        <main>
            <Header />

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden border-b border-[#DCE8F7] bg-[#F4F8FD]">

                {/* Background image */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0"
                >
                    <Image
                        src="/images/services/cloud-security-hero.jpg"
                        alt=""
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>

                {/* Image treatment */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-white/65"
                />

                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-[#F4F8FD]/96 via-[#F4F8FD]/82 to-[#F4F8FD]/35"
                />

                {/* Technical grid */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: `
                            linear-gradient(#1769E8 1px, transparent 1px),
                            linear-gradient(90deg, #1769E8 1px, transparent 1px)
                        `,
                        backgroundSize: '72px 72px',
                    }}
                />

                <div className="container relative">

                    <div className="grid min-h-[720px] items-center gap-16 py-24 lg:grid-cols-[1fr_0.9fr] lg:py-28">

                        {/* LEFT */}

                        <Reveal>
                            <div className="max-w-3xl">

                                <Link
                                    href="/services"
                                    className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6B8097] transition-colors hover:text-[#1769E8]"
                                >
                                    <ArrowDownRight size={14} />
                                    All capabilities
                                </Link>

                                <div className="mb-6 flex items-center gap-3">

                                    <span className="h-[2px] w-10 bg-[#1769E8]" />

                                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1769E8]">
                                        Cloud Security
                                    </p>

                                </div>

                                <h1 className="text-5xl font-medium leading-[0.94] tracking-[-0.055em] text-[#0B1F38] md:text-6xl lg:text-[5.8rem]">
                                    Build in the cloud.
                                    <br />
                                    <span className="text-[#1769E8]">
                                        Secure by design.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-base leading-8 text-[#52657D] md:text-lg">
                                    Secure cloud environments without slowing
                                    down the teams and technology that power
                                    your business.
                                </p>

                                <div className="mt-10 flex flex-wrap items-center gap-5">

                                    <Link
                                        href="/contact"
                                        className="group inline-flex items-center gap-3 rounded-full bg-[#1769E8] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B4D91] hover:shadow-[0_15px_40px_rgba(23,105,232,0.22)]"
                                    >
                                        Talk to an expert

                                        <ArrowUpRight
                                            size={17}
                                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </Link>

                                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#71859A]">
                                        Secure the foundation
                                    </span>

                                </div>

                            </div>
                        </Reveal>


                        {/* RIGHT — CLOUD ARCHITECTURE VISUAL */}

                        <Reveal>
                            <div className="relative mx-auto w-full max-w-[510px]">

                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-[2rem] bg-[#56A9FF]/10 blur-3xl"
                                />

                                <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_30px_90px_rgba(23,105,232,0.14)] backdrop-blur-xl">

                                    {/* Header */}

                                    <div className="flex items-center justify-between border-b border-[#E2EBF4] pb-5">

                                        <div>

                                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8A9CAF]">
                                                Cyrus Cloud Security
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#172B45]">
                                                Environment overview
                                            </p>

                                        </div>

                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1769E8]/[0.07] text-[#1769E8]">
                                            <Cloud
                                                size={20}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                    </div>


                                    {/* Architecture */}

                                    <div className="relative my-7 h-[290px] overflow-hidden rounded-2xl bg-[#F4F8FD]">

                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0 opacity-30"
                                            style={{
                                                backgroundImage: `
                                                    linear-gradient(#1769E8 1px, transparent 1px),
                                                    linear-gradient(90deg, #1769E8 1px, transparent 1px)
                                                `,
                                                backgroundSize: '42px 42px',
                                            }}
                                        />

                                        {/* connection lines */}

                                        <div className="absolute left-1/2 top-[29%] h-[100px] w-px -translate-x-1/2 bg-[#1769E8]/20" />

                                        <div className="absolute left-[25%] top-[55%] h-px w-[50%] bg-[#1769E8]/20" />

                                        <div className="absolute left-[25%] top-[55%] h-[55px] w-px bg-[#1769E8]/20" />

                                        <div className="absolute left-1/2 top-[55%] h-[55px] w-px -translate-x-1/2 bg-[#1769E8]/20" />

                                        <div className="absolute right-[25%] top-[55%] h-[55px] w-px bg-[#1769E8]/20" />


                                        {/* Cloud core */}

                                        <div className="absolute left-1/2 top-[13%] flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-2xl border border-[#56A9FF]/40 bg-white shadow-[0_15px_40px_rgba(23,105,232,0.12)]">

                                            <Cloud
                                                size={30}
                                                strokeWidth={1.3}
                                                className="text-[#1769E8]"
                                            />

                                        </div>


                                        {/* Infrastructure nodes */}

                                        {[
                                            {
                                                icon: Network,
                                                label: 'Network',
                                                position: 'left-[12%] top-[58%]',
                                            },
                                            {
                                                icon: LockKeyhole,
                                                label: 'Identity',
                                                position: 'left-1/2 top-[58%] -translate-x-1/2',
                                            },
                                            {
                                                icon: Boxes,
                                                label: 'Workloads',
                                                position: 'right-[12%] top-[58%]',
                                            },
                                        ].map((item) => {

                                            const Icon = item.icon

                                            return (
                                                <div
                                                    key={item.label}
                                                    className={`absolute ${item.position} flex w-24 flex-col items-center gap-2`}
                                                >

                                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1769E8]/15 bg-white text-[#1769E8] shadow-sm">
                                                        <Icon
                                                            size={18}
                                                            strokeWidth={1.5}
                                                        />
                                                    </div>

                                                    <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#71859A]">
                                                        {item.label}
                                                    </span>

                                                </div>
                                            )
                                        })}


                                        {/* Security layer */}

                                        <div className="absolute bottom-[10%] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#56A9FF]/20 bg-white px-4 py-2 shadow-sm">

                                            <ShieldCheck
                                                size={14}
                                                className="text-[#1769E8]"
                                            />

                                            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#52657D]">
                                                Security controls
                                            </span>

                                        </div>

                                    </div>


                                    {/* Bottom status */}

                                    <div className="flex items-center justify-between">

                                        <div className="flex items-center gap-2">

                                            <span className="h-2 w-2 rounded-full bg-[#56A9FF] shadow-[0_0_12px_rgba(86,169,255,0.7)]" />

                                            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#52657D]">
                                                Protected architecture
                                            </span>

                                        </div>

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8A9CAF]">
                                            Visibility · Control · Resilience
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

            <section className="relative overflow-hidden bg-white py-24 md:py-32">

                <div className="container">

                    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                        <Reveal>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-[2px] w-10 bg-[#1769E8]" />

                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                    The cloud challenge
                                </p>

                            </div>

                            <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Growth creates
                                <br />
                                <span className="text-[#1769E8]">
                                    complexity.
                                </span>
                            </h2>

                        </Reveal>

                        <Reveal>

                            <div className="max-w-2xl">

                                <p className="text-lg leading-8 text-[#52657D]">
                                    Cloud environments give organizations
                                    incredible flexibility. They also create
                                    new identities, workloads, connections,
                                    configurations, and attack paths that can
                                    quickly become difficult to see and control.
                                </p>

                                <p className="mt-6 text-base leading-8 text-[#64778E]">
                                    We help bring that environment back into
                                    focus — creating a security foundation that
                                    supports innovation instead of standing in
                                    its way.
                                </p>

                            </div>

                        </Reveal>

                    </div>

                </div>

            </section>


            {/* =========================================================
                FOUR SECURITY LAYERS
            ========================================================= */}

            <section className="border-y border-[#DCE8F7] bg-[#F4F8FD] py-24 md:py-32">

                <div className="container">

                    <Reveal>

                        <div className="max-w-3xl">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-[2px] w-10 bg-[#1769E8]" />

                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                    Where we focus
                                </p>

                            </div>

                            <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Security across
                                <br />
                                <span className="text-[#1769E8]">
                                    the entire environment.
                                </span>
                            </h2>

                        </div>

                    </Reveal>


                    <div className="mt-14 grid gap-4 md:grid-cols-2">

                        {[
                            {
                                number: '01',
                                icon: Network,
                                title: 'Cloud architecture',
                                text: 'Build secure foundations with architecture and controls designed around how your organization actually operates.',
                            },
                            {
                                number: '02',
                                icon: LockKeyhole,
                                title: 'Identity & access',
                                text: 'Reduce unnecessary access and strengthen the identities that connect people, applications, and services.',
                            },
                            {
                                number: '03',
                                icon: Boxes,
                                title: 'Workload security',
                                text: 'Protect applications, containers, workloads, and data as they move through increasingly dynamic environments.',
                            },
                            {
                                number: '04',
                                icon: ShieldCheck,
                                title: 'Continuous assurance',
                                text: 'Maintain visibility into configuration, exposure, and security drift as your cloud environment evolves.',
                            },
                        ].map((item) => {

                            const Icon = item.icon

                            return (
                                <Reveal
                                    key={item.number}
                                    className="group"
                                >
                                    <div className="relative h-full overflow-hidden rounded-2xl border border-[#D5E3F0] bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#56A9FF]/50 hover:shadow-[0_24px_60px_rgba(23,105,232,0.10)]">

                                        <div className="flex items-start justify-between">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769E8]/[0.07] text-[#1769E8]">
                                                <Icon
                                                    size={21}
                                                    strokeWidth={1.6}
                                                />
                                            </div>

                                            <span className="text-xs font-bold tracking-[0.2em] text-[#1769E8]/30">
                                                {item.number}
                                            </span>

                                        </div>

                                        <h3 className="mt-12 text-2xl font-semibold tracking-[-0.025em] text-[#172B45]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 max-w-lg text-sm leading-7 text-[#64778E]">
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
                ARCHITECTURE STORY
            ========================================================= */}

            <section className="bg-white py-24 md:py-32">

                <div className="container">

                    <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">

                        <Reveal>

                            <div className="relative">

                                <div className="absolute -inset-8 rounded-[3rem] bg-[#56A9FF]/[0.07] blur-3xl" />

                                <div className="relative overflow-hidden rounded-[2rem] border border-[#DCE8F7] bg-[#F4F8FD] p-7">

                                    <div className="flex items-center justify-between border-b border-[#DCE8F7] pb-5">

                                        <div>

                                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8A9CAF]">
                                                Architecture view
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#172B45]">
                                                Secure by design
                                            </p>

                                        </div>

                                        <GitBranch
                                            size={20}
                                            strokeWidth={1.5}
                                            className="text-[#1769E8]"
                                        />

                                    </div>


                                    <div className="relative mt-7 h-[330px]">

                                        {/* central line */}

                                        <div className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-[#1769E8]/15" />

                                        {/* top */}

                                        <div className="absolute left-1/2 top-2 flex -translate-x-1/2 items-center gap-3 rounded-xl border border-[#56A9FF]/30 bg-white px-5 py-3 shadow-sm">

                                            <Cloud
                                                size={17}
                                                className="text-[#1769E8]"
                                            />

                                            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#344B64]">
                                                Cloud environment
                                            </span>

                                        </div>


                                        {/* middle */}

                                        <div className="absolute left-1/2 top-[38%] flex -translate-x-1/2 items-center gap-3 rounded-xl border border-[#D5E3F0] bg-white px-5 py-3 shadow-sm">

                                            <ShieldCheck
                                                size={17}
                                                className="text-[#1769E8]"
                                            />

                                            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#344B64]">
                                                Security controls
                                            </span>

                                        </div>


                                        {/* bottom nodes */}

                                        <div className="absolute bottom-3 left-[5%] flex flex-col items-center gap-2">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">
                                                <LockKeyhole size={18} />
                                            </div>

                                            <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#71859A]">
                                                Identity
                                            </span>

                                        </div>


                                        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">
                                                <Boxes size={18} />
                                            </div>

                                            <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#71859A]">
                                                Workloads
                                            </span>

                                        </div>


                                        <div className="absolute bottom-3 right-[5%] flex flex-col items-center gap-2">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">
                                                <Network size={18} />
                                            </div>

                                            <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#71859A]">
                                                Network
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </Reveal>


                        <Reveal>

                            <div className="max-w-xl">

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-[2px] w-10 bg-[#1769E8]" />

                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                        Architecture first
                                    </p>

                                </div>

                                <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl">
                                    Security should be
                                    <br />
                                    <span className="text-[#1769E8]">
                                        part of the blueprint.
                                    </span>
                                </h2>

                                <p className="mt-7 text-lg leading-8 text-[#52657D]">
                                    The strongest cloud security programs do
                                    not bolt protection onto an existing
                                    environment. They build it into the
                                    architecture from the beginning.
                                </p>

                                <p className="mt-5 text-base leading-8 text-[#64778E]">
                                    We help your teams understand where trust
                                    exists, where access should be limited,
                                    where data moves, and where controls need
                                    to evolve.
                                </p>

                                <div className="mt-9 grid gap-3">

                                    {[
                                        'Reduce unnecessary exposure',
                                        'Create consistent security controls',
                                        'Improve visibility across environments',
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
                CLOUD JOURNEY
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#0B2742] py-24 md:py-32">

                <div
                    aria-hidden="true"
                    className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#56A9FF]/10 blur-[150px]"
                />

                <div
                    aria-hidden="true"
                    className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#1769E8]/15 blur-[150px]"
                />

                <div className="container relative">

                    <Reveal>

                        <div className="max-w-3xl">

                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#56A9FF]">
                                The approach
                            </p>

                            <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                                Secure the journey.
                                <br />
                                <span className="text-[#56A9FF]">
                                    Not just the destination.
                                </span>
                            </h2>

                        </div>

                    </Reveal>


                    <div className="mt-16 divide-y divide-white/10 border-y border-white/10">

                        {[
                            [
                                '01',
                                'Understand',
                                'Map your cloud architecture, identities, workloads, data, and critical dependencies.',
                            ],
                            [
                                '02',
                                'Prioritize',
                                'Identify the exposures and control gaps that create the greatest business risk.',
                            ],
                            [
                                '03',
                                'Strengthen',
                                'Implement practical controls that improve security without creating unnecessary friction.',
                            ],
                            [
                                '04',
                                'Evolve',
                                'Continuously adapt security as your architecture, applications, and business change.',
                            ],
                        ].map(([number, title, text]) => (

                            <Reveal key={number}>

                                <div className="grid gap-5 py-8 md:grid-cols-[80px_200px_1fr]">

                                    <span className="text-xs font-bold tracking-[0.2em] text-[#56A9FF]">
                                        {number}
                                    </span>

                                    <h3 className="text-xl font-semibold text-white">
                                        {title}
                                    </h3>

                                    <p className="max-w-2xl text-sm leading-7 text-[#AFC5D8]">
                                        {text}
                                    </p>

                                </div>

                            </Reveal>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                OUTCOMES
            ========================================================= */}

            <section className="bg-[#F4F8FD] py-24 md:py-32">

                <div className="container">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                        <Reveal>

                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                The outcome
                            </p>

                            <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl">
                                Cloud that moves
                                <br />
                                <span className="text-[#1769E8]">
                                    with confidence.
                                </span>
                            </h2>

                        </Reveal>


                        <Reveal>

                            <div className="grid gap-3 sm:grid-cols-2">

                                {[
                                    'Greater cloud visibility',
                                    'Stronger identity controls',
                                    'Reduced attack surface',
                                    'Secure architecture',
                                    'Better configuration assurance',
                                    'Security that scales with growth',
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
                    className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#1769E8]/15 blur-[150px]"
                />

                <div
                    aria-hidden="true"
                    className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#56A9FF]/10 blur-[130px]"
                />

                <div className="container relative">

                    <Reveal>

                        <div className="max-w-4xl">

                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#56A9FF]">
                                Build with confidence
                            </p>

                            <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">
                                Your cloud is
                                <br />
                                <span className="text-[#56A9FF]">
                                    your foundation.
                                </span>
                                <br />
                                Protect it accordingly.
                            </h2>

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