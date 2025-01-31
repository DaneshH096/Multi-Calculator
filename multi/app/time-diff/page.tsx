"use client"

import { useState } from "react"
import Layout from "../components/layout"

export default function TimeDiffCalculator() {
  const [time1, setTime1] = useState("")
  const [time2, setTime2] = useState("")
  const [diff, setDiff] = useState<{ hours: number; minutes: number } | null>(null)

  const calculateDiff = () => {
    const [h1, m1] = time1.split(":").map(Number)
    const [h2, m2] = time2.split(":").map(Number)

    let diffMinutes = h2 * 60 + m2 - (h1 * 60 + m1)
    if (diffMinutes < 0) diffMinutes += 24 * 60

    const hours = Math.floor(diffMinutes / 60)
    const minutes = diffMinutes % 60

    setDiff({ hours, minutes })
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white text-center mb-8">Time Difference Calculator</h1>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 max-w-md mx-auto">
        <input
          type="time"
          value={time1}
          onChange={(e) => setTime1(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        <input
          type="time"
          value={time2}
          onChange={(e) => setTime2(e.target.value)}
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
            <p>Hours: {diff.hours}</p>
            <p>Minutes: {diff.minutes}</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

