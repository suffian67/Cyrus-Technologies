import Link from 'next/link'

import {
  Activity,
  ArrowUpRight,
  Cloud,
  Fingerprint,
  LockKeyhole,
  Radar,
  Timer,
} from 'lucide-react'

import { Reveal } from '@/components/site-interactions'
import { serviceLinks } from '@/components/service-data'

const serviceIcons = [
  Radar,
  Cloud,
  Fingerprint,
  Activity,
  LockKeyhole,
  Timer,
]

const serviceDescriptions = [
  'Always-on threat hunting and human-led response for the signals that matter.',
  'Secure your cloud estate from first workload to full-scale transformation.',
  'Find the paths attackers will take before they get the chance.',
  'Turn requirements into a resilient operating advantage.',
  'A calm, expert response when the unexpected becomes urgent.',
  'Make every login, permission, and privileged action intentional.',
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-[#DCE8F7] bg-[#F4F8FD] py-20 md:py-28"
    >
      {/* Main atmospheric gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 70% 55% at 50% 0%,
              rgba(86, 169, 255, 0.16) 0%,
              rgba(86, 169, 255, 0.06) 38%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 45% 50% at 100% 55%,
              rgba(86, 169, 255, 0.10) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 45% 45% at 0% 85%,
              rgba(23, 105, 232, 0.07) 0%,
              transparent 70%
            )
          `,
        }}
      />

      {/* Subtle dark atmospheric depth */}
      <div
        className="pointer-events-none absolute -top-56 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-[0.035] blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, #000000 0%, transparent 70%)',
        }}
      />

      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -right-48 top-1/3 h-[500px] w-[500px] rounded-full bg-[#56A9FF]/[0.08] blur-[130px]" />

      <div className="pointer-events-none absolute -left-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#1769E8]/[0.06] blur-[130px]" />

      {/* Very subtle technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#1769E8 1px, transparent 1px),
            linear-gradient(90deg, #1769E8 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Top transition line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#56A9FF]/40 to-transparent" />

      <div className="container relative">

        {/* Section heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#56A9FF]" />

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1769E8]">
                What we do
              </p>

              <span className="h-px w-10 bg-[#56A9FF]" />
            </div>

            <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#0B1F38] md:text-5xl lg:text-6xl">
              Practical protection for
              <br />

              <span className="bg-gradient-to-r from-[#1769E8] via-[#56A9FF] to-[#0B1F38] bg-clip-text text-transparent">
                complex environments.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#52657D] md:text-lg">
              From proactive defense to decisive response, we make
              cybersecurity a force multiplier.
            </p>
          </div>
        </Reveal>

        {/* Services grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {serviceLinks.map(({ slug, label }, index) => {
            const Icon = serviceIcons[index]

            return (
              <Reveal
                key={slug}
                className="group"
              >
                <div
                  className="
            relative flex h-full min-h-[330px] flex-col
            overflow-hidden rounded-[22px]
            border border-[#CFE0F2]
            bg-gradient-to-br from-white via-[#F8FBFF] to-[#EDF6FF]
            p-7
            shadow-[0_10px_35px_rgba(23,105,232,0.055)]
            transition-all duration-500
            hover:-translate-y-2
            hover:border-[#56A9FF]/50
            hover:shadow-[0_25px_65px_rgba(23,105,232,0.14)]
          "
                >
                  {/* Large atmospheric glow */}
                  <div
                    className="
              pointer-events-none absolute
              -right-24 -top-24
              h-64 w-64
              rounded-full
              bg-[#56A9FF]/[0.10]
              blur-[70px]
              transition-all duration-700
              group-hover:bg-[#56A9FF]/[0.18]
              group-hover:scale-125
            "
                  />

                  {/* Secondary blue glow */}
                  <div
                    className="
              pointer-events-none absolute
              -bottom-32 -left-20
              h-56 w-56
              rounded-full
              bg-[#1769E8]/[0.035]
              blur-[70px]
              transition-all duration-700
              group-hover:bg-[#1769E8]/[0.07]
            "
                  />

                  {/* Ghost number */}
                  <span
                    className="
              pointer-events-none absolute
              -right-2 -top-8
              text-[150px]
              font-bold
              leading-none
              tracking-[-0.08em]
              text-[#1769E8]/[0.035]
              transition-all duration-700
              group-hover:text-[#1769E8]/[0.07]
              group-hover:-translate-y-2
            "
                  >
                    0{index + 1}
                  </span>

                  {/* Technical corner */}
                  <div
                    className="
              pointer-events-none absolute
              right-6 top-6
              h-9 w-9
              border-r border-t
              border-[#1769E8]/15
              transition-all duration-500
              group-hover:h-14
              group-hover:w-14
              group-hover:border-[#56A9FF]/50
            "
                  />

                  {/* Diagonal technical line */}
                  <div
                    className="
              pointer-events-none absolute
              right-[44px] top-[44px]
              h-px w-16
              origin-right
              rotate-[-45deg]
              bg-gradient-to-l
              from-[#56A9FF]/40
              to-transparent
              opacity-60
              transition-all duration-500
              group-hover:w-24
              group-hover:opacity-100
            "
                  />

                  {/* Subtle grid inside card */}
                  <div
                    className="
              pointer-events-none absolute
              right-0 top-0
              h-40 w-40
              opacity-[0.025]
              transition-opacity duration-500
              group-hover:opacity-[0.06]
            "
                    style={{
                      backgroundImage: `
                linear-gradient(#1769E8 1px, transparent 1px),
                linear-gradient(90deg, #1769E8 1px, transparent 1px)
              `,
                      backgroundSize: '18px 18px',
                      maskImage:
                        'linear-gradient(to bottom left, black, transparent 75%)',
                      WebkitMaskImage:
                        'linear-gradient(to bottom left, black, transparent 75%)',
                    }}
                  />

                  {/* Orbital decoration */}
                  <div
                    className="
              pointer-events-none absolute
              -right-7 top-20
              h-28 w-28
              rounded-full
              border border-[#56A9FF]/10
              transition-all duration-700
              group-hover:scale-125
              group-hover:border-[#56A9FF]/20
            "
                  />

                  <div
                    className="
              pointer-events-none absolute
              -right-2 top-[90px]
              h-20 w-20
              rounded-full
              border border-[#1769E8]/10
              transition-all duration-700
              group-hover:rotate-45
            "
                  />

                  {/* Top row */}
                  <div className="relative z-10 flex items-start justify-between">

                    {/* Icon node */}
                    <div className="relative">

                      {/* Outer ring */}
                      <div
                        className="
                  absolute -inset-2
                  rounded-2xl
                  border border-[#56A9FF]/10
                  opacity-70
                  transition-all duration-500
                  group-hover:-inset-3
                  group-hover:border-[#56A9FF]/25
                "
                      />

                      {/* Pulse ring */}
                      <div
                        className="
                  absolute -inset-4
                  rounded-2xl
                  border border-[#56A9FF]/[0.05]
                  opacity-0
                  transition-all duration-700
                  group-hover:opacity-100
                  group-hover:scale-110
                "
                      />

                      <div
                        className="
                  relative flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  border border-[#1769E8]/15
                  bg-gradient-to-br
                  from-[#1769E8]/[0.10]
                  to-[#56A9FF]/[0.04]
                  text-[#1769E8]
                  shadow-[0_8px_24px_rgba(23,105,232,0.08)]
                  transition-all duration-500
                  group-hover:border-[#56A9FF]/40
                  group-hover:from-[#1769E8]/[0.14]
                  group-hover:to-[#56A9FF]/[0.10]
                  group-hover:shadow-[0_10px_30px_rgba(23,105,232,0.16)]
                "
                      >
                        {/* Icon glow */}
                        <div
                          className="
                    pointer-events-none absolute inset-2
                    rounded-xl
                    bg-[#56A9FF]/10
                    blur-md
                    opacity-60
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                        />

                        <Icon
                          size={24}
                          strokeWidth={1.6}
                          className="
                    relative z-10
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                        />

                        {/* Small status dot */}
                        <span
                          className="
                    absolute -right-1 -top-1
                    h-2.5 w-2.5
                    rounded-full
                    border-2 border-[#F8FBFF]
                    bg-[#56A9FF]
                    shadow-[0_0_10px_rgba(86,169,255,0.6)]
                    transition-all duration-300
                    group-hover:scale-125
                  "
                        />
                      </div>
                    </div>

                    {/* Number */}
                    <span
                      className="
                relative z-10
                pt-1
                text-[11px]
                font-bold
                tracking-[0.24em]
                text-[#7890A8]
                transition-colors duration-300
                group-hover:text-[#1769E8]
              "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-9">

                    <h3
                      className="
                text-[21px]
                font-semibold
                tracking-[-0.02em]
                text-[#132A43]
                transition-all duration-300
                group-hover:text-[#1769E8]
              "
                    >
                      {label}
                    </h3>

                    <div
                      className="
                mt-3 h-px w-8
                bg-gradient-to-r
                from-[#1769E8]
                to-[#56A9FF]
                transition-all duration-500
                group-hover:w-16
              "
                    />

                    <p
                      className="
                mt-4
                max-w-sm
                text-sm
                leading-6
                text-[#65798F]
                transition-colors duration-300
                group-hover:text-[#526A82]
              "
                    >
                      {serviceDescriptions[index]}
                    </p>
                  </div>

                  {/* Bottom link */}
                  <Link
                    href={`/services/${slug}`}
                    className="
              relative z-10
              mt-auto
              flex w-fit
              items-center gap-3
              pt-8
              text-sm
              font-semibold
              text-[#1769E8]
              transition-all duration-300
              hover:text-[#0B1F38]
            "
                    aria-label={`Explore ${label}`}
                  >
                    <span>Explore capability</span>

                    <span
                      className="
                flex h-8 w-8
                items-center justify-center
                rounded-full
                border border-[#1769E8]/20
                bg-white/50
                transition-all duration-500
                group-hover:border-[#56A9FF]/50
                group-hover:bg-[#56A9FF]/10
                group-hover:translate-x-1
              "
                    >
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300"
                      />
                    </span>
                  </Link>

                  {/* Bottom energy line */}
                  <div
                    className="
              absolute bottom-0 left-0
              h-[3px] w-0
              bg-gradient-to-r
              from-[#1769E8]
              via-[#56A9FF]
              to-transparent
              transition-all duration-700
              group-hover:w-full
            "
                  />

                  {/* Bottom-right tiny node */}
                  <div
                    className="
              absolute bottom-5 right-6
              h-1.5 w-1.5
              rounded-full
              bg-[#56A9FF]/30
              transition-all duration-500
              group-hover:bg-[#1769E8]
              group-hover:shadow-[0_0_12px_rgba(86,169,255,0.8)]
            "
                  />
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Bottom statement */}
        <Reveal>
          <div className="mt-12 flex flex-col gap-4 border-t border-[#D5E3F2] pt-7 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-sm text-[#71849A]">
              One security partner. Six connected capabilities.
            </p>

            {/* <Link
              href="/services"
              className="
                group flex items-center gap-2
                text-sm font-semibold
                text-[#1769E8]
                transition-colors
                hover:text-[#0B1F38]
              "
            >
              View all capabilities

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link> */}
          </div>
        </Reveal>

      </div>
    </section>
  )
}