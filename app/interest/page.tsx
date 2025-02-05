"use client"

import { useState } from "react"
import Layout from "../components/layout"

export default function InterestCalculator() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [time, setTime] = useState("")
  const [result, setResult] = useState<number | null>(null)

  const calculateInterest = () => {
    const p = Number.parseFloat(principal)
    const r = Number.parseFloat(rate) / 100
    const t = Number.parseFloat(time)
    const interest = p * r * t
    setResult(interest)
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white text-center mb-8">Interest Calculator</h1>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 max-w-md mx-auto">
        <input
          type="number"
          placeholder="Principal Amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        <input
          type="number"
          placeholder="Time (in years)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        <button
          onClick={calculateInterest}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Calculate Interest
        </button>
        {result !== null && (
          <div className="mt-4 text-white">
            <p>Interest: ${result.toFixed(2)}</p>
            <p>Total Amount: ${(Number.parseFloat(principal) + result).toFixed(2)}</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

