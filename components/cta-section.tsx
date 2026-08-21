import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/site-interactions'

export function CTASection({ title = <>Let&apos;s make your<br /><span>next move safer.</span></>, description = 'Tell us a little about what you are building, protecting, or preparing for. We will bring the right people to the table.' }: { title?: React.ReactNode; description?: string }) {
  return <section className="contact-section"><div className="container contact-inner"><Reveal><p className="eyebrow">Start a conversation</p><h2>{title}</h2><p>{description}</p><Link href="mailto:hello@cyrustechnologies.com" className="button button-bright">hello@cyrustechnologies.com <ArrowUpRight size={17} /></Link></Reveal><Reveal className="contact-card"><h3>Not sure where to begin?</h3><p>Our 30-minute Security Signal Session is a no-pressure way to identify your biggest exposure and your best next step.</p><Link href="/contact" className="card-link">Book a session <ArrowUpRight size={16} /></Link></Reveal></div></section>
}
