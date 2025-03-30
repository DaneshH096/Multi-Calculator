"use client"

import Layout from "../components/layout"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
                <h3 className="font-semibold mb-2">Important Information</h3>
                <p>
                  The SSP (State Scholarship Portal) provides various scholarships for students. Check the official
                  website for current application periods and eligibility criteria.
                </p>
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

          <AccordionItem value="aadhaar">
            <AccordionTrigger className="text-white hover:text-blue-200">Aadhaar Card Services</AccordionTrigger>
            <AccordionContent className="text-white space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Aadhaar Card Download Guide</h3>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>Visit the official UIDAI website</li>
                  <li>Navigate to the "Download Aadhaar" section</li>
                  <li>Enter your 12-digit Aadhaar number or VID</li>
                  <li>Enter the security code displayed on screen</li>
                  <li>Choose how you want to receive the OTP (mobile or email)</li>
                  <li>Enter the OTP received</li>
                  <li>Click on "Download Aadhaar"</li>
                  <li>Save the PDF file (password is your PIN code)</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Important Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://uidai.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition"
                    >
                      UIDAI Official Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://myaadhaar.uidai.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition"
                    >
                      Download Aadhaar
                    </a>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pan">
            <AccordionTrigger className="text-white hover:text-blue-200">PAN Card Services</AccordionTrigger>
            <AccordionContent className="text-white space-y-4">
              <div>
                <h3 className="font-semibold mb-2">PAN Card Application Process</h3>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>Visit the official NSDL or UTITSL website</li>
                  <li>Select "Apply for New PAN" option</li>
                  <li>Fill in the application form with personal details</li>
                  <li>Upload required documents (ID proof, address proof, photo)</li>
                  <li>Pay the application fee</li>
                  <li>Submit the application and note down the acknowledgment number</li>
                  <li>Track your application status using the acknowledgment number</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Important Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition"
                    >
                      NSDL PAN Application
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.protean-tinpan.com/services/pan/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition"
                    >
                      Protean (formerly UTITSL) PAN Application
                    </a>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  )
}

