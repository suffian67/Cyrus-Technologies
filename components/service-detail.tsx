import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/site-interactions'
import { serviceData, serviceSlugs } from '@/components/service-data'

export function ServiceDetail({ slug }: { slug: string }) {
  const service = serviceData[slug]
  const Icon = service.icon
  return <main><Header /><section className="service-hero"><div className="service-hero-pattern" aria-hidden="true" /><div className="container service-hero-content"><Link href="/#services" className="back-link"><ArrowLeft size={15} /> All capabilities</Link><Reveal><div className="service-page-icon"><Icon size={28} /></div><p className="eyebrow eyebrow-light">{service.kicker}</p><h1>{service.title}</h1><p className="service-summary">{service.summary}</p><Link href="/contact" className="button button-bright">Talk to an expert <ArrowUpRight size={17} /></Link></Reveal></div></section><section className="section"><div className="container detail-grid"><Reveal><p className="eyebrow">How we help</p><h2>Clarity when<br /><span>it counts.</span></h2></Reveal><Reveal className="detail-copy"><p>{service.details[0]}</p><p>{service.details[1]}</p><div className="outcome-list">{service.outcomes.map((outcome) => <div key={outcome}><Check size={17} /><span>{outcome}</span></div>)}</div></Reveal></div></section><section className="section section-pale"><div className="container"><div className="section-heading centered-heading"><p className="eyebrow">More ways to protect what matters</p><h2>Explore the full<br /><span>Cyrus Technologies stack.</span></h2></div><div className="related-links">{serviceSlugs.filter((item) => item !== slug).slice(0, 3).map((item) => <Link key={item} href={`/services/${item}`} className="related-link"><span>{serviceData[item].title}</span><ArrowUpRight size={18} /></Link>)}</div></div></section><Footer /></main>
}
