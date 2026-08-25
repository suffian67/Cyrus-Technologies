import Link from 'next/link'

import {
  ArrowUpRight,
  ArrowDownRight,
  CircleDot,
  ScanLine,
} from 'lucide-react'

import { Reveal } from '@/components/site-interactions'

export function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        border-t border-[#BBDDFB]
        bg-[#56A9FF]
        py-24 md:py-32
      "
    >
      {/* Main atmospheric background */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-br
          from-[#56A9FF]
          via-[#65B1FF]
          to-[#EAF5FF]
        "
      />

      {/* Deep blue atmospheric glow */}
      <div
        className="
          pointer-events-none absolute
          -left-48 -top-40
          h-[650px] w-[650px]
          rounded-full
          bg-[#1769E8]/30
          blur-[140px]
        "
      />

      {/* White atmospheric glow */}
      <div
        className="
          pointer-events-none absolute
          -bottom-56 -right-40
          h-[650px] w-[650px]
          rounded-full
          bg-white/30
          blur-[140px]
        "
      />

      {/* Oversized background typography */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-8 left-0
          select-none
          whitespace-nowrap
          text-[clamp(7rem,18vw,18rem)]
          font-bold
          leading-none
          tracking-[-0.09em]
          text-white/[0.10]
        "
      >
        CYRUS
      </div>

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage:
            'linear-gradient(to bottom, black 0%, transparent 75%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, transparent 75%)',
        }}
      />

      <div className="container relative">

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* LEFT — Artistic visual */}
          <Reveal className="relative min-h-[430px]">

            {/* Small section marker */}
            <div
              className="
                absolute left-0 top-0
                flex items-center gap-3
                text-xs font-bold
                uppercase tracking-[0.24em]
                text-white/80
              "
            >
              <span className="h-px w-10 bg-white/70" />
              Who we are
            </div>

            {/* Main visual */}
            <div
              className="
                absolute
                left-1/2 top-1/2
                h-[330px] w-[330px]
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              {/* Outer orbit */}
              <div
                className="
                  absolute inset-0
                  rounded-full
                  border border-white/25
                "
              />

              {/* Second orbit */}
              <div
                className="
                  absolute inset-[34px]
                  rounded-full
                  border border-white/20
                "
              />

              {/* Third orbit */}
              <div
                className="
                  absolute inset-[72px]
                  rounded-full
                  border border-white/20
                "
              />

              {/* Rotated orbit */}
              <div
                className="
                  absolute inset-[50px]
                  rotate-45
                  rounded-[40%]
                  border border-white/15
                "
              />

              {/* Crosshair */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />

              {/* Center */}
              <div
                className="
                  absolute left-1/2 top-1/2
                  flex h-24 w-24
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  border border-white/40
                  bg-white/10
                  shadow-[0_0_80px_rgba(255,255,255,0.22)]
                  backdrop-blur-sm
                "
              >
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-full
                    bg-white
                    text-[#1769E8]
                    shadow-[0_0_35px_rgba(255,255,255,0.4)]
                  "
                >
                  <CircleDot size={22} strokeWidth={1.5} />
                </div>
              </div>

              {/* Orbit points */}
              <span className="absolute left-[16%] top-[27%] h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]" />

              <span className="absolute right-[13%] top-[42%] h-1.5 w-1.5 rounded-full bg-white/80" />

              <span className="absolute bottom-[18%] left-[34%] h-1.5 w-1.5 rounded-full bg-white/70" />
            </div>

            {/* Floating label */}
            <div
              className="
                absolute bottom-5 left-0
                flex items-center gap-3
                rounded-full
                border border-white/25
                bg-white/[0.10]
                px-4 py-2.5
                text-xs font-medium
                text-white
                backdrop-blur-md
              "
            >
              <ScanLine size={14} />
              People before process
            </div>

            {/* Number */}
            <span
              className="
                absolute bottom-3 right-4
                text-[90px]
                font-bold
                leading-none
                tracking-[-0.08em]
                text-white/[0.10]
              "
            >
              01
            </span>
          </Reveal>

          {/* RIGHT — About content */}
          <Reveal>

            <div
              className="
                mb-6 flex items-center gap-3
                text-xs font-bold
                uppercase tracking-[0.22em]
                text-[#0B4D91]
              "
            >
              <span className="h-[2px] w-10 bg-[#0B4D91]" />
              About Us
            </div>

            <h2
              className="
                max-w-3xl
                text-4xl font-medium
                leading-[1.04]
                tracking-[-0.045em]
                text-[#071F38]
                md:text-5xl
                lg:text-[4.25rem]
              "
            >
              Security expertise
              <br />

              <span className="text-white drop-shadow-[0_2px_18px_rgba(11,77,145,0.12)]">
                with a human edge.
              </span>
            </h2>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-gradient-to-r from-[#0B4D91]/30 via-white/50 to-transparent" />

            <div className="grid gap-6 md:grid-cols-2">

              <p className="text-base leading-7 text-[#123B60]/80 md:text-lg">
                Cyrus Technologies helps ambitious organizations turn
                cybersecurity into a competitive advantage. We bring together
                seasoned operators, practical strategy, and technology that
                makes complex environments easier to understand.
              </p>

              <p className="text-base leading-7 text-[#123B60]/70 md:text-lg">
                From your first risk review to the moments that matter most,
                we stay close, communicate clearly, and keep your team moving
                forward with confidence.
              </p>

            </div>

            {/* Bottom statement */}
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B4D91]/70">
                  Our approach
                </p>

                <p className="mt-2 text-xl font-medium tracking-tight text-[#071F38]">
                  Clear thinking. Calm execution.
                </p>
              </div>

              <Link
                href="/about"
                className="
                  group flex w-fit
                  items-center gap-3
                  rounded-full
                  border border-[#071F38]/15
                  bg-white/20
                  px-5 py-3
                  text-sm font-semibold
                  text-[#071F38]
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:border-[#071F38]/30
                  hover:bg-white/40
                "
              >
                Meet your security partner

                <span
                  className="
                    flex h-7 w-7
                    items-center justify-center
                    rounded-full
                    bg-[#071F38]
                    text-white
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>

          </Reveal>
        </div>

        {/* Bottom transition */}
        <Reveal>
          <div className="mt-20 flex items-center gap-4 md:mt-28">

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B4D91]/60">
              TECHNOLOGIES
            </span>

            <div className="h-px flex-1 bg-gradient-to-r from-[#0B4D91]/20 to-transparent" />

            <ArrowDownRight
              size={18}
              className="text-[#0B4D91]/60"
            />

          </div>
        </Reveal>

      </div>
    </section>
  )
}