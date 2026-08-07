import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Shield } from 'lucide-react'
import { Reveal } from '@/components/site-interactions'

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-content">
        <Reveal><p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Independent cyber defense for ambitious teams</p></Reveal>
        <Reveal className="hero-copy">
          <h1>Stay ahead of<br /><span>what&apos;s next.</span></h1>
          <p>Security is not a checkpoint. It&apos;s the confidence to keep building, moving, and making the decisions that shape your future.</p>
          <div className="hero-actions"><Link href="#contact" className="button button-bright">Build your security posture <ArrowUpRight size={17} /></Link><Link href="#services" className="text-link text-link-light">Explore capabilities <ArrowDownRight size={16} /></Link></div>
        </Reveal>
        <div className="hero-orbit" aria-hidden="true"><div className="orbit-ring orbit-ring-one" /><div className="orbit-ring orbit-ring-two" /><div className="orbit-core"><Shield size={42} /></div><span className="orbit-tag orbit-tag-top">24/7 monitoring</span><span className="orbit-tag orbit-tag-bottom">Threat intelligence</span></div>
      </div>
    </section>
  )
}
