import Image from 'next/image'
import Link from 'next/link'

import {
    ArrowDownRight,
    ArrowUpRight,
    Check,
    Eye,
    Radar,
    ShieldCheck,
    Siren,
    Activity,
} from 'lucide-react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/site-interactions'
import { ContactSection } from '@/components/home/contact-section'

export const metadata = {
    title: 'Managed Detection & Response | Cyrus Technologies',
    description:
        '24/7 managed detection and response combining advanced technology with experienced security professionals.',
}

export default function ManagedDetectionResponsePage() {
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
                        src="/services/mdr-hero.jfif"
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
                    className="absolute inset-0 bg-gradient-to-r from-[#F4F8FD]/95 via-[#F4F8FD]/50 to-[#F4F8FD]/5"
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
                                        Managed Detection & Response
                                    </p>

                                </div>

                                <h1 className="text-5xl font-medium leading-[0.94] tracking-[-0.055em] text-[#0B1F38] md:text-6xl lg:text-[5.8rem]">
                                    See the threat.
                                    <br />
                                    <span className="text-[#1769E8]">
                                        Before the incident.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-base leading-8 text-[#52657D] md:text-lg">
                                    Continuous detection, investigation, and
                                    human-led response for the threats that
                                    matter most to your organization.
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
                                        Always watching
                                    </span>

                                </div>

                            </div>
                        </Reveal>

                        {/* RIGHT — MONITOR */}

                        {/* <Reveal>
                            <div className="relative mx-auto w-full max-w-[500px]">

                                <div className="absolute inset-0 rounded-[2rem] bg-[#56A9FF]/10 blur-3xl" />

                                <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_30px_90px_rgba(23,105,232,0.14)] backdrop-blur-xl">

                                    <div className="flex items-center justify-between border-b border-[#E2EBF4] pb-5">

                                        <div>
                                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8A9CAF]">
                                                Cyrus MDR
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#172B45]">
                                                Security operations
                                            </p>
                                        </div>

                                        <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#1769E8]">
                                            <span className="h-2 w-2 rounded-full bg-[#56A9FF] shadow-[0_0_12px_rgba(86,169,255,0.7)]" />
                                            Monitoring
                                        </span>

                                    </div>


                                    <div className="relative my-7 h-[250px] overflow-hidden rounded-2xl bg-[#F4F8FD]">

                                        <div
                                            className="absolute inset-0 opacity-30"
                                            style={{
                                                backgroundImage: `
                                                    linear-gradient(#1769E8 1px, transparent 1px),
                                                    linear-gradient(90deg, #1769E8 1px, transparent 1px)
                                                `,
                                                backgroundSize: '40px 40px',
                                            }}
                                        />


                                        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#56A9FF]/40 bg-white shadow-[0_10px_40px_rgba(23,105,232,0.15)]">

                                            <Radar
                                                size={30}
                                                strokeWidth={1.4}
                                                className="text-[#1769E8]"
                                            />

                                        </div>


                                        <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1769E8]/10" />

                                        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1769E8]/10" />


                                        <span className="absolute left-[18%] top-[30%] h-2 w-2 rounded-full bg-[#56A9FF]" />

                                        <span className="absolute right-[20%] top-[25%] h-2 w-2 rounded-full bg-[#1769E8]" />

                                        <span className="absolute bottom-[25%] left-[25%] h-2 w-2 rounded-full bg-[#56A9FF]" />

                                        <span className="absolute bottom-[28%] right-[18%] h-2 w-2 rounded-full bg-[#1769E8]" />

                                    </div>


                                    <div className="grid grid-cols-3 divide-x divide-[#E2EBF4]">

                                        <div className="px-3 first:pl-0">
                                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8A9CAF]">
                                                Coverage
                                            </p>

                                            <p className="mt-2 text-sm font-semibold text-[#172B45]">
                                                24 / 7
                                            </p>
                                        </div>

                                        <div className="px-3">
                                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8A9CAF]">
                                                Detection
                                            </p>

                                            <p className="mt-2 text-sm font-semibold text-[#172B45]">
                                                Continuous
                                            </p>
                                        </div>

                                        <div className="px-3 pr-0">
                                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8A9CAF]">
                                                Response
                                            </p>

                                            <p className="mt-2 text-sm font-semibold text-[#1769E8]">
                                                Human-led
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </Reveal> */}

                    </div>
                </div>
            </section>


            {/* =========================================================
                THREAT LANDSCAPE
            ========================================================= */}

            <section className="relative overflow-hidden bg-white py-24 md:py-32">

                <div className="container">

                    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                        <Reveal>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-[2px] w-10 bg-[#1769E8]" />

                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                    The problem
                                </p>

                            </div>

                            <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                Threats don't
                                <br />
                                <span className="text-[#1769E8]">
                                    wait for you.
                                </span>
                            </h2>

                        </Reveal>

                        <Reveal>

                            <div className="max-w-2xl">

                                <p className="text-lg leading-8 text-[#52657D]">
                                    Modern attacks move quickly, quietly, and
                                    across multiple layers of your environment.
                                    Security teams need more than tools that
                                    generate alerts. They need the expertise to
                                    understand what those signals mean.
                                </p>

                                <p className="mt-6 text-base leading-8 text-[#64778E]">
                                    Cyrus combines continuous monitoring,
                                    advanced detection technology, and
                                    experienced security professionals to
                                    separate genuine threats from the noise.
                                </p>

                            </div>

                        </Reveal>

                    </div>

                </div>

            </section>


            {/* =========================================================
                WHAT MDR DOES
            ========================================================= */}

            <section className="border-y border-[#DCE8F7] bg-[#F4F8FD] py-24 md:py-32">

                <div className="container">

                    <Reveal>

                        <div className="max-w-3xl">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-[2px] w-10 bg-[#1769E8]" />

                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                    What MDR delivers
                                </p>

                            </div>

                            <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                From signal
                                <br />
                                <span className="text-[#1769E8]">
                                    to response.
                                </span>
                            </h2>

                        </div>

                    </Reveal>

                    <div className="mt-14 grid gap-4 md:grid-cols-2">

                        {[
                            {
                                icon: Eye,
                                number: '01',
                                title: 'Continuous detection',
                                text: 'Monitor your environment continuously to identify suspicious activity before it becomes a serious problem.',
                            },
                            {
                                icon: Activity,
                                number: '02',
                                title: 'Expert investigation',
                                text: 'Experienced analysts investigate the signals that matter and establish what is really happening.',
                            },
                            {
                                icon: Siren,
                                number: '03',
                                title: 'Rapid response',
                                text: 'When a genuine threat emerges, we help contain it quickly and guide the response process.',
                            },
                            {
                                icon: ShieldCheck,
                                number: '04',
                                title: 'Continuous improvement',
                                text: 'Every investigation creates insight that can strengthen your security posture over time.',
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
                HUMAN LAYER
            ========================================================= */}

            <section className="bg-white py-24 md:py-32">

                <div className="container">

                    <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">

                        <Reveal>

                            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#DCE8F7]">

                                <Image
                                    src="/services/mdr-1.webp"
                                    alt=""
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />

                                <div className="absolute inset-0 bg-gradient-to-tr from-[#071827]/30 via-transparent to-[#56A9FF]/10" />

                            </div>

                        </Reveal>

                        <Reveal>

                            <div className="max-w-xl">

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-[2px] w-10 bg-[#1769E8]" />

                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                        The human layer
                                    </p>

                                </div>

                                <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#0B1F38] md:text-5xl">
                                    Technology sees
                                    <br />
                                    <span className="text-[#1769E8]">
                                        signals.
                                    </span>
                                </h2>

                                <p className="mt-7 text-lg leading-8 text-[#52657D]">
                                    People understand the story.
                                </p>

                                <p className="mt-5 text-base leading-8 text-[#64778E]">
                                    Automation can surface anomalies, but
                                    context is what turns an alert into a
                                    decision. Our security professionals bring
                                    experience, judgment, and business context
                                    to every investigation.
                                </p>

                                <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#1769E8]">

                                    <span className="h-px w-10 bg-[#56A9FF]" />

                                    Human-led security operations

                                </div>

                            </div>

                        </Reveal>

                    </div>

                </div>

            </section>


            {/* =========================================================
                HOW IT WORKS
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#0B2742] py-24 md:py-32">

                <div
                    aria-hidden="true"
                    className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#56A9FF]/10 blur-[140px]"
                />

                <div className="container relative">

                    <Reveal>

                        <div className="max-w-2xl">

                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#56A9FF]">
                                How it works
                            </p>

                            <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                                One continuous
                                <br />
                                <span className="text-[#56A9FF]">
                                    security loop.
                                </span>
                            </h2>

                        </div>

                    </Reveal>

                    <div className="mt-16 divide-y divide-white/10 border-y border-white/10">

                        {[
                            ['01', 'Detect', 'Signals are continuously collected and analyzed across your environment.'],
                            ['02', 'Investigate', 'Experienced analysts determine which activity represents genuine risk.'],
                            ['03', 'Respond', 'We help contain threats and guide the appropriate response.'],
                            ['04', 'Learn', 'Every incident strengthens the next layer of your security program.'],
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
                                Less uncertainty.
                                <br />
                                <span className="text-[#1769E8]">
                                    More confidence.
                                </span>
                            </h2>

                        </Reveal>

                        <Reveal>

                            <div className="grid gap-3 sm:grid-cols-2">

                                {[
                                    'Continuous security visibility',
                                    'Faster threat identification',
                                    'Expert investigation',
                                    'Human-led response',
                                    'Reduced operational burden',
                                    'Stronger security decisions',
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
                                Ready when you are
                            </p>

                            <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">
                                Know what&apos;s happening
                                <br />
                                <span className="text-[#56A9FF]">
                                    before it becomes
                                </span>
                                <br />
                                your next incident.
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