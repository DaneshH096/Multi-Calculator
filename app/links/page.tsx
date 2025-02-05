"use client"

import Layout from "../components/layout"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const deadlineGroups = {
  "December 31, 2024": ["General Merit"],
  "January 31, 2025": ["SC/ST"],
  "February 10, 2025": ["Category 1"],
  "February 15, 2025": ["2A", "2B", "3A", "3B"],
  "February 25, 2025": ["Social Welfare"],
  "February 28, 2025": ["Minority", "Backward Classes"],
}

export default function UsefulLinks() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white text-center mb-8">Useful Links</h1>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="ssp">
            <AccordionTrigger className="text-white hover:text-blue-200">SSP Scholarship Details</AccordionTrigger>
            <AccordionContent className="text-white space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Application Deadlines</h3>
                {Object.entries(deadlineGroups).map(([deadline, categories]) => (
                  <div key={deadline} className="mb-2">
                    <p className="font-medium">{deadline}:</p>
                    <ul className="list-disc list-inside pl-4">
                      {categories.map((category) => (
                        <li key={category}>{category}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-2">Important Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://ssp.postmatric.karnataka.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition"
                    >
                      Apply for SSP Scholarship
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://kutumba-services.karnataka.gov.in/KutumbaServices"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition"
                    >
                      Kutumba Services Portal
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://kutumba.karnataka.gov.in/mykutumba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition"
                    >
                      My Kutumba Portal
                    </a>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Aadhaar and PAN sections remain unchanged */}
        </Accordion>
      </div>
    </Layout>
  )
}

