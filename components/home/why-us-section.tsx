import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/site-interactions'

const reasons = [
  'Security leaders who speak your language',
  'A clear view across every environment',
  'Actions prioritized by business impact',
  'Built to get better every single day',
]

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden border-t border-[#DCE8F7] bg-[#F4F8FD] py-20 md:py-28"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#1769E8]/[0.06] blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#38BDF8]/[0.06] blur-[110px]" />

      {/* Very subtle grid */}
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

      <div className="container relative">

        {/* Heading */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#1769E8]" />

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1769E8]">
                  The Cyrus Technologies difference
                </p>
              </div>

              <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#0B1F38] md:text-5xl lg:text-6xl">
                Security with
                <br />
                <span className="text-[#1769E8]">
                  signal, not noise.
                </span>
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-xl text-base leading-7 text-[#52657D] md:text-lg">
                Your team does not need more dashboards. It needs a partner
                who knows what to look for, what to do next, and why it
                matters.
              </p>
            </div>

          </div>
        </Reveal>


        {/* Reasons */}
        <div className="relative mt-14 md:mt-16">

          <div className="grid gap-4 md:grid-cols-2">

            {reasons.map((reason, index) => (
              <Reveal
                key={reason}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-[#D8E4F2] bg-white p-6 shadow-[0_8px_30px_rgba(23,105,232,0.055)] transition-all duration-400 hover:-translate-y-1 hover:border-[#1769E8]/30 hover:shadow-[0_18px_45px_rgba(23,105,232,0.12)] md:p-7">

                  {/* Card corner glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#1769E8]/[0.06] blur-2xl transition-opacity duration-300 group-hover:bg-[#1769E8]/[0.12]" />

                  {/* Bottom blue accent */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#1769E8] to-[#38BDF8] transition-all duration-500 group-hover:w-full" />

                  <div className="relative flex items-start gap-5">

                    {/* Number */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#1769E8]/15 bg-[#1769E8]/[0.06] text-sm font-bold tracking-wider text-[#1769E8] transition-all duration-300 group-hover:border-[#1769E8]/30 group-hover:bg-[#1769E8]/10">
                      0{index + 1}
                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="mb-5 flex items-center justify-between">

                        {/* Check */}
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1769E8] text-white shadow-[0_6px_18px_rgba(23,105,232,0.2)]">
                          <Check size={17} strokeWidth={2.5} />
                        </div>

                        <ArrowUpRight
                          size={19}
                          className="text-[#9BAEC4] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1769E8]"
                        />

                      </div>

                      <p className="max-w-md text-lg font-semibold leading-7 text-[#172B45] transition-colors duration-300 group-hover:text-[#071426]">
                        {reason}
                      </p>

                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

          </div>
        </div>


        {/* Bottom statement */}
        <Reveal>
          <div className="mt-10 flex items-center gap-4 border-t border-[#D8E4F2] pt-7">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1769E8]/10 text-[#1769E8]">
              <ShieldCheck size={18} />
            </div>

            <p className="text-sm font-medium text-[#64778E]">
              Intelligence that turns security data into decisive action.
            </p>

            <div className="hidden h-px flex-1 bg-gradient-to-r from-[#1769E8]/20 to-transparent md:block" />

          </div>
        </Reveal>

      </div>
    </section>
  )
}