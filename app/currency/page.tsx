"use client"

import { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [result, setResult] = useState<number | null>(null)
  const [rates, setRates] = useState<Record<string, number>>({})

  const currencies = [
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "INR", name: "Indian Rupee" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "SGD", name: "Singapore Dollar" },
  ]

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
        const data = await response.json()
        setRates(data.rates)
      } catch (error) {
        console.error("Error fetching rates:", error)
      }
    }

    fetchRates()
    const interval = setInterval(fetchRates, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  const convert = () => {
    if (!amount || !rates[from] || !rates[to]) return
    const usdAmount = Number.parseFloat(amount) / rates[from]
    const convertedAmount = usdAmount * rates[to]
    setResult(convertedAmount)
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white text-center mb-8">Currency Converter</h1>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 max-w-md mx-auto">
        <div className="space-y-4">
          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full"
          />
          <div className="grid grid-cols-2 gap-4">
            <Select value={from} onValueChange={setFrom}>
              <SelectTrigger>
                <SelectValue placeholder="From" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={to} onValueChange={setTo}>
              <SelectTrigger>
                <SelectValue placeholder="To" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={convert} className="w-full">
            Convert
          </Button>
          {result !== null && (
            <div className="text-white text-center mt-4">
              <p className="text-lg">
                {amount} {from} = {result.toFixed(2)} {to}
              </p>
              <p className="text-sm opacity-75">
                Rate: 1 {from} = {(rates[to] / rates[from]).toFixed(4)} {to}
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

