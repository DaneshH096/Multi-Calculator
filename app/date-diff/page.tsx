"use client"

import { useState } from "react"
import Layout from "../components/layout"

export default function DateDiffCalculator() {
  const [date1, setDate1] = useState("")
  const [date2, setDate2] = useState("")
  const [diff, setDiff] = useState<{ days: number; months: number; years: number } | null>(null)

  const calculateDiff = () => {
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    const diffTime = Math.abs(d2.getTime() - d1.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const diffMonths = Math.floor(diffDays / 30.44)
    const diffYears = Math.floor(diffDays / 365.25)

    setDiff({ days: diffDays, months: diffMonths, years: diffYears })
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white text-center mb-8">Date Difference Calculator</h1>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 max-w-md mx-auto">
        <input
          type="date"
          value={date1}
          onChange={(e) => setDate1(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        <input
          type="date"
          value={date2}
          onChange={(e) => setDate2(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        <button
          onClick={calculateDiff}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Calculate Difference
        </button>
        {diff && (
          <div className="mt-4 text-white">
            <p>Days: {diff.days}</p>
            <p>Months: {diff.months}</p>
            <p>Years: {diff.years}</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

