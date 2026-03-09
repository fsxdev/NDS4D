import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NDS4D - Neat Dark Styling 4 DEVS',
  description: 'A collection of accessible, reusable UI components with dark styling for developers. Copy component code or Tailwind CSS classes directly.',
  manifest: '/manifest.json',
  themeColor: '#0a0a0a',
  icons: {
    apple: [
      { sizes: '57x57',  url: '/favicon-57x57.png' },
      { sizes: '60x60',  url: '/favicon-60x60.png' },
      { sizes: '72x72',  url: '/favicon-72x72.png' },
      { sizes: '76x76',  url: '/favicon-76x76.png' },
      { sizes: '114x114', url: '/favicon-114x114.png' },
      { sizes: '120x120', url: '/favicon-120x120.png' },
      { sizes: '144x144', url: '/favicon-144x144.png' },
      { sizes: '152x152', url: '/favicon-152x152.png' },
      { sizes: '180x180', url: '/favicon-180x180.png' },
    ],
    icon: [
      { type: 'image/svg+xml', url: '/favicon.svg' },
      { sizes: '16x16',  type: 'image/png', url: '/favicon-16x16.png' },
      { sizes: '32x32',  type: 'image/png', url: '/favicon-32x32.png' },
      { sizes: '96x96',  type: 'image/png', url: '/favicon-96x96.png' },
      { sizes: '192x192', type: 'image/png', url: '/favicon-192x192.png' },
    ],
    shortcut: '/favicon.ico',
  },
  other: {
    'msapplication-TileColor': '#0a0a0a',
    'msapplication-TileImage': '/favicon-144x144.png',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}