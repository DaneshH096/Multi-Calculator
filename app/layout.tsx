import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Danesh Hosur',
  description: 'Created with v0',
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
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6397736238534112"
       crossorigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
