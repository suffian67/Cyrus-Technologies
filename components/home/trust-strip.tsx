import { Shield } from 'lucide-react'
import { AnimatedStat } from '@/components/site-interactions'

export function TrustStrip() {
  return <section className="trust-strip"><div className="container flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between"><div className="trust-intro"><span className="shield-badge"><Shield size={21} /></span><div><p>Trusted by teams with<br /><strong>something to protect.</strong></p></div></div><div className="stats-row"><AnimatedStat value={18} suffix="+" label="Years in defense" /><AnimatedStat value={99} suffix="%" label="Detection coverage" /><AnimatedStat value={3} suffix="m" label="Avg. response time" /></div></div></section>
}
