import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Aeline — AI Consulting & Strategy',
  description: 'We help organizations unlock growth and efficiency through data-driven consulting and intelligent automation.',
  openGraph: {
    title: 'Aeline — AI Consulting & Strategy',
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
    <html lang="en" className={inter.variable}>
      <body className="bg-bg-primary text-white antialiased">
        {children}
      </body>
    </html>
  )
}
