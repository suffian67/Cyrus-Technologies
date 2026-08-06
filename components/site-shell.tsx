'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export const serviceLinks = [
  { slug: 'managed-detection-response', label: 'Managed Detection & Response' },
  { slug: 'cloud-security', label: 'Cloud Security' },
  { slug: 'penetration-testing', label: 'Penetration Testing' },
  { slug: 'security-compliance', label: 'Security Compliance' },
  { slug: 'incident-response', label: 'Incident Response' },
  { slug: 'identity-access-management', label: 'Identity & Access Management' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="brand-mark" onClick={() => setOpen(false)}>
          <img className="brand-logo" src="/logo-cyrus.png?v=4" alt="Cyrus Technologies" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <Link href="/#about" className="nav-link">About us</Link>
          <Link href="/#services" className="nav-link">Services</Link>
          <Link href="/#why-us" className="nav-link">Why Cyrus</Link>
          <Link href="/#approach" className="nav-link">Our approach</Link>
          <Link href="/#contact" className="nav-link">Insights</Link>
        </nav>
        <Link href="/#contact" className="button button-small hidden md:inline-flex">Talk to an expert <ArrowUpRight size={15} /></Link>
        <button className="menu-button md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu md:hidden">
          <Link href="/#about" onClick={() => setOpen(false)}>About us</Link>
          <Link href="/#services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/#why-us" onClick={() => setOpen(false)}>Why Cyrus</Link>
          <Link href="/#approach" onClick={() => setOpen(false)}>Our approach</Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div><Link href="/" className="brand-mark brand-mark-light"><img className="brand-logo footer-logo" src="/logo-cyrus.png?v=3" alt="Cyrus Technologies" /></Link><p className="footer-copy">Security that moves at the speed of your business. Built for the moments you cannot afford to miss.</p></div>
        <div><p className="footer-label">Explore</p><div className="footer-links"><Link href="/#about">About us</Link><Link href="/#why-us">Why us</Link><Link href="/#services">Services</Link><Link href="/#contact">Contact</Link></div></div>
        <div><p className="footer-label">Services</p><div className="footer-links">{serviceLinks.slice(0, 4).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.label}</Link>)}</div></div>
        <div><p className="footer-label">Reach us</p><div className="footer-links"><a href="mailto:hello@cyrustechnologies.com">hello@cyrustechnologies.com</a><a href="tel:+18005550148">+1 800 555 0148</a><span>New York · London · Singapore</span></div></div>
      </div>
      <div className="container flex flex-col gap-3 border-t border-white/15 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Cyrus Technologies.</span><span>Privacy · Terms · Responsible disclosure</span></div>
    </footer>
  )
}
