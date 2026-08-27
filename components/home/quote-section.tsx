import { ArrowUpRight, Quote } from 'lucide-react'

import { Reveal } from '@/components/site-interactions'

export function QuoteSection() {
  return (
    <section
      className="
        relative overflow-hidden
        border-t border-[#CFE4F7]
        bg-gradient-to-br
        from-[#EAF5FF]
        via-[#F7FBFF]
        to-[#EEF7FF]
        py-24 md:py-32
      "
    >
      {/* Main blue atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[500px] w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#56A9FF]/[0.10]
          blur-[140px]
        "
      />

      {/* Deep blue glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 top-1/2
          h-[350px] w-[350px]
          -translate-y-1/2
          rounded-full
          bg-[#1769E8]/[0.06]
          blur-[100px]
        "
      />

      {/* Large ghost quotation */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[4%] top-[-20px]
          select-none
          font-serif
          text-[280px]
          font-bold
          leading-none
          tracking-[-0.1em]
          text-[#1769E8]/[0.055]
          md:text-[420px]
        "
      >
        “
      </div>

      {/* Subtle technical grid */}
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

      <div className="container relative">

        <Reveal>
          <div className="mx-auto max-w-5xl">

            {/* Label */}
            <div className="mb-10 flex items-center gap-4">

              <span className="h-px w-10 bg-[#1769E8]" />

              <p
                className="
                  text-xs font-bold
                  uppercase tracking-[0.24em]
                  text-[#1769E8]
                "
              >
                Client perspective
              </p>

              <span className="h-px flex-1 bg-gradient-to-r from-[#1769E8]/20 to-transparent" />

            </div>

            {/* Quote */}
            <blockquote
              className="
                relative
                max-w-4xl
                text-3xl
                font-medium
                leading-[1.18]
                tracking-[-0.035em]
                text-[#0B1F38]
                md:text-5xl
                lg:text-[4.25rem]
              "
            >
              They gave us something more valuable than a clean audit:
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
                {' '}
                the confidence to move faster.
              </span>
            </blockquote>

            {/* Decorative signal */}
            <div className="mt-12 flex items-center gap-4">

              <div
                className="
                  relative h-px flex-1
                  bg-gradient-to-r
                  from-[#1769E8]/40
                  via-[#56A9FF]/30
                  to-transparent
                "
              >
                <span
                  className="
                    absolute left-0 top-1/2
                    h-2 w-2
                    -translate-y-1/2
                    rounded-full
                    bg-[#56A9FF]
                    shadow-[0_0_14px_rgba(86,169,255,0.7)]
                  "
                />
              </div>

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#8AA0B6]
                "
              >
                Trust, measured differently
              </span>

            </div>

            {/* Attribution */}
            <div
              className="
                mt-10
                flex flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <div className="flex items-center gap-4">

                {/* Initials */}
                <div
                  className="
                    relative
                    flex h-14 w-14
                    items-center justify-center
                    overflow-hidden
                    rounded-full
                    border border-[#56A9FF]/30
                    bg-gradient-to-br
                    from-[#1769E8]
                    to-[#56A9FF]
                    text-sm
                    font-bold
                    tracking-[0.08em]
                    text-white
                    shadow-[0_8px_25px_rgba(23,105,232,0.16)]
                  "
                >
                  MS

                  <span
                    className="
                      absolute inset-0
                      rounded-full
                      border border-white/20
                    "
                  />
                </div>

                <div>
                  <strong
                    className="
                      block
                      text-sm
                      font-semibold
                      text-[#172B45]
                    "
                  >
                    Marina Shah
                  </strong>

                  <span
                    className="
                      mt-1
                      block
                      text-sm
                      text-[#64778E]
                    "
                  >
                    VP of Technology, Northstar Health
                  </span>
                </div>

              </div>

              {/* Small quote icon */}
              <div
                className="
                  hidden
                  h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-[#D3E5F4]
                  bg-white/60
                  text-[#1769E8]
                  sm:flex
                "
              >
                <Quote size={17} strokeWidth={1.6} />
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}