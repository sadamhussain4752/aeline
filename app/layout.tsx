import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bravera - AI Consulting & Strategy',
  description: 'Bravera helps organizations unlock growth through strategy, data, and intelligent automation.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Bravera - AI Consulting & Strategy',
    description: 'Building the future with AI and strategy.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
