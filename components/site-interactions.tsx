'use client'

import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add('is-visible'); observer.disconnect() }
    }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

export function AnimatedStat({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      let start = 0
      const step = Math.max(1, Math.ceil(value / 35))
      const timer = window.setInterval(() => {
        start += step
        if (start >= value) { start = value; window.clearInterval(timer) }
        setCount(start)
      }, 28)
      observer.disconnect()
      return () => window.clearInterval(timer)
    }, { threshold: 0.5 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [value])
  return <div ref={ref} className="stat-item"><strong>{count}{suffix}</strong><span>{label}</span></div>
}
