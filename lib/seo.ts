// Datos estructurados para SEO
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Royal Pintores",
  image: "https://royalpintores.com/images/logo.jpg",
  telephone: "+34613962582",
  email: "info@royalpintores.com",
  url: "https://royalpintores.com",
  description:
    "Empresa profesional de pintura en El Vendrell, Tarragona, Barcelona y alrededores. Especialistas en pintura interior, exterior, residencial y comercial.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Tarragona",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.1862,
    longitude: 1.5701,
  },
  areaServed: [
    "El Vendrell",
    "Coma Ruga",
    "El Francás",
    "Torredembarra",
    "Calafell",
    "Segur Calafell",
    "Cunit",
    "Cubelles",
    "Vilanova i la Geltrú",
    "Sitges",
    "Sant Pere de Ribes",
    "Creixell",
    "Roda de Bará",
    "Tarragona",
    "Reus",
    "Salou",
    "Cambrils",
    "Altafulla",
    "Barcelona",
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
}
