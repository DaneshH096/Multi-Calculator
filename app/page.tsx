import Layout from "./components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  const flashNews = [
    {
      title: "Age Calculator Algorithm",
      content: "Calculate your exact age in years, months, days, hours, minutes, and seconds!",
      href: "/age",
    },
    {
      title: "Date Difference Calculator",
      content: "Find the precise time between any two dates with our advanced algorithm.",
      href: "/date-diff",
    },
    {
      title: "Time Difference Calculator",
      content: "Our algorithm calculates the exact hours and minutes between any two times.",
      href: "/time-diff",
    },
    {
      title: "Interest Calculator",
      content: "Use our compound interest algorithm to plan your financial future.",
      href: "/interest",
    },
    {
      title: "Currency Conversion Algorithm",
      content: "Real-time currency conversion with the latest exchange rates.",
      href: "/currency",
    },
  ]

  const popularCalculators = [
    {
      title: "Age Calculator",
      description: "Calculate your exact age down to the second with our precise algorithm.",
      href: "/age",
    },
    {
      title: "Interest Calculator",
      description: "Plan your investments with our compound interest algorithm.",
      href: "/interest",
    },
    {
      title: "Unit Converter",
      description: "Convert between different units with our comprehensive conversion algorithms.",
      href: "/unit",
    },
  ]

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-white text-center mb-4">All-in-One Calculator Algorithms</h1>
      <p className="text-xl text-white text-center mb-8">
        Powerful calculation algorithms for everyday use - fast, accurate, and free!
      </p>

      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Popular Calculation Algorithms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popularCalculators.map((calc, index) => (
            <Link href={calc.href} key={index} className="block transition-transform hover:scale-105">
              <Card className="bg-white bg-opacity-20 backdrop-blur-lg hover:bg-opacity-30 h-full">
                <CardHeader>
                  <CardTitle className="text-white">{calc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">{calc.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Latest Calculator Algorithms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flashNews.map((news, index) => (
            <Link href={news.href} key={index} className="block transition-transform hover:scale-105">
              <Card className="bg-white bg-opacity-20 backdrop-blur-lg hover:bg-opacity-30">
                <CardHeader>
                  <CardTitle className="text-white">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">{news.content}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

