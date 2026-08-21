'use client'

import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { serviceLinks } from '@/components/service-data'

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header"><div className="container flex h-20 items-center justify-between"><Link href="/" className="brand-mark" onClick={close}><span className="brand-wordmark" aria-label="Cyrus Technologies"><strong>C<span>Y</span>RUS</strong><small>TECHNOLOGIES</small></span></Link><nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation"><Link href="/about" className="nav-link">About us</Link><Link href="/#services" className="nav-link">Services</Link><Link href="/#why-us" className="nav-link">Why Cyrus</Link><Link href="/#approach" className="nav-link">Our approach</Link><Link href="/insights" className="nav-link">Insights</Link></nav><Link href="/contact" className="button button-small hidden md:inline-flex">Talk to an expert <ArrowUpRight size={15} /></Link><button className="menu-button md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button></div>{open && <div className="mobile-menu md:hidden"><Link href="/about" onClick={close}>About us</Link><Link href="/#services" onClick={close}>Services</Link><Link href="/#why-us" onClick={close}>Why Cyrus</Link><Link href="/#approach" onClick={close}>Our approach</Link><Link href="/insights" onClick={close}>Insights</Link><Link href="/contact" onClick={close}>Contact</Link>{serviceLinks.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} onClick={close}>{service.label}</Link>)}</div>}</header>
}
