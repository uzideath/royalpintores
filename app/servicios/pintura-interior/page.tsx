import type { Metadata } from "next"
import PinturaInteriorClientPage from "./PinturaInteriorClientPage"

export const metadata: Metadata = {
  title: "Pintura Interior | Royal Pintores",
  description:
    "Servicios profesionales de pintura interior para hogares y negocios en El Vendrell, Tarragona, Barcelona y alrededores. Transformamos espacios con colores y acabados premium.",
  keywords: [
    "pintura interior",
    "pintores profesionales",
    "renovación interior",
    "pintura de paredes",
    "pintura de techos",
    "Royal Pintores",
    "El Vendrell",
    "Tarragona",
    "Barcelona",
  ],
}

export default function PinturaInteriorPage() {
  return <PinturaInteriorClientPage />
}
