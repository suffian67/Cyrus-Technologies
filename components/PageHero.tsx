import Image from 'next/image'
import { ArrowDownRight } from 'lucide-react'

import { Reveal } from '@/components/site-interactions'

type PageHeroProps = {
  eyebrow: string
  title: string
  highlight: string
  description: string
  index?: string
  backgroundImage?: string
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  index = '01',
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#081A2C] py-24 md:py-32 lg:py-36">

      {/* =========================================================
                BACKGROUND IMAGE
            ========================================================= */}

      {backgroundImage && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20"
        >
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover object-center"
          // sizes="10vw"
          />
        </div>
      )}

      {/* =========================================================
                IMAGE OVERLAY
                Keeps the image atmospheric rather than overpowering
                the typography.
            ========================================================= */}

      {/* Overall blue tint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#081A2C]/15"
      />

      {/* Keeps text side darker while allowing the image to show */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#081A2C]/55 via-[#081A2C]/25 to-[#081A2C]/15"
      />

      {/* Subtle bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#081A2C]/50 to-transparent"
      />
      {/* =========================================================
                AMBIENT LIGHT
            ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#56A9FF]/[0.15] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-60 left-1/4 h-[520px] w-[520px] rounded-full bg-[#1769E8]/[0.13] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#56A9FF]/[0.04] blur-[100px]"
      />

      {/* =========================================================
                TECHNICAL GRID
            ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
                        linear-gradient(rgba(86,169,255,0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(86,169,255,0.8) 1px, transparent 1px)
                    `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* =========================================================
                TOP LIGHT
            ========================================================= */}

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#56A9FF]/60 to-transparent"
      />

      {/* =========================================================
                CONTENT
            ========================================================= */}

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* =====================================================
                        HERO COPY
                    ===================================================== */}

          <Reveal>
            <div className="max-w-3xl">

              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="h-[2px] w-10 bg-[#56A9FF]" />

                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#56A9FF]">
                  {eyebrow}
                </p>

                <span className="ml-1 text-[10px] font-semibold tracking-[0.2em] text-white/30">
                  CYRUS / {index}
                </span>
              </div>

              <h1 className="text-5xl font-medium leading-[0.97] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">
                {title}

                <br />

                <span className="bg-gradient-to-r from-[#56A9FF] via-[#7FC2FF] to-[#1769E8] bg-clip-text text-transparent">
                  {highlight}
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-[#B8CDE0] md:text-lg md:leading-8">
                {description}
              </p>

              <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#56A9FF]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#56A9FF]/30 bg-[#56A9FF]/10">
                  <ArrowDownRight size={16} />
                </span>

                <span>
                  Explore the story
                </span>
              </div>

            </div>
          </Reveal>

          {/* =====================================================
                        HERO VISUAL
                    ===================================================== */}

          {/* <Reveal className="relative hidden min-h-[390px] lg:block">

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#56A9FF]/15"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#56A9FF]/20"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1769E8]/30"
          />

          <div
            aria-hidden="true"
            className="absolute left-[7%] top-1/2 h-px w-[86%] bg-gradient-to-r from-transparent via-[#56A9FF]/35 to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[7%] h-[86%] w-px bg-gradient-to-b from-transparent via-[#56A9FF]/25 to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-px w-[300px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-transparent via-[#56A9FF]/20 to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1769E8]/20 blur-[35px]"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#56A9FF]/40 bg-gradient-to-br from-[#1769E8] to-[#0B4D91] shadow-[0_20px_70px_rgba(23,105,232,0.35)]"
          >
            <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
          </div>


          <span className="absolute left-[6%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[#56A9FF] bg-[#081A2C] shadow-[0_0_20px_rgba(86,169,255,0.5)]" />

          <span className="absolute right-[6%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[#1769E8] bg-[#081A2C]" />

          <span className="absolute left-1/2 top-[6%] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#56A9FF] bg-[#081A2C]" />

          <span className="absolute bottom-[6%] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#1769E8] bg-[#081A2C]" />


          <span className="absolute left-[2%] top-[36%] text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
            People
          </span>

          <span className="absolute right-[-1%] top-[36%] text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
            Technology
          </span>

          <span className="absolute left-1/2 top-[1%] -translate-x-1/2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
            Context
          </span>

          <span className="absolute bottom-[1%] left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
            Confidence
          </span>

        </Reveal> */}
        </div>
      </div>
    </section >
  )
}