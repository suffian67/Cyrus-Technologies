import Link from 'next/link'

import {
  ArrowDown,
  ArrowUpRight,
  Check,
} from 'lucide-react'

import { Reveal } from '@/components/site-interactions'

const steps = [
  [
    '01',
    'See the whole picture',
    'We connect the dots across people, process, and technology.',
  ],
  [
    '02',
    'Prioritize what matters',
    'Every recommendation is tied to risk, revenue, or resilience.',
  ],
  [
    '03',
    'Build for the next chapter',
    'Your program evolves as quickly as your ambition does.',
  ],
]

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="
        relative overflow-hidden
        border-t border-[#DCE8F7]
        bg-white
        py-24 md:py-32
      "
    >
      {/* Background atmosphere */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-0
          h-[500px] w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#56A9FF]/[0.055]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-60 -left-40
          h-[500px] w-[500px]
          rounded-full
          bg-[#1769E8]/[0.035]
          blur-[130px]
        "
      />

      {/* Very subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(#1769E8 1px, transparent 1px),
            linear-gradient(90deg, #1769E8 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="container relative">

        {/* Heading */}
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

            <div>

              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#1769E8]" />

                <p
                  className="
                    text-xs font-bold
                    uppercase tracking-[0.24em]
                    text-[#1769E8]
                  "
                >
                  An operating philosophy
                </p>
              </div>

              <h2
                className="
                  text-4xl font-medium
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#0B1F38]
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Good security
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-[#1769E8]
                    via-[#56A9FF]
                    to-[#0B1F38]
                    bg-clip-text
                    text-transparent
                  "
                >
                  feels human.
                </span>
              </h2>
            </div>

            <div className="lg:pb-1">

              <p
                className="
                  max-w-xl
                  text-base
                  leading-7
                  text-[#52657D]
                  md:text-lg
                "
              >
                We combine sharp technical expertise with the context,
                clarity, and care that lets people make better decisions
                under pressure.
              </p>

              <Link
                href="#contact"
                className="
                  group mt-7
                  flex w-fit
                  items-center gap-2
                  text-sm font-semibold
                  text-[#1769E8]
                  transition-colors duration-300
                  hover:text-[#0B1F38]
                "
              >
                Meet your security partner

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

            </div>
          </div>
        </Reveal>

        {/* Process */}
        <div className="relative mt-20 md:mt-24">

          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              left-[31px]
              top-8 bottom-8
              w-px
              bg-gradient-to-b
              from-[#1769E8]/10
              via-[#56A9FF]
              to-[#1769E8]/10
              md:left-[51px]
            "
          />

          {/* Moving glow on line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              left-[29px]
              top-8
              h-24 w-[5px]
              rounded-full
              bg-[#56A9FF]/50
              blur-[5px]
              md:left-[49px]
            "
          />

          <div className="space-y-5">

            {steps.map(([number, title, text], index) => (
              <Reveal
                key={number}
                className="group"
              >
                <div
                  className="
                    relative
                    flex gap-7
                    rounded-[22px]
                    border border-transparent
                    p-4
                    transition-all duration-500
                    hover:border-[#D9E8F5]
                    hover:bg-[#F8FBFF]
                    hover:shadow-[0_18px_50px_rgba(23,105,232,0.07)]
                    md:gap-8
                    md:p-5
                  "
                >

                  {/* Step marker */}
                  <div className="relative z-10 shrink-0">

                    <div
                      className="
                        flex h-16 w-16
                        items-center justify-center
                        rounded-full
                        border
                        border-[#CFE2F5]
                        bg-white
                        text-sm font-bold
                        tracking-[0.12em]
                        text-[#1769E8]
                        shadow-[0_6px_25px_rgba(23,105,232,0.08)]
                        transition-all duration-500
                        group-hover:border-[#56A9FF]
                        group-hover:bg-[#56A9FF]
                        group-hover:text-white
                        group-hover:shadow-[0_10px_30px_rgba(86,169,255,0.25)]
                        md:h-[104px]
                        md:w-[104px]
                        md:text-base
                      "
                    >
                      {number}
                    </div>

                    {/* Active dot */}
                    <span
                      className="
                        absolute
                        -right-1
                        top-1/2
                        h-2.5 w-2.5
                        -translate-y-1/2
                        rounded-full
                        bg-[#56A9FF]
                        opacity-0
                        shadow-[0_0_15px_rgba(86,169,255,0.8)]
                        transition-opacity duration-300
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="
                      flex min-h-[104px]
                      flex-1
                      flex-col
                      justify-center
                      py-2
                      md:flex-row
                      md:items-center
                      md:justify-between
                      md:gap-10
                    "
                  >

                    <div className="max-w-md">

                      <div className="mb-2 flex items-center gap-3">

                        <span
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[#9BAEC1]
                          "
                        >
                          Step {number}
                        </span>

                        <span
                          className="
                            h-px w-6
                            bg-[#56A9FF]/40
                            transition-all duration-500
                            group-hover:w-12
                          "
                        />
                      </div>

                      <h3
                        className="
                          text-xl
                          font-semibold
                          tracking-[-0.02em]
                          text-[#172B45]
                          transition-colors duration-300
                          group-hover:text-[#1769E8]
                          md:text-2xl
                        "
                      >
                        {title}
                      </h3>

                    </div>

                    <p
                      className="
                        mt-3
                        max-w-lg
                        text-sm
                        leading-6
                        text-[#64778E]
                        md:mt-0
                        md:text-base
                      "
                    >
                      {text}
                    </p>

                    {/* Check */}
                    <div
                      className="
                        mt-4
                        hidden h-9 w-9
                        shrink-0
                        items-center justify-center
                        rounded-full
                        border border-[#D5E5F3]
                        bg-white
                        text-[#56A9FF]
                        transition-all duration-300
                        group-hover:border-[#56A9FF]/40
                        group-hover:bg-[#56A9FF]/10
                        md:flex
                      "
                    >
                      <Check size={16} strokeWidth={2} />
                    </div>

                  </div>
                </div>
              </Reveal>
            ))}

          </div>
        </div>

        {/* Bottom statement */}
        <Reveal>
          <div
            className="
              mt-16
              flex flex-col
              items-start
              gap-6
              border-t border-[#DCE8F7]
              pt-8
              md:mt-20
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-[#56A9FF]/10
                  text-[#1769E8]
                "
              >
                <ArrowDown size={18} />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#9BAEC1]
                  "
                >
                  The outcome
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold
                    text-[#172B45]
                  "
                >
                  A security program built to move with you.
                </p>
              </div>

            </div>

            <div
              className="
                flex items-center gap-2
                text-xs font-bold
                uppercase tracking-[0.2em]
                text-[#1769E8]
              "
            >
              <span
                className="
                  h-2 w-2
                  rounded-full
                  bg-[#56A9FF]
                  shadow-[0_0_12px_rgba(86,169,255,0.7)]
                "
              />
              Clarity → Action → Momentum
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}