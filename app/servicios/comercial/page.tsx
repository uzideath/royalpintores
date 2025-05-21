import type { Metadata } from "next"
import ComercialClientPage from "./ComercialClientPage"

export const metadata: Metadata = {
  title: "Servicios de Pintura Comercial | Royal Pintores",
  description:
    "Servicios profesionales de pintura para negocios, oficinas y espacios comerciales. Transformamos su entorno empresarial con mínimas interrupciones.",
}

export default function ComercialPage() {
  return <ComercialClientPage />
}
