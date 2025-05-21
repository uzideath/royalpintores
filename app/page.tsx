import type { Metadata } from "next"
import MainSection from "@/components/MainSection"
import FeaturedWorkSection from "@/components/FeaturedWorkSection"
import RunningProjectsSection from "@/components/RunningProjectsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import LocationsSection from "@/components/LocationsSection"
import NavBar from "@/components/NavBar"

export const metadata: Metadata = {
  title: "Royal Pintores | Servicios Profesionales de Pintura en Tarragona y Barcelona",
  description:
    "Empresa profesional de pintura en El Vendrell, Tarragona, Barcelona y alrededores. Especialistas en pintura interior, exterior, residencial y comercial con calidad premium y atención al detalle.",
  keywords: [
    "pintores profesionales",
    "servicios de pintura",
    "pintura interior",
    "pintura exterior",
    "pintura residencial",
    "pintura comercial",
    "Royal Pintores",
    "pintores El Vendrell",
    "pintores Tarragona",
    "pintores Barcelona",
    "Coma Ruga",
    "Torredembarra",
    "Calafell",
    "Sitges",
  ],
  openGraph: {
    title: "Royal Pintores | Servicios Profesionales de Pintura",
    description:
      "Transforma tu espacio con nuestros servicios expertos de pintura. Servicios en El Vendrell, Tarragona, Barcelona y toda la costa.",
    type: "website",
    url: "https://royalpintores.com",
    images: [
      {
        url: "/modern-house-painters.png",
        width: 1200,
        height: 630,
        alt: "Royal Pintores - Servicios Profesionales de Pintura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Pintores | Servicios Profesionales de Pintura",
    description:
      "Transforma tu espacio con nuestros servicios expertos de pintura. Servicios en El Vendrell, Tarragona, Barcelona y toda la costa.",
    images: ["/modern-house-painters.png"],
  },
  alternates: {
    canonical: "https://royalpintores.com",
  },
  authors: [{ name: "Royal Pintores" }],
  category: "Servicios para el Hogar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <NavBar />
      <MainSection />
      <FeaturedWorkSection />
      <RunningProjectsSection />
      <LocationsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
