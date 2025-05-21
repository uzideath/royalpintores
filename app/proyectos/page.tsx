import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProjectsGallery from "@/components/ProjectsGallery"
import NavBar from "@/components/NavBar"

export const metadata = {
  title: "Proyectos | Royal Pintores",
  description:
    "Explora nuestra galería de proyectos de pintura residencial, comercial y especializada en El Vendrell, Tarragona, Barcelona y alrededores.",
}

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nuestros Proyectos</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Explora nuestra selección de proyectos destacados en pintura residencial, comercial y especializada. Cada
            proyecto refleja nuestro compromiso con la calidad, la atención al detalle y la satisfacción del cliente.
          </p>
        </div>

        <ProjectsGallery />
      </div>
    </div>
  )
}
