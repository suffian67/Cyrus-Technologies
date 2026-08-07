import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/site-interactions'

export function AboutSection() {
  return <section className="section about-section" id="about"><div className="container about-grid"><Reveal className="about-visual"><div className="about-logo-card"><div className="brand-wordmark brand-wordmark-large"><strong>C<span>Y</span>RUS</strong><small>TECHNOLOGIES</small></div></div><div className="about-stamp">Independent defense<br /><strong>Built for momentum.</strong></div></Reveal><Reveal><p className="eyebrow">About Cyrus Technologies</p><h2>Security expertise<br /><span>with a human edge.</span></h2><p className="section-lead">Cyrus Technologies helps ambitious organizations turn cybersecurity into a competitive advantage. We bring together seasoned operators, practical strategy, and technology that makes complex environments easier to understand.</p><p className="section-lead">From your first risk review to the moments that matter most, we stay close, communicate clearly, and keep your team moving forward with confidence.</p><Link href="#contact" className="text-link">Meet your security partner <ArrowUpRight size={16} /></Link></Reveal></div></section>
}
