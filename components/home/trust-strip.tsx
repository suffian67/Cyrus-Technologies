import { Shield, Activity, Clock, Radar } from 'lucide-react'
import { AnimatedStat } from '@/components/site-interactions'

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-t border-blue-400/20 bg-gradient-to-b from-[#081A31] via-[#0D2947] to-[#102F50]">

      {/* Ambient blue glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[130px]" />

      {/* Subtle cyber grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96,165,250,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Horizontal transition glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

      <div className="container relative py-12 md:py-14">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Trust statement */}
          <div className="flex items-center gap-5">

            {/* Shield */}
            <div className="relative flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-400/10 text-blue-300 shadow-[0_0_35px_rgba(37,99,235,0.18)]">

              <div className="absolute inset-2 rounded-xl border border-blue-300/10" />

              <Shield
                size={28}
                strokeWidth={1.6}
                className="relative drop-shadow-[0_0_8px_rgba(96,165,250,0.7)]"
              />
            </div>

            <div>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300">
                Trusted protection
              </p>

              <p className="text-[17px] leading-relaxed text-blue-50/80">
                Trusted by teams with
                <br />
                <strong className="font-semibold text-white">
                  something to protect.
                </strong>
              </p>
            </div>
          </div>


          {/* Stats */}
          <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">

            {/* Stat 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-300/15 bg-white/[0.045] px-6 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-white/[0.075]">

              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-400/10 blur-2xl transition group-hover:bg-blue-400/20" />

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-500 group-hover:w-full" />

              <div className="relative">
                <div className="mb-3 flex items-center gap-2 text-blue-300/70">
                  <Activity size={15} />
                  <span className="text-[10px] font-semibold uppercase tracking-widest">
                    Experience
                  </span>
                </div>

                <AnimatedStat
                  value={18}
                  suffix="+"
                  label="Years in defense"
                />
              </div>
            </div>


            {/* Stat 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-cyan-300/15 bg-white/[0.045] px-6 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.075]">

              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500 group-hover:w-full" />

              <div className="relative">
                <div className="mb-3 flex items-center gap-2 text-cyan-300/70">
                  <Radar size={15} />
                  <span className="text-[10px] font-semibold uppercase tracking-widest">
                    Visibility
                  </span>
                </div>

                <AnimatedStat
                  value={99}
                  suffix="%"
                  label="Detection coverage"
                />
              </div>
            </div>


            {/* Stat 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-indigo-300/15 bg-white/[0.045] px-6 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/35 hover:bg-white/[0.075]">

              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-400/10 blur-2xl transition group-hover:bg-indigo-400/20" />

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-400 to-blue-400 transition-all duration-500 group-hover:w-full" />

              <div className="relative">
                <div className="mb-3 flex items-center gap-2 text-indigo-300/70">
                  <Clock size={15} />
                  <span className="text-[10px] font-semibold uppercase tracking-widest">
                    Response
                  </span>
                </div>

                <AnimatedStat
                  value={3}
                  suffix="m"
                  label="Avg. response time"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}