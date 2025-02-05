"use client"

import { useState, useEffect } from "react"
import Layout from "../components/layout"

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("")
  const [age, setAge] = useState<{
    broken: { years: number; months: number; days: number; hours: number; minutes: number; seconds: number }
    total: { years: number; months: number; days: number; hours: number; minutes: number; seconds: number }
  } | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      if (birthDate) {
        const now = new Date()
        const birth = new Date(birthDate)
        const diff = now.getTime() - birth.getTime()

        // Broken down age
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44))
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)

        // Total values
        const totalYears = diff / (1000 * 60 * 60 * 24 * 365.25)
        const totalMonths = diff / (1000 * 60 * 60 * 24 * 30.44)
        const totalDays = diff / (1000 * 60 * 60 * 24)
        const totalHours = diff / (1000 * 60 * 60)
        const totalMinutes = diff / (1000 * 60)
        const totalSeconds = diff / 1000

        setAge({
          broken: { years, months, days, hours, minutes, seconds },
          total: {
            years: totalYears,
            months: totalMonths,
            days: totalDays,
            hours: totalHours,
            minutes: totalMinutes,
            seconds: totalSeconds,
          },
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [birthDate])

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white text-center mb-8">Age Calculator</h1>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 max-w-md mx-auto">
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full p-2 mb-4 rounded"
        />
        {age && (
          <div className="text-white">
            <h2 className="text-xl font-semibold mb-2">Broken Down Age:</h2>
            <p>Years: {age.broken.years}</p>
            <p>Months: {age.broken.months}</p>
            <p>Days: {age.broken.days}</p>
            <p>Hours: {age.broken.hours}</p>
            <p>Minutes: {age.broken.minutes}</p>
            <p>Seconds: {age.broken.seconds}</p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Total Age:</h2>
            <p>Years: {age.total.years.toFixed(2)}</p>
            <p>Months: {age.total.months.toFixed(2)}</p>
            <p>Days: {age.total.days.toFixed(2)}</p>
            <p>Hours: {age.total.hours.toFixed(2)}</p>
            <p>Minutes: {age.total.minutes.toFixed(2)}</p>
            <p>Seconds: {age.total.seconds.toFixed(2)}</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

