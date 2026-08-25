import Link from 'next/link'

import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

import { Reveal } from '@/components/site-interactions'

const metrics = [
  {
    value: '24/7',
    label: 'Security monitoring',
    description: 'Continuous visibility across your critical environment.',
  },
  {
    value: '360°',
    label: 'Security visibility',
    description: 'One connected view across people, systems, and risk.',
  },
  {
    value: '<15m',
    label: 'Response readiness',
    description: 'Designed to move from signal to decisive action quickly.',
  },
]

export function MetricsSection() {
  return (
    <section
      className="
        relative overflow-hidden
        border-t border-[#DCE8F7]
        bg-[#F4F8FD]
        py-24 md:py-32
      "
    >
      {/* Main atmospheric gradient */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-b
          from-[#F4F8FD]
          via-white
          to-[#EEF7FF]
        "
      />

      {/* Blue atmospheric glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-0
          h-[500px] w-[800px]
          -translate-x-1/2
          rounded-full
          bg-[#56A9FF]/[0.08]
          blur-[140px]
        "
      />

      {/* Subtle dark depth */}
      <div
        className="
          pointer-events-none absolute
          -right-60 bottom-[-200px]
          h-[500px] w-[500px]
          rounded-full
          bg-[#071F38]/[0.035]
          blur-[120px]
        "
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(#1769E8 1px, transparent 1px),
            linear-gradient(90deg, #1769E8 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage:
            'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      />

      <div className="container relative">

        {/* Header */}
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">

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
                  The numbers behind the calm
                </p>
              </div>

              <h2
                className="
                  max-w-3xl
                  text-4xl font-medium
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#0B1F38]
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Ready for the
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
                  moment that matters.
                </span>
              </h2>
            </div>

            <div className="lg:pb-1">

              <p
                className="
                  max-w-xl
                  text-base leading-7
                  text-[#52657D]
                  md:text-lg
                "
              >
                Preparedness is measurable. We help teams move from
                uncertainty to a security program they can trust.
              </p>

              <Link
                href="#contact"
                className="
                  group mt-7
                  flex w-fit
                  items-center gap-3
                  rounded-full
                  bg-[#e4e5e7]
                  px-5 py-3
                  text-sm font-semibold
                  text-[#ffffff]
                  shadow-[0_12px_30px_rgba(11,31,56,0.12)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#1769E8]
                  hover:text-[#ffffff]
                  hover:shadow-[0_15px_35px_rgba(23,105,232,0.20)]
                "
              >
                See how we can help

                <span
                  className="
                    flex h-7 w-7
                    items-center justify-center
                    rounded-full
                    bg-white/10
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight size={15} />
                </span>
              </Link>

            </div>
          </div>
        </Reveal>

        {/* Metrics */}
        <div className="relative mt-20 md:mt-24">

          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              left-[8%] right-[8%] top-[72px]
              hidden h-px
              bg-gradient-to-r
              from-transparent
              via-[#56A9FF]/40
              to-transparent
              lg:block
            "
          />

          <div className="grid gap-5 md:grid-cols-3">

            {metrics.map((metric, index) => (
              <Reveal
                key={metric.label}
                className="group"
              >
                <div
                  className="
                    relative h-full
                    overflow-hidden
                    rounded-[22px]
                    border border-[#D6E5F3]
                    bg-white/70
                    p-7
                    backdrop-blur-md
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[#56A9FF]/40
                    hover:bg-white
                    hover:shadow-[0_20px_55px_rgba(23,105,232,0.10)]
                  "
                >

                  {/* Top signal */}
                  <div
                    className="
                      relative mb-8
                      flex items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        flex h-8 w-8
                        items-center justify-center
                        rounded-full
                        border border-[#56A9FF]/25
                        bg-[#56A9FF]/[0.08]
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
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-[#9AAEC2]
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Value */}
                  <div
                    className="
                      text-[4rem]
                      font-medium
                      leading-none
                      tracking-[-0.07em]
                      text-[#0B1F38]
                      transition-colors duration-300
                      group-hover:text-[#1769E8]
                      md:text-[4.5rem]
                    "
                  >
                    {metric.value}
                  </div>

                  {/* Label */}
                  <h3
                    className="
                      mt-5
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#1769E8]
                    "
                  >
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-6
                      text-[#64778E]
                    "
                  >
                    {metric.description}
                  </p>

                  {/* Decorative curve */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-8
                      -right-8
                      h-32 w-32
                      rounded-full
                      border
                      border-[#56A9FF]/10
                      transition-all duration-700
                      group-hover:scale-125
                      group-hover:border-[#56A9FF]/20
                    "
                  />

                  {/* Bottom accent */}
                  <div
                    className="
                      absolute bottom-0 left-0
                      h-[2px] w-0
                      bg-gradient-to-r
                      from-[#1769E8]
                      via-[#56A9FF]
                      to-transparent
                      transition-all duration-500
                      group-hover:w-full
                    "
                  />
                </div>
              </Reveal>
            ))}

          </div>
        </div>

        {/* Bottom statement */}
        <Reveal>
          <div
            className="
              mt-12
              flex flex-col gap-4
              border-t border-[#D6E5F3]
              pt-7
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                text-sm font-medium
                text-[#64778E]
              "
            >
              Confidence is not a feeling. It is a system.
            </p>

            <div className="flex items-center gap-3">
              <span
                className="
                  h-2 w-2
                  rounded-full
                  bg-[#56A9FF]
                  shadow-[0_0_12px_rgba(86,169,255,0.7)]
                "
              />

              <span
                className="
                  text-xs font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1769E8]
                "
              >
                Always prepared
              </span>

              <ArrowDownRight
                size={16}
                className="text-[#9AAEC2]"
              />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}