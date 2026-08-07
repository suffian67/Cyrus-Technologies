import Link from 'next/link'
import { Activity, ArrowUpRight, Cloud, Fingerprint, LockKeyhole, Radar, Timer } from 'lucide-react'
import { Reveal } from '@/components/site-interactions'

const services = [
  { icon: Radar, title: 'Managed Detection & Response', text: 'Always-on threat hunting and human-led response for the signals that matter.', slug: 'managed-detection-response' },
  { icon: Cloud, title: 'Cloud Security', text: 'Secure your cloud estate from first workload to full-scale transformation.', slug: 'cloud-security' },
  { icon: Fingerprint, title: 'Identity & Access', text: 'Make every login, permission, and privileged action intentional.', slug: 'identity-access-management' },
  { icon: Activity, title: 'Penetration Testing', text: 'Find the paths attackers will take before they get the chance.', slug: 'penetration-testing' },
  { icon: LockKeyhole, title: 'Security Compliance', text: 'Turn requirements into a resilient operating advantage.', slug: 'security-compliance' },
  { icon: Timer, title: 'Incident Response', text: 'A calm, expert response when the unexpected becomes urgent.', slug: 'incident-response' },
]

export function ServicesSection() {
  return <section className="section" id="services"><div className="container"><Reveal><div className="section-heading centered-heading"><p className="eyebrow">What we do</p><h2>Practical protection for<br /><span>complex environments.</span></h2><p className="section-lead">From proactive defense to decisive response, we make cybersecurity a force multiplier.</p></div></Reveal><div className="service-grid">{services.map(({ icon: Icon, title, text, slug }, index) => <Reveal key={title} className={`service-card service-card-${index + 1}`}><div className="service-icon"><Icon size={23} /></div><span className="service-index">0{index + 1}</span><h3>{title}</h3><p>{text}</p><Link href={`/services/${slug}`} className="card-link" aria-label={`Explore ${title}`}>Explore <ArrowUpRight size={16} /></Link></Reveal>)}</div></div></section>
}
