import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { serviceLinks } from '@/components/service-data'
import Image from 'next/image'

export function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        bg-[#0B2742]
        text-white
      "
    >

      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      {/* Blue glow */}
      <div
        aria-hidden="true"
        className="
        pointer-events-none absolute
        -right-40 -top-40
        h-[500px] w-[500px]
        rounded-full
        bg-[#56A9FF]/[0.14]
        blur-[140px]
      "
      />

      {/* Purple / blue lower glow */}
      <div
        aria-hidden="true"
        className="
        pointer-events-none absolute
        -left-48 bottom-[-250px]
        h-[600px] w-[600px]
        rounded-full
        bg-[#1769E8]/[0.14]
        blur-[150px]
      "
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* =========================================================
          TOP BRAND STATEMENT
      ========================================================= */}

      <div className="container relative">

        <div
          className="
            border-b border-white/[0.10]
            py-16
            md:py-10
          "
        >

          <div
            className="
              flex flex-col
              gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            {/* Brand */}
            <div>

              {/* <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  transition-opacity
                  duration-300
                  hover:opacity-80
                "
              >
                <span
                  className="
                    brand-wordmark
                    brand-wordmark-light
                  "
                  aria-label="Cyrus Technologies"
                >
                  <strong>
                    C<span>Y</span>RUS
                  </strong>

                  <small>
                    TECHNOLOGIES
                  </small>
                </span>
              </Link> */}
              <Link
                href="/"
                className="
                inline-flex
                items-center
                transition-opacity
                duration-300
                hover:opacity-80
              "
                aria-label="Cyrus Technologies"
              >
                <Image
                  src="/cyrus-logo2.png"
                  alt="Cyrus Technologies"
                  width={190}
                  height={55}
                  className="h-auto w-[170px] object-contain"
                  priority
                />
              </Link>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-2xl
                  font-medium
                  leading-[1.25]
                  tracking-[-0.025em]
                  text-white/90
                  md:text-3xl
                "
              >
                Security that keeps you moving
                <span className="text-[#56A9FF]"> forward.</span>
              </p>

            </div>


            {/* Short positioning statement */}
            <div className="max-w-sm lg:pb-1">

              <p
                className="
                  text-sm
                  leading-6
                  text-white/75
                "
              >
                Independent cyber defense for ambitious teams —
                combining experienced operators, practical strategy,
                and technology that makes complex environments easier
                to understand.
              </p>

            </div>

          </div>

        </div>


        {/* =========================================================
            NAVIGATION
        ========================================================= */}

        <div
          className="
            grid
            gap-12
            py-5
            md:grid-cols-2
            lg:grid-cols-[1fr_1fr_1.2fr]
          "
        >

          {/* Explore */}
          <div>

            <p
              className="
                mb-5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#8DCCFF]
              "
            >
              Explore
            </p>

            <div className="flex flex-col gap-3">

              <Link
                href="/about"
                className="
                  footer-nav-link
                  group
                "
              >
                <span>About us</span>
                <ArrowUpRight
                  size={14}
                  className="
                    opacity-0
                    transition-all duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>

              <Link
                href="/#why-us"
                className="footer-nav-link group"
              >
                <span>Why us</span>
                <ArrowUpRight
                  size={14}
                  className="
                    opacity-0
                    transition-all duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>

              <Link
                href="/#approach"
                className="footer-nav-link group"
              >
                <span>Our approach</span>
                <ArrowUpRight
                  size={14}
                  className="
                    opacity-0
                    transition-all duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>

              <Link
                href="/insights"
                className="footer-nav-link group"
              >
                <span>Insights</span>
                <ArrowUpRight
                  size={14}
                  className="
                    opacity-0
                    transition-all duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>

              <Link
                href="/contact"
                className="footer-nav-link group"
              >
                <span>Contact</span>
                <ArrowUpRight
                  size={14}
                  className="
                    opacity-0
                    transition-all duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>

            </div>

          </div>


          {/* Services */}
          <div>

            <p
              className="
                mb-5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#8DCCFF]
              "
            >
              Capabilities
            </p>

            <div className="flex flex-col gap-3">

              {serviceLinks.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="
                    footer-nav-link
                    group
                  "
                >
                  <span>{service.label}</span>

                  <ArrowUpRight
                    size={14}
                    className="
                      opacity-0
                      transition-all duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}

            </div>

          </div>


          {/* Contact */}
          <div>

            <p
              className="
                mb-5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#8DCCFF]
              "
            >
              Reach us
            </p>

            <div className="space-y-6">

              {/* Email */}
              <div>

                <span
                  className="
                    mb-2 block
                    text-xs
                    uppercase
                    tracking-[0.16em]
                    text-white/50
                  "
                >
                  Email
                </span>

                <a
                  href="mailto:hello@cyrustechnologies.com"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-base
                    font-medium
                    text-white/80
                    transition-colors duration-300
                    hover:text-[#8DCCFF]
                  "
                >
                  hello@cyrustechnologies.com

                  <ArrowUpRight
                    size={14}
                    className="
                      transition-transform duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>

              </div>


              {/* Phone */}
              <div>

                <span
                  className="
                    mb-2 block
                    text-xs
                    uppercase
                    tracking-[0.16em]
                    text-white/50
                  "
                >
                  Phone
                </span>

                <a
                  href="tel:+18005550148"
                  className="
                    text-base
                    font-medium
                    text-white/80
                    transition-colors duration-300
                    hover:text-[#8DCCFF]
                  "
                >
                  +1 800 555 0148
                </a>

              </div>


              {/* Locations */}
              <div>

                <span
                  className="
                    mb-2 block
                    text-xs
                    uppercase
                    tracking-[0.16em]
                    text-white/50
                  "
                >
                  Across
                </span>

                <p
                  className="
                    text-sm
                    leading-6
                    text-white/55
                  "
                >
                  New York
                  <span className="mx-2 text-[#56A9FF]/50">·</span>
                  London
                  <span className="mx-2 text-[#56A9FF]/50">·</span>
                  Singapore
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            FINAL CTA STRIP
        ========================================================= */}

        <div
          className="
            relative
            mb-10
            overflow-hidden
            rounded-2xl
            border border-white/[0.09]
            bg-white/[0.035]
            px-6 py-6
            md:px-8
          "
        >

          {/* Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -right-20 -top-20
              h-48 w-48
              rounded-full
              bg-[#56A9FF]/10
              blur-[70px]
            "
          />

          <div
            className="
              relative
              flex flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  text-white/85
                "
              >
                Ready when you are.
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-white/40
                "
              >
                Start with a conversation, not a sales pitch.
              </p>

            </div>


            <Link
              href="/contact"
              className="
    group
    flex w-fit
    items-center gap-2
    rounded-full
    border border-[#56A9FF]/30
    bg-[#56A9FF]/10
    px-5 py-2.5
    text-xs
    font-semibold
    text-[#56A9FF]
    transition-all duration-300
    hover:border-[#56A9FF]/60
    hover:bg-[#56A9FF]
    hover:text-[#071F38]
  "
            >
              Talk to us

              <ArrowUpRight
                size={14}
                className="
      transition-transform duration-300
      group-hover:-translate-y-0.5
      group-hover:translate-x-0.5
    "
              />
            </Link>

          </div>

        </div>

      </div>


      {/* =========================================================
          LEGAL BAR
      ========================================================= */}

      <div
        className="
          border-t
          border-white/[0.09]
        "
      >

        <div
          className="
            container
            flex flex-col
            gap-4
            py-5
            text-[11px]
            text-white/65
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <span>
            © 2026 Cyrus Technologies.
          </span>

          <div className="flex flex-wrap items-center gap-5">

            <Link
              href="/privacy"
              className="transition-colors hover:text-white/100"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white/70"
            >
              Terms
            </Link>

            <Link
              href="/responsible-disclosure"
              className="transition-colors hover:text-white/70"
            >
              Responsible disclosure
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}