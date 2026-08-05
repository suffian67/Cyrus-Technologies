import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cyrus Technologies | Cybersecurity for what is next',
  description: 'Independent cyber defense for ambitious teams. Managed detection, cloud security, testing, compliance, and response.',
  generator: 'Cyrus Technologies',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#061b45',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
