import type { ReactNode } from "react"
import { Header } from "./header"
import Script from "next/script"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6397736238534112"
        crossOrigin="anonymous"
      />
      <Header />
      <main className="container mx-auto mt-8 px-4">
        {children}
        <div className="mt-8">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 text-center text-white">
            <p>Advertisement</p>
            {/* Google AdSense Ad Unit */}
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-6397736238534112"
              data-ad-slot="XXXXXXXXXX"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <Script>
              {`
                (adsbygoogle = window.adsbygoogle || []).push({});
              `}
            </Script>
          </div>
        </div>
      </main>
    </div>
  )
}

