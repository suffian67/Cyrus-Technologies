import Link from 'next/link'

import {
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { Reveal } from '@/components/site-interactions'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        border-t border-[#DCE8F7]
        bg-[#F4F8FD]
        py-24 md:py-32
      "
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      {/* Main blue glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 -top-40
          h-[600px] w-[600px]
          rounded-full
          bg-[#56A9FF]/[0.16]
          blur-[150px]
        "
      />

      {/* Secondary blue glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 bottom-[-180px]
          h-[600px] w-[600px]
          rounded-full
          bg-[#1769E8]/[0.08]
          blur-[150px]
        "
      />

      {/* Central white atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[500px] w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/70
          blur-[130px]
        "
      />

      {/* Very subtle grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage: `
            linear-gradient(#1769E8 1px, transparent 1px),
            linear-gradient(90deg, #1769E8 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Decorative orbit */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 top-1/2
          h-[520px] w-[520px]
          -translate-y-1/2
          rounded-full
          border border-[#1769E8]/[0.045]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[-20px] top-1/2
          h-[320px] w-[320px]
          -translate-y-1/2
          rounded-full
          border border-[#56A9FF]/[0.08]
        "
      />

      <div className="container relative">

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}

        <div
          className="
            grid gap-14
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-center
          "
        >

          {/* =====================================================
              LEFT — MAIN CTA
          ===================================================== */}

          <Reveal>

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#1769E8]" />

              <p
                className="
                  text-xs font-bold
                  uppercase tracking-[0.24em]
                  text-[#1769E8]
                "
              >
                Start a conversation
              </p>

            </div>

            {/* Heading */}
            <h2
              className="
                max-w-3xl
                text-5xl
                font-medium
                leading-[0.98]
                tracking-[-0.05em]
                text-[#0B1F38]
                md:text-6xl
                lg:text-[5.5rem]
              "
            >
              Let&apos;s make your
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#1769E8]
                  via-[#56A9FF]
                  to-[#0B4D91]
                  bg-clip-text
                  text-transparent
                "
              >
                next move safer.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-7
                text-[#52657D]
                md:text-lg
              "
            >
              Tell us a little about what you&apos;re building,
              protecting, or preparing for. We&apos;ll bring the right
              people to the table.
            </p>

            {/* Email CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

              {/* <Link
                href="mailto:hello@cyrustechnologies.com"
                className="
                  group
                  flex w-fit
                  items-center gap-3
                  rounded-full
                  bg-[#1769E8]
                  px-6 py-3.5
                  text-sm font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(23,105,232,0.20)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-[#0B4D91]
                  hover:shadow-[0_20px_45px_rgba(23,105,232,0.25)]
                "
              >
                hello@cyrustechnologies.com

                <span
                  className="
                    flex h-7 w-7
                    items-center justify-center
                    rounded-full
                    bg-white/15
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight size={15} />
                </span>
              </Link> */}
              <Link
                href="mailto:hello@cyrustechnologies.com"
                className="
    group relative
    inline-flex
    items-center
    gap-4
    overflow-hidden
    rounded-full
    border border-[#1769E8]
    bg-[#1769E8]
    px-7 py-4
    text-sm font-semibold
    text-white
    shadow-[0_12px_35px_rgba(23,105,232,0.22)]
    transition-all duration-300
    hover:-translate-y-1
    hover:bg-[#0B4D91]
    hover:text-white
    hover:shadow-[0_18px_45px_rgba(23,105,232,0.32)]
  "
              >
                <span
                  aria-hidden="true"
                  className="
      pointer-events-none
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/[0.14]
      to-transparent
      transition-transform duration-700
      group-hover:translate-x-full
    "
                />

                <span className="relative whitespace-nowrap text-white">
                  hello@cyrustechnologies.com
                </span>

                <span
                  className="
                  relative
                  flex h-8 w-8 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-white
                  text-[#1769E8]
                  transition-all duration-300
                  group-hover:translate-x-1
                  group-hover:bg-[#56A9FF]
                  group-hover:text-white
                "
                >
                  <ArrowUpRight size={16} />
                </span>
              </Link>

            </div>

            {/* Trust indicators */}
            <div
              className="
                mt-10
                flex flex-wrap
                items-center
                gap-x-6 gap-y-3
                text-xs
                font-medium
                text-[#71859A]
              "
            >

              <span className="flex items-center gap-2">
                <ShieldCheck
                  size={15}
                  className="text-[#1769E8]"
                />
                No-pressure conversation
              </span>

              <span
                className="
                  hidden h-3 w-px
                  bg-[#C9D9E8]
                  sm:block
                "
              />

              <span className="flex items-center gap-2">
                <MessageCircle
                  size={15}
                  className="text-[#56A9FF]"
                />
                Practical guidance
              </span>

            </div>

          </Reveal>


          {/* =====================================================
              RIGHT — SECURITY SIGNAL SESSION
          ===================================================== */}

          <Reveal className="relative">

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border border-[#D5E5F3]
                bg-white/75
                p-7
                shadow-[0_30px_90px_rgba(23,105,232,0.10)]
                backdrop-blur-xl
                md:p-8
              "
            >

              {/* Card glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -right-24 -top-24
                  h-64 w-64
                  rounded-full
                  bg-[#56A9FF]/[0.12]
                  blur-[70px]
                "
              />

              {/* Card corner detail */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  right-6 top-6
                  h-10 w-10
                  border-r border-t
                  border-[#1769E8]/20
                "
              />

              {/* =================================================
                  CARD HEADER
              ================================================= */}

              <div className="relative">

                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-2xl
                    border border-[#56A9FF]/30
                    bg-[#56A9FF]/10
                    text-[#1769E8]
                  "
                >
                  <Sparkles
                    size={21}
                    strokeWidth={1.5}
                  />
                </div>

                <p
                  className="
                    mt-7
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[#1769E8]
                  "
                >
                  Security Signal Session
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                    tracking-[-0.025em]
                    text-[#0B1F38]
                    md:text-3xl
                  "
                >
                  Not sure where
                  <br />
                  to begin?
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-[#64778E]
                  "
                >
                  Our 30-minute Security Signal Session is a
                  no-pressure way to identify your biggest exposure
                  and your best next step.
                </p>

              </div>


              {/* =================================================
                  SIGNAL VISUALIZATION
              ================================================= */}

              <div
                aria-hidden="true"
                className="
                  relative
                  my-8
                  h-24
                  overflow-hidden
                  rounded-2xl
                  border border-[#DCE8F7]
                  bg-[#F7FBFF]
                "
              >

                {/* Horizontal signal */}
                <div
                  className="
                    absolute
                    left-5 right-5
                    top-1/2
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#56A9FF]/60
                    to-transparent
                  "
                />

                {/* Signal points */}

                <span
                  className="
                    absolute
                    left-[18%]
                    top-1/2
                    h-2 w-2
                    -translate-y-1/2
                    rounded-full
                    bg-[#56A9FF]
                    shadow-[0_0_14px_rgba(86,169,255,0.8)]
                  "
                />

                <span
                  className="
                    absolute
                    left-[43%]
                    top-[38%]
                    h-1.5 w-1.5
                    rounded-full
                    bg-[#1769E8]/60
                  "
                />

                <span
                  className="
                    absolute
                    left-[67%]
                    top-[58%]
                    h-2 w-2
                    rounded-full
                    bg-[#8DCCFF]
                    shadow-[0_0_14px_rgba(141,204,255,0.7)]
                  "
                />

                <span
                  className="
                    absolute
                    right-[17%]
                    top-[42%]
                    h-1.5 w-1.5
                    rounded-full
                    bg-[#1769E8]/50
                  "
                />

                {/* Signal label */}
                <span
                  className="
                    absolute
                    bottom-3 left-4
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#91A5B8]
                  "
                >
                  Identify → Prioritize → Act
                </span>

              </div>


              {/* =================================================
                  SESSION CTA
              ================================================= */}

              <Link
                href="/contact"
                className="
                  group
                  relative
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  border border-[#BFDDF5]
                  bg-[#56A9FF]/[0.08]
                  px-5 py-4
                  text-sm
                  font-semibold
                  text-[#1769E8]
                  transition-all duration-300
                  hover:border-[#56A9FF]/50
                  hover:bg-[#56A9FF]/[0.14]
                "
              >

                <span>
                  Book a session
                </span>

                <span
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    bg-[#1769E8]/10
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:bg-[#1769E8]/15
                  "
                >
                  <ArrowUpRight size={15} />
                </span>

              </Link>


              {/* Bottom indicator */}
              <div className="mt-5 flex items-center gap-2">

                <span
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    bg-[#56A9FF]
                    shadow-[0_0_10px_rgba(86,169,255,0.8)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#91A5B8]
                  "
                >
                  Start with a signal, not a sales pitch
                </span>

              </div>

            </div>

          </Reveal>

        </div>


        {/* =========================================================
            BOTTOM TRANSITION INTO FOOTER
        ========================================================= */}

        <Reveal>

          <div
            className="
              mt-20
              flex items-center gap-4
              border-t border-[#D5E3EF]
              pt-7
            "
          >

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#91A5B8]
              "
            >
              Cyrus Technologies
            </span>

            <div
              className="
                h-px flex-1
                bg-gradient-to-r
                from-[#BFD6E8]
                to-transparent
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#1769E8]/70
              "
            >
              Independent cyber defense
            </span>

          </div>

        </Reveal>

      </div>
    </section>
  )
}