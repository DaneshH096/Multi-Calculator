"use client"

import { useState } from "react"
import Layout from "../components/layout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const unitTypes = {
  length: {
    name: "Length",
    units: {
      m: "Meters",
      km: "Kilometers",
      cm: "Centimeters",
      mm: "Millimeters",
      mi: "Miles",
      yd: "Yards",
      ft: "Feet",
      in: "Inches",
    },
    conversions: {
      m: 1,
      km: 0.001,
      cm: 100,
      mm: 1000,
      mi: 0.000621371,
      yd: 1.09361,
      ft: 3.28084,
      in: 39.3701,
    },
  },
  weight: {
    name: "Weight",
    units: {
      kg: "Kilograms",
      g: "Grams",
      mg: "Milligrams",
      lb: "Pounds",
      oz: "Ounces",
    },
    conversions: {
      kg: 1,
      g: 1000,
      mg: 1000000,
      lb: 2.20462,
      oz: 35.274,
    },
  },
  temperature: {
    name: "Temperature",
    units: {
      c: "Celsius",
      f: "Fahrenheit",
      k: "Kelvin",
    },
  },
}

export default function UnitConverter() {
  const [type, setType] = useState("length")
  const [value, setValue] = useState("")
  const [fromUnit, setFromUnit] = useState("")
  const [toUnit, setToUnit] = useState("")
  const [result, setResult] = useState<string | null>(null)

  const convert = () => {
    if (!value || !fromUnit || !toUnit) return

    const numValue = Number.parseFloat(value)
    let converted: number

    if (type === "temperature") {
      // Temperature conversions need special handling
      if (fromUnit === "c") {
        if (toUnit === "f") converted = (numValue * 9) / 5 + 32
        else if (toUnit === "k") converted = numValue + 273.15
        else converted = numValue
      } else if (fromUnit === "f") {
        if (toUnit === "c") converted = ((numValue - 32) * 5) / 9
        else if (toUnit === "k") converted = ((numValue - 32) * 5) / 9 + 273.15
        else converted = numValue
      } else {
        // fromUnit === "k"
        if (toUnit === "c") converted = numValue - 273.15
        else if (toUnit === "f") converted = ((numValue - 273.15) * 9) / 5 + 32
        else converted = numValue
      }
    } else {
      // For length and weight
      const selectedType = unitTypes[type as keyof typeof unitTypes]
      const conversions = selectedType.conversions as Record<string, number>
      converted = (numValue / conversions[fromUnit]) * conversions[toUnit]
    }

    setResult(converted.toFixed(4))
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white text-center mb-8">Unit Converter</h1>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 max-w-md mx-auto">
        <div className="space-y-4">
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(unitTypes).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input type="number" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} />

          <div className="grid grid-cols-2 gap-4">
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger>
                <SelectValue placeholder="From" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(unitTypes[type as keyof typeof unitTypes].units).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={toUnit} onValueChange={setToUnit}>
              <SelectTrigger>
                <SelectValue placeholder="To" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(unitTypes[type as keyof typeof unitTypes].units).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={convert} className="w-full">
            Convert
          </Button>

          {result && (
            <div className="text-white text-center mt-4">
              <p className="text-lg">
                {value}{" "}
                {
                  unitTypes[type as keyof typeof unitTypes].units[
                    fromUnit as keyof (typeof unitTypes)[typeof type]["units"]
                  ]
                }{" "}
                = {result}{" "}
                {
                  unitTypes[type as keyof typeof unitTypes].units[
                    toUnit as keyof (typeof unitTypes)[typeof type]["units"]
                  ]
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

