import Link from 'next/link'
import { ArrowUpRight, Sparkles, Zap } from 'lucide-react'
import { Reveal } from '@/components/site-interactions'

export function MetricsSection() {
  return <section className="metrics-band"><div className="container metrics-inner"><Reveal><p className="eyebrow eyebrow-light">The numbers behind the calm</p><h2>Ready for the<br /><span>moment that matters.</span></h2><p className="metrics-copy">Preparedness is measurable. We help teams move from uncertainty to a security program they can trust.</p><Link href="#contact" className="button button-outline-light">See how we can help <ArrowUpRight size={16} /></Link></Reveal><div className="metrics-visual" aria-hidden="true"><div className="scan-card"><div className="scan-header"><span><span className="live-dot" /> LIVE DEFENSE GRID</span><span>CYRUS / 06</span></div><div className="scan-lines"><i /><i /><i /><i /><i /></div><div className="scan-footer"><span>Threat surface</span><strong>LOW</strong></div></div><Sparkles className="sparkle sparkle-a" size={18} /><Zap className="sparkle sparkle-b" size={22} /></div></div></section>
}
