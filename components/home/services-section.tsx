import Link from 'next/link'
import { Activity, ArrowUpRight, Cloud, Fingerprint, LockKeyhole, Radar, Timer } from 'lucide-react'
import { Reveal } from '@/components/site-interactions'
import { serviceLinks } from '@/components/service-data'

const serviceIcons = [Radar, Cloud, Fingerprint, Activity, LockKeyhole, Timer]
const serviceDescriptions = ['Always-on threat hunting and human-led response for the signals that matter.', 'Secure your cloud estate from first workload to full-scale transformation.', 'Find the paths attackers will take before they get the chance.', 'Turn requirements into a resilient operating advantage.', 'A calm, expert response when the unexpected becomes urgent.', 'Make every login, permission, and privileged action intentional.']

export function ServicesSection() {
  return <section className="section" id="services"><div className="container"><Reveal><div className="section-heading centered-heading"><p className="eyebrow">What we do</p><h2>Practical protection for<br /><span>complex environments.</span></h2><p className="section-lead">From proactive defense to decisive response, we make cybersecurity a force multiplier.</p></div></Reveal><div className="service-grid">{serviceLinks.map(({ slug, label }, index) => { const Icon = serviceIcons[index]; return <Reveal key={slug} className={`service-card service-card-${index + 1}`}><div className="service-icon"><Icon size={23} /></div><span className="service-index">0{index + 1}</span><h3>{label}</h3><p>{serviceDescriptions[index]}</p><Link href={`/services/${slug}`} className="card-link" aria-label={`Explore ${label}`}>Explore <ArrowUpRight size={16} /></Link></Reveal> })}</div></div></section>
}
