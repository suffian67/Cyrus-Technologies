'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { serviceLinks } from '@/components/service-data'

export function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container flex h-20 items-center justify-between">

        {/* Logo */}
        <Link href="/" onClick={close} className="flex items-center">
          <Image
            src="/cyrus-logo.png"
            alt="Cyrus Technologies"
            width={180}
            height={50}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          <Link href="/about" className="nav-link">
            About us
          </Link>

          <Link href="/#services" className="nav-link">
            Services
          </Link>

          <Link href="/#why-us" className="nav-link">
            Why Cyrus
          </Link>

          <Link href="/#approach" className="nav-link">
            Our approach
          </Link>

          <Link href="/insights" className="nav-link">
            Insights
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="button button-small hidden items-center gap-2 md:inline-flex"
        >
          Talk to an expert
          <ArrowUpRight size={15} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="menu-button md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu md:hidden">
          <Link href="/about" onClick={close}>
            About us
          </Link>

          <Link href="/#services" onClick={close}>
            Services
          </Link>

          <Link href="/#why-us" onClick={close}>
            Why Cyrus
          </Link>

          <Link href="/#approach" onClick={close}>
            Our approach
          </Link>

          <Link href="/insights" onClick={close}>
            Insights
          </Link>

          <Link href="/contact" onClick={close}>
            Contact
          </Link>

          {serviceLinks.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              onClick={close}
            >
              {service.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}