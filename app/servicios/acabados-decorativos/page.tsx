import type { Metadata } from "next"
import AcabadosDecorativosClientPage from "./AcabadosDecorativosClientPage"

export const metadata: Metadata = {
  title: "Acabados Decorativos | Royal Pintores",
  description:
    "Servicios especializados en acabados decorativos y técnicas artísticas para paredes y superficies en El Vendrell, Tarragona, Barcelona y alrededores. Transforme sus espacios con efectos únicos y personalizados.",
  keywords: [
    "acabados decorativos",
    "pintores profesionales",
    "estuco veneciano",
    "efectos decorativos",
    "pintura artística",
    "Royal Pintores",
    "El Vendrell",
    "Tarragona",
    "Barcelona",
  ],
}

export default function AcabadosDecorativosPage() {
  return <AcabadosDecorativosClientPage />
}
