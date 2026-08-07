import Link from 'next/link'
import { ArrowUpRight, Users } from 'lucide-react'
import { Reveal } from '@/components/site-interactions'

export function ContactSection() {
  return <section className="contact-section" id="contact"><div className="container contact-inner"><Reveal><p className="eyebrow">Start a conversation</p><h2>Let&apos;s make your<br /><span>next move safer.</span></h2><p>Tell us a little about what you&apos;re building, protecting, or preparing for. We&apos;ll bring the right people to the table.</p><Link href="mailto:hello@cyrustechnologies.com" className="button button-bright">hello@cyrustechnologies.com <ArrowUpRight size={17} /></Link></Reveal><Reveal className="contact-card"><div className="contact-card-icon"><Users size={22} /></div><h3>Not sure where to begin?</h3><p>Our 30-minute Security Signal Session is a no-pressure way to identify your biggest exposure and your best next step.</p><Link href="mailto:hello@cyrustechnologies.com?subject=Security%20Signal%20Session" className="card-link">Book a session <ArrowUpRight size={16} /></Link></Reveal></div></section>
}
