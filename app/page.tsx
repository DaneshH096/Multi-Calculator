import Layout from "./components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const flashNews = [
    { title: "New Currency Converter", content: "Convert between multiple currencies in real-time!" },
    { title: "Unit Converter Added", content: "Convert between various units of measurement." },
    { title: "SSP Scholarship Deadline", content: "General Merit category deadline: December 31, 2024" },
    { title: "Aadhaar Download Guide", content: "New guide on how to download your Aadhaar card online." },
    { title: "PAN Card Application", content: "Step-by-step guide for applying for a new PAN card." },
  ]

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-white text-center mb-8">Welcome to All in One Calculator</h1>
      <p className="text-xl text-white text-center mb-8">
        Choose a calculator from the menu above or explore useful links.
      </p>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Flash News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flashNews.map((news, index) => (
            <Card key={index} className="bg-white bg-opacity-20 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-white">{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white">{news.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

