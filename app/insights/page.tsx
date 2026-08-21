import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/site-interactions'

export const metadata = { title: 'Insights | Cyrus Technologies', description: 'Cybersecurity perspectives from Cyrus Technologies.' }
const insights = [{ tag: 'Threat readiness', title: 'The operating model behind calm incident response', text: 'A practical look at the decisions, roles, and preparation that reduce pressure when an incident begins.' }, { tag: 'Cloud security', title: 'Designing guardrails engineers will actually use', text: 'Security becomes a force multiplier when it is built into the way teams deliver.' }, { tag: 'Identity', title: 'Why access is the new perimeter', text: 'A modern identity program creates less friction for trusted users and less room for the wrong ones.' }]
export default function InsightsPage() { return <main><Header /><section className="service-hero"><div className="container service-hero-content"><Reveal><p className="eyebrow eyebrow-light">Cyrus insights</p><h1>Ideas for a more resilient tomorrow.</h1><p className="service-summary">Useful perspectives on cybersecurity, resilience, and the decisions that keep organizations moving.</p></Reveal></div></section><section className="section"><div className="container"><div className="insight-grid">{insights.map((insight) => <Reveal key={insight.title} className="insight-card"><p className="eyebrow">{insight.tag}</p><h2>{insight.title}</h2><p>{insight.text}</p><Link href="/contact" className="card-link">Talk with Cyrus <ArrowUpRight size={16} /></Link></Reveal>)}</div></div></section><Footer /></main> }
