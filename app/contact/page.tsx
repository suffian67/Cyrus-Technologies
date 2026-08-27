import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Reveal } from '@/components/site-interactions'
import { PageHero } from '@/components/PageHero'

import {
    ArrowUpRight,
    Mail,
    MapPin,
    MessageCircle,
} from 'lucide-react'
import { ContactSection } from '@/components/home/contact-section'

export const metadata = {
    title: 'Contact Cyrus Technologies',
    description:
        'Talk with Cyrus Technologies about your cybersecurity priorities.',
}

const contactDetails = [
    {
        icon: Mail,
        label: 'Email',
        value: 'hello@cyrustechnologies.com',
        href: 'mailto:hello@cyrustechnologies.com',
        description: 'For general enquiries and new conversations.',
    },
    {
        icon: MessageCircle,
        label: 'Start a conversation',
        value: 'Tell us what matters',
        href: 'mailto:hello@cyrustechnologies.com',
        description: 'Share your challenge and we will bring the right people to the table.',
    },
    {
        icon: MapPin,
        label: 'Where we work',
        value: 'Global',
        href: undefined,
        description: 'Supporting organizations across locations and time zones.',
    },
]

export default function ContactPage() {
    return (
        <main>
            <Header />

            {/* =========================================================
                HERO
            ========================================================= */}

            <PageHero
                eyebrow="Start a conversation"
                index="04"
                title="Let's make your"
                highlight="next move safer."
                description="Tell us what you are building, protecting, or preparing for. We will bring the right people to the table."
                backgroundImage="/contact.jpg"
            />

            {/* =========================================================
                CONTACT INTRO
            ========================================================= */}

            <section className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
                <div className="container">

                    <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

                        {/* =================================================
                            LEFT CONTENT
                        ================================================= */}

                        <Reveal>
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-[2px] w-10 bg-[#1769E8]" />

                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                        Reach Cyrus
                                    </p>
                                </div>

                                <h2 className="text-4xl font-medium leading-[1.03] tracking-[-0.04em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                                    Let's talk
                                    <br />
                                    <span className="text-[#1769E8]">
                                        about what matters.
                                    </span>
                                </h2>

                                <p className="mt-8 max-w-lg text-base leading-8 text-[#52657D] md:text-lg">
                                    Send us a note and our team will follow up with a
                                    practical next step. No sales theatre, just a clear
                                    conversation about your security priorities.
                                </p>

                                <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#1769E8]">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1769E8]/20 bg-[#1769E8]/[0.06]">
                                        <ArrowUpRight size={16} />
                                    </span>

                                    <span>
                                        Start with a conversation
                                    </span>
                                </div>
                            </div>
                        </Reveal>

                        {/* =================================================
                            RIGHT CONTACT DETAILS
                        ================================================= */}

                        <Reveal className="relative">
                            <div className="grid gap-4">

                                {contactDetails.map(
                                    ({
                                        icon: Icon,
                                        label,
                                        value,
                                        href,
                                        description,
                                    }) => {
                                        const content = (
                                            <>
                                                <div className="flex items-start justify-between gap-6">

                                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#1769E8]/10 bg-[#1769E8]/[0.06] text-[#1769E8] transition-all duration-300 group-hover:border-[#56A9FF]/40 group-hover:bg-[#1769E8]/10">
                                                        <Icon
                                                            size={20}
                                                            strokeWidth={1.7}
                                                        />
                                                    </div>

                                                    {href && (
                                                        <ArrowUpRight
                                                            size={18}
                                                            className="text-[#8CA0B5] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1769E8]"
                                                        />
                                                    )}
                                                </div>

                                                <div className="mt-8">
                                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1769E8]/65">
                                                        {label}
                                                    </p>

                                                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-[#172B45] transition-colors duration-300 group-hover:text-[#0B4D91] md:text-2xl">
                                                        {value}
                                                    </h3>

                                                    <p className="mt-3 max-w-md text-sm leading-7 text-[#64778E]">
                                                        {description}
                                                    </p>
                                                </div>

                                                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#1769E8] to-[#56A9FF] transition-all duration-500 group-hover:w-full" />
                                            </>
                                        )

                                        if (href) {
                                            return (
                                                <a
                                                    key={label}
                                                    href={href}
                                                    className="group relative overflow-hidden rounded-2xl border border-[#D4E2F1] bg-gradient-to-br from-white via-white to-[#F2F7FD] p-7 shadow-[0_8px_30px_rgba(23,105,232,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#56A9FF]/50 hover:shadow-[0_24px_60px_rgba(23,105,232,0.10)]"
                                                >
                                                    {content}
                                                </a>
                                            )
                                        }

                                        return (
                                            <div
                                                key={label}
                                                className="group relative overflow-hidden rounded-2xl border border-[#D4E2F1] bg-gradient-to-br from-white via-white to-[#F2F7FD] p-7 shadow-[0_8px_30px_rgba(23,105,232,0.04)]"
                                            >
                                                {content}
                                            </div>
                                        )
                                    },
                                )}

                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* =========================================================
                EXPECTATION / TRUST STRIP
            ========================================================= */}

            <section className="relative overflow-hidden border-y border-[#DCE8F7] bg-[#F4F8FD] py-16 md:py-20">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#56A9FF]/[0.08] blur-[120px]"
                />

                <div className="container relative">
                    <Reveal>
                        <div className="grid gap-8 md:grid-cols-3 md:items-center">

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                                    What happens next
                                </p>
                            </div>

                            <div className="md:col-span-2">
                                <p className="max-w-3xl text-lg leading-8 text-[#52657D] md:text-xl">
                                    You bring the challenge. We bring the context,
                                    expertise, and people needed to understand it
                                    properly and decide what comes next.
                                </p>
                            </div>

                        </div>
                    </Reveal>
                </div>
            </section>

            {/* =========================================================
                CTA
            ========================================================= */}

            {/* <CTASection
                title={
                    <>
                        Build confidence
                        <br />
                        <span>before the moment.</span>
                    </>
                }
            /> */}
            <ContactSection />

            <Footer />
        </main>
    )
}