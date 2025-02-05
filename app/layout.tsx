import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Danesh Hosur',
  description: 'Created by Danesh',
  icons: {
    icon: "/logo.avif", // Default favicon
    shortcut: "/logo.avif",
    apple: "/logo.avif", // For Apple devices
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
