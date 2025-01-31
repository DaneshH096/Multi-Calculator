import Link from "next/link"
import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <nav className="bg-white bg-opacity-20 backdrop-blur-lg">
        <ul className="flex justify-center space-x-4 p-4">
          <li>
            <Link href="/" className="text-white hover:text-yellow-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/age" className="text-white hover:text-yellow-300 transition">
              Age Calculator
            </Link>
          </li>
          <li>
            <Link href="/date-diff" className="text-white hover:text-yellow-300 transition">
              Date Difference
            </Link>
          </li>
          <li>
            <Link href="/time-diff" className="text-white hover:text-yellow-300 transition">
              Time Difference
            </Link>
          </li>
          <li>
            <Link href="/interest" className="text-white hover:text-yellow-300 transition">
              Interest Calculator
            </Link>
          </li>
          <li>
            <Link href="/links" className="text-white hover:text-yellow-300 transition">
              Useful Links
            </Link>
          </li>
        </ul>
      </nav>
      <main className="container mx-auto mt-8 px-4">{children}</main>
    </div>
  )
}

