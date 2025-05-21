import type { Metadata } from "next"
import PinturaExteriorClientPage from "./PinturaExteriorClientPage"

export const metadata: Metadata = {
  title: "Pintura Exterior | Royal Pintores",
  description:
    "Servicios profesionales de pintura exterior para fachadas, terrazas y superficies exteriores en El Vendrell, Tarragona, Barcelona y alrededores. Protección y belleza duradera para su propiedad.",
  keywords: [
    "pintura exterior",
    "pintores profesionales",
    "pintura de fachadas",
    "renovación exterior",
    "impermeabilización",
    "Royal Pintores",
    "El Vendrell",
    "Tarragona",
    "Barcelona",
  ],
}

export default function PinturaExteriorPage() {
  return <PinturaExteriorClientPage />
}
