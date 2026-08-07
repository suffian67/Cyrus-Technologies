import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/site-interactions'

const steps = [['01', 'See the whole picture', 'We connect the dots across people, process, and technology.'], ['02', 'Prioritize what matters', 'Every recommendation is tied to risk, revenue, or resilience.'], ['03', 'Build for the next chapter', 'Your program evolves as quickly as your ambition does.']]

export function ApproachSection() {
  return <section className="section section-pale" id="approach"><div className="container approach-grid"><Reveal><p className="eyebrow">An operating philosophy</p><h2>Good security<br /><span>feels human.</span></h2><p className="section-lead">We combine sharp technical expertise with the context, clarity, and care that lets people make better decisions under pressure.</p><Link href="#contact" className="text-link">Meet your security partner <ArrowUpRight size={16} /></Link></Reveal><Reveal className="approach-panel">{steps.map(([number, title, text]) => <div className="approach-line" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</Reveal></div></section>
}
