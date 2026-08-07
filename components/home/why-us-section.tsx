import { Check } from 'lucide-react'
import { Reveal } from '@/components/site-interactions'

const reasons = ['Security leaders who speak your language', 'A clear view across every environment', 'Actions prioritized by business impact', 'Built to get better every single day']

export function WhyUsSection() {
  return <section className="section section-pale" id="why-us"><div className="container"><Reveal><div className="section-heading split-heading"><div><p className="eyebrow">The Cyrus Technologies difference</p><h2>Security with<br /><span>signal, not noise.</span></h2></div><p className="section-lead">Your team does not need more dashboards. It needs a partner who knows what to look for, what to do next, and why it matters.</p></div></Reveal><div className="reason-grid">{reasons.map((reason, index) => <Reveal key={reason} className="reason-card"><span className="reason-number">0{index + 1}</span><Check size={19} /><p>{reason}</p></Reveal>)}</div></div></section>
}
