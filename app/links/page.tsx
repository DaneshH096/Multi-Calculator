import Layout from "../components/layout"

export default function UsefulLinks() {
  const links = [
    { name: "National Scholarship Portal", url: "https://scholarships.gov.in/" },
    { name: "Vidyasaarathi - Scholarship Management Portal", url: "https://www.vidyasaarathi.co.in/" },
    { name: "MyScheme - Government Schemes", url: "https://myscheme.gov.in/" },
    { name: "National Career Service", url: "https://www.ncs.gov.in/" },
    { name: "Digital India Schemes", url: "https://www.digitalindia.gov.in/" },
  ]

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white text-center mb-8">Useful Links</h1>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 max-w-md mx-auto">
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

