import Link from 'next/link'

import {
    ArrowDownRight,
    ArrowUpRight,
    Check,
    Fingerprint,
    KeyRound,
    LockKeyhole,
    Network,
    ShieldCheck,
    UserCheck,
    Users,
} from 'lucide-react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/site-interactions'
import { ContactSection } from '@/components/home/contact-section'

export const metadata = {
    title: 'Identity & Access Management | Cyrus Technologies',
    description:
        'Strengthen identity, access, and privilege across your organization with practical identity and access management.',
}

export default function IdentityAccessManagementPage() {
    return (
        <main>
            <Header />

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden border-b border-[#DCE8F7] bg-[#F7FAFE]">

                {/* Soft architectural background */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-[#56A9FF]/[0.12] blur-[150px]"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#1769E8]/[0.06] blur-[140px]"
                />

                {/* Fine grid */}
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
                                        Identity & Access Management
                                    </p>

                                </div>

                                <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-[#0B1F38] md:text-6xl lg:text-[5.7rem]">
                                    Know who has
                                    <br />
                                    <span className="text-[#1769E8]">
                                        access to what.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-base leading-8 text-[#52657D] md:text-lg">
                                    Build an identity-first security model that
                                    gives the right people and systems the right
                                    access — and nothing more.
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
                                        Identity is the new perimeter
                                    </span>

                                </div>

                            </div>

                        </Reveal>


                        {/* IDENTITY VISUAL */}

                        <Reveal>

                            <div className="relative mx-auto w-full max-w-[500px]">

                                {/* Glow */}

                                <div
                                    aria-hidden="true"
                                    className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#56A9FF]/10 blur-[80px]"
                                />

                                <div className="relative h-[480px]">

                                    {/* Outer rings */}

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1769E8]/10"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1769E8]/15"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#56A9FF]/25"
                                    />


                                    {/* Connection lines */}

                                    <div
                                        aria-hidden="true"
                                        className="absolute left-[15%] right-[15%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#1769E8]/20 to-transparent"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute bottom-[15%] left-1/2 top-[15%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#1769E8]/20 to-transparent"
                                    />

                                    {/* Central identity */}

                                    <div className="absolute left-1/2 top-1/2 flex h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#56A9FF]/40 bg-white shadow-[0_25px_70px_rgba(23,105,232,0.16)]">

                                        <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#1769E8]/[0.07] text-[#1769E8]">

                                            <Fingerprint
                                                size={38}
                                                strokeWidth={1.25}
                                            />

                                        </div>

                                    </div>


                                    {/* Top node */}

                                    <div className="absolute left-1/2 top-[4%] flex -translate-x-1/2 flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <Users
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            People
                                        </span>

                                    </div>


                                    {/* Right node */}

                                    <div className="absolute right-[2%] top-1/2 flex -translate-y-1/2 flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <Network
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Systems
                                        </span>

                                    </div>


                                    {/* Bottom node */}

                                    <div className="absolute bottom-[4%] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <KeyRound
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Privilege
                                        </span>

                                    </div>


                                    {/* Left node */}

                                    <div className="absolute left-[2%] top-1/2 flex -translate-y-1/2 flex-col items-center gap-2">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D5E3F0] bg-white text-[#1769E8] shadow-sm">

                                            <LockKeyhole
                                                size={20}
                                                strokeWidth={1.5}
                                            />

                                        </div>

                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#71859A]">
                                            Policy
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
                                    The identity challenge
                                </p>

                            </div>

                            <h2 className="text-4xl font-medium leading-[1.03] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Every identity
                                <br />
                                is a doorway.
                            </h2>

                        </Reveal>


                        <Reveal>

                            <div className="max-w-2xl">

                                <p className="text-lg leading-8 text-[#52657D]">
                                    Employees, contractors, applications,
                                    service accounts, and devices all
                                    interact with the systems your business
                                    depends on.
                                </p>

                                <p className="mt-6 text-base leading-8 text-[#64778E]">
                                    The challenge is not simply giving people
                                    access. It is knowing exactly who should
                                    have access, why they have it, how much
                                    they need, and when that access should end.
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
                                    What we strengthen
                                </p>

                            </div>

                            <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Control access
                                <br />
                                <span className="text-[#1769E8]">
                                    at every layer.
                                </span>
                            </h2>

                        </div>

                    </Reveal>


                    <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                number: '01',
                                icon: UserCheck,
                                title: 'Identity governance',
                                text: 'Create clearer ownership, lifecycle controls, and accountability around identities across the organization.',
                            },
                            {
                                number: '02',
                                icon: KeyRound,
                                title: 'Privileged access',
                                text: 'Reduce unnecessary administrative access and protect the identities capable of creating the greatest impact.',
                            },
                            {
                                number: '03',
                                icon: ShieldCheck,
                                title: 'Authentication',
                                text: 'Strengthen authentication with practical controls that make legitimate access easier to trust.',
                            },
                            {
                                number: '04',
                                icon: Users,
                                title: 'Access lifecycle',
                                text: 'Ensure access changes with people, roles, responsibilities, and organizational requirements.',
                            },
                            {
                                number: '05',
                                icon: Network,
                                title: 'Application identity',
                                text: 'Bring service accounts, machine identities, and application access into the security conversation.',
                            },
                            {
                                number: '06',
                                icon: LockKeyhole,
                                title: 'Policy & assurance',
                                text: 'Turn identity policies into measurable controls that can be reviewed, improved, and maintained.',
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
                                                    strokeWidth={1.6}
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
                ZERO TRUST SECTION
            ========================================================= */}

            <section className="bg-white py-24 md:py-32">

                <div className="container">

                    <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">

                        <Reveal>

                            <div className="relative mx-auto max-w-[480px]">

                                <div className="absolute -inset-10 rounded-full bg-[#56A9FF]/[0.06] blur-3xl" />

                                <div className="relative rounded-[2rem] border border-[#DCE8F7] bg-[#F7FAFE] p-8">

                                    <div className="flex items-center justify-between border-b border-[#DCE8F7] pb-5">

                                        <div>

                                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8A9CAF]">
                                                Access decision
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#172B45]">
                                                Verify before trust
                                            </p>

                                        </div>

                                        <Fingerprint
                                            size={21}
                                            strokeWidth={1.4}
                                            className="text-[#1769E8]"
                                        />

                                    </div>


                                    <div className="space-y-3 py-7">

                                        {[
                                            ['Identity', 'Verified'],
                                            ['Device', 'Trusted'],
                                            ['Location', 'Expected'],
                                            ['Privilege', 'Required'],
                                        ].map(([label, value]) => (

                                            <div
                                                key={label}
                                                className="flex items-center justify-between rounded-xl border border-[#DCE8F7] bg-white px-4 py-4"
                                            >

                                                <span className="text-xs font-semibold text-[#52657D]">
                                                    {label}
                                                </span>

                                                <span className="flex items-center gap-2 text-xs font-bold text-[#1769E8]">

                                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1769E8]/10">
                                                        <Check size={12} />
                                                    </span>

                                                    {value}

                                                </span>

                                            </div>

                                        ))}

                                    </div>


                                    <div className="flex items-center justify-center gap-2 rounded-xl bg-[#1769E8]/[0.07] py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#1769E8]">

                                        <ShieldCheck size={14} />

                                        Access approved

                                    </div>

                                </div>

                            </div>

                        </Reveal>


                        <Reveal>

                            <div className="max-w-xl">

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-[2px] w-10 bg-[#1769E8]" />

                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                        Identity-first security
                                    </p>

                                </div>

                                <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl">
                                    Trust should be
                                    <br />
                                    <span className="text-[#1769E8]">
                                        earned every time.
                                    </span>
                                </h2>

                                <p className="mt-7 text-lg leading-8 text-[#52657D]">
                                    Modern environments cannot rely on a
                                    traditional perimeter to decide who is
                                    trustworthy.
                                </p>

                                <p className="mt-5 text-base leading-8 text-[#64778E]">
                                    We help organizations move toward an
                                    identity-first approach where access
                                    decisions consider the identity, context,
                                    privilege, and sensitivity of the resource.
                                </p>

                                <div className="mt-9 space-y-3">

                                    {[
                                        'Least-privilege access',
                                        'Stronger privileged identity protection',
                                        'Consistent access decisions',
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
                WORKFLOW
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#0B2742] py-24 md:py-32">

                <div
                    aria-hidden="true"
                    className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-[#56A9FF]/10 blur-[150px]"
                />

                <div
                    aria-hidden="true"
                    className="absolute -left-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#1769E8]/15 blur-[150px]"
                />

                <div className="container relative">

                    <Reveal>

                        <div className="max-w-3xl">

                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#56A9FF]">
                                The identity lifecycle
                            </p>

                            <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                                Access should evolve
                                <br />
                                <span className="text-[#56A9FF]">
                                    with the business.
                                </span>
                            </h2>

                        </div>

                    </Reveal>


                    <div className="mt-16 grid gap-4 md:grid-cols-4">

                        {[
                            {
                                number: '01',
                                title: 'Join',
                                text: 'Establish the right identity and access from day one.',
                            },
                            {
                                number: '02',
                                title: 'Change',
                                text: 'Adapt access as responsibilities and requirements change.',
                            },
                            {
                                number: '03',
                                title: 'Review',
                                text: 'Continuously validate whether access is still appropriate.',
                            },
                            {
                                number: '04',
                                title: 'Leave',
                                text: 'Remove access cleanly when relationships come to an end.',
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
                                Fewer unknowns.
                                <br />
                                <span className="text-[#1769E8]">
                                    Stronger trust.
                                </span>
                            </h2>

                        </Reveal>


                        <Reveal>

                            <div className="grid gap-3 sm:grid-cols-2">

                                {[
                                    'Clearer identity ownership',
                                    'Reduced privilege',
                                    'Stronger authentication',
                                    'Better access visibility',
                                    'Faster lifecycle changes',
                                    'Improved security assurance',
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
                                Strengthen identity
                            </p>

                            <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">
                                Every access decision
                                <br />
                                <span className="text-[#56A9FF]">
                                    matters.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-[#B8CDE0] md:text-lg">
                                Build an identity and access strategy that
                                protects your organization without getting in
                                the way of the people who keep it moving.
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