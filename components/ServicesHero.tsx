import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, ShieldCheck } from 'lucide-react'

import { Reveal } from '@/components/site-interactions'

export function ServicesHero() {
    return (
        <section className="relative overflow-hidden border-b border-[#DCE8F7] bg-[#F4F8FD] py-20 md:py-28 lg:min-h-[680px] lg:py-32">

            {/* =========================================================
                BACKGROUND ATMOSPHERE
            ========================================================= */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-[#56A9FF]/[0.12] blur-[140px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-60 left-1/4 h-[520px] w-[520px] rounded-full bg-[#1769E8]/[0.06] blur-[140px]"
            />

            {/* =========================================================
                TECHNICAL GRID
            ========================================================= */}

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

            {/* =========================================================
                TOP ACCENT
            ========================================================= */}

            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#56A9FF] to-transparent"
            />

            <div className="container relative">

                <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

                    {/* =================================================
                        LEFT — HERO COPY
                    ================================================= */}

                    <Reveal>
                        <div className="max-w-3xl">

                            {/* Eyebrow */}

                            <div className="mb-7 flex items-center gap-3">

                                <span className="h-[2px] w-10 bg-[#1769E8]" />

                                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1769E8]">
                                    Our capabilities
                                </p>

                                <span className="ml-1 text-[10px] font-semibold tracking-[0.2em] text-[#6D8198]">
                                    CYRUS / 02
                                </span>

                            </div>

                            {/* Heading */}

                            <h1 className="text-5xl font-medium leading-[0.96] tracking-[-0.05em] text-[#0B1F38] md:text-6xl lg:text-[5.4rem]">
                                Security built
                                <br />
                                around
                                <br />
                                <span className="bg-gradient-to-r from-[#1769E8] via-[#358BEF] to-[#56A9FF] bg-clip-text text-transparent">
                                    what matters.
                                </span>
                            </h1>

                            {/* Description */}

                            <p className="mt-8 max-w-2xl text-base leading-7 text-[#52657D] md:text-lg md:leading-8">
                                We bring strategy, technology, and experienced
                                people together to help organizations understand
                                risk, strengthen resilience, and move forward
                                with confidence.
                            </p>

                            {/* CTA */}

                            <div className="mt-10 flex flex-wrap items-center gap-5">

                                <Link
                                    href="#capabilities"
                                    className="group inline-flex items-center gap-3 rounded-full bg-[#1769E8] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B4D91] hover:shadow-[0_14px_40px_rgba(23,105,232,0.22)]"
                                >
                                    Explore capabilities

                                    <ArrowDownRight
                                        size={17}
                                        className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </Link>

                                <span className="text-xs font-medium tracking-[0.08em] text-[#6D8198]">
                                    Practical. Human-led. Built to move.
                                </span>

                            </div>

                        </div>
                    </Reveal>

                    {/* =================================================
                        RIGHT — VISUAL
                    ================================================= */}

                    <Reveal className="relative">

                        <div className="relative mx-auto aspect-square max-w-[520px]">

                            {/* Large ambient glow */}

                            <div
                                aria-hidden="true"
                                className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#56A9FF]/10 blur-[80px]"
                            />

                            {/* Image */}

                            <div className="absolute inset-[8%] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_30px_80px_rgba(23,105,232,0.12)]">

                                <Image
                                    src="/services/services-hero.jpg"
                                    alt=""
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 70vw, 500px"
                                />

                                {/* Image overlay */}

                                <div className="absolute inset-0 bg-gradient-to-br from-[#1769E8]/10 via-transparent to-[#071827]/15" />

                            </div>

                            {/* =================================================
                                TECHNICAL FRAME
                            ================================================= */}

                            <div
                                aria-hidden="true"
                                className="absolute inset-[4%] rounded-[2.5rem] border border-[#1769E8]/10"
                            />

                            <div
                                aria-hidden="true"
                                className="absolute inset-[13%] rounded-[2rem] border border-[#56A9FF]/20"
                            />

                            {/* =================================================
                                CONNECTION LINES
                            ================================================= */}

                            <div
                                aria-hidden="true"
                                className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[#1769E8]/20 to-transparent"
                            />

                            <div
                                aria-hidden="true"
                                className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#1769E8]/15 to-transparent"
                            />

                            {/* =================================================
                                FLOATING STATUS CARD
                            ================================================= */}

                            <div className="absolute bottom-[8%] left-[-2%] rounded-2xl border border-[#D5E4F3] bg-white/95 px-5 py-4 shadow-[0_18px_50px_rgba(23,105,232,0.12)] backdrop-blur-md">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1769E8]/10 text-[#1769E8]">
                                        <ShieldCheck
                                            size={18}
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8A9CAF]">
                                            Security posture
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-[#172B45]">
                                            Built around you
                                        </p>
                                    </div>

                                </div>

                            </div>

                            {/* =================================================
                                TOP RIGHT LABEL
                            ================================================= */}

                            <div className="absolute right-[0%] top-[10%] rounded-full border border-[#D5E4F3] bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md">

                                <div className="flex items-center gap-2">

                                    <span className="h-1.5 w-1.5 rounded-full bg-[#56A9FF] shadow-[0_0_10px_rgba(86,169,255,0.7)]" />

                                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#52657D]">
                                        Human-led security
                                    </span>

                                </div>

                            </div>

                        </div>

                    </Reveal>

                </div>

            </div>
        </section>
    )
}