import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function RunningProjectsSection() {
  return (
    <section id="current-project" className="py-16 sm:py-32 px-4 sm:px-6 bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 lg:gap-16">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            PROYECTO
            <br />
            ACTUAL
          </h2>
          <div className="max-w-md lg:text-right">
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Nuestro equipo está actualmente transformando esta propiedad en El Vendrell con esquemas de color
              personalizados y acabados premium, mostrando nuestro compromiso con la excelencia en cada pincelada.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-gray-800 dark:border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Hablar sobre tu proyecto <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="relative group">
          <div className="aspect-[16/9] relative overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg?height=800&width=1600&query=luxury home exterior being painted by professionals"
              alt="Proyecto actual de pintura de una propiedad de lujo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
