"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProjectModal from "./ProjectModal"

// Datos simplificados de proyectos para la sección destacada
const featuredProjects = {
  residencial: {
    id: "residencial-featured",
    title: "Villa de Lujo en Sitges",
    thumbnail: "/5.jpeg",
    images: ["/projects/luxury-villa.png", "/projects/luxury-villa-detail.png", "/projects/luxury-villa-exterior.png"],
    description:
      "Proyecto integral de pintura para una villa de lujo en Sitges. Trabajamos tanto en el interior como en el exterior, aplicando técnicas decorativas especiales en el salón principal y utilizando pintura resistente a la intemperie para la fachada y zonas exteriores.",
    location: "Sitges, Barcelona",
    type: "Residencial de Lujo",
    duration: "1 mes",
    services: ["Pintura Interior", "Pintura Exterior", "Técnicas Decorativas", "Restauración de Fachada"],
  },
  comercial: {
    id: "comercial-featured",
    title: "Oficinas Corporativas en Tarragona",
    thumbnail: "/3.jpeg",
    images: [
      "/projects/office-project.png",
      "/projects/office-project-reception.png",
      "/projects/office-project-meeting-room.png",
    ],
    description:
      "Renovación de las oficinas corporativas de una empresa en Tarragona. El proyecto requirió una planificación cuidadosa para minimizar la interrupción de las actividades comerciales. Se utilizaron pinturas sin olor y de secado rápido, con acabados especiales para las zonas de recepción y salas de reuniones.",
    location: "Tarragona",
    type: "Comercial",
    duration: "10 días",
    services: ["Pintura Comercial", "Acabados Especiales", "Pintura sin Olor"],
  },
  especialidad: {
    id: "especialidad-featured",
    title: "Acabados Decorativos en Calafell",
    thumbnail: "/4.jpeg",
    images: [
      "/projects/decorative-project.png",
      "/projects/decorative-project-detail.png",
      "/projects/decorative-project-bedroom.png",
    ],
    description:
      "Proyecto de acabados decorativos especiales para una vivienda en Calafell. Se aplicaron técnicas de estuco veneciano en el salón, efecto óxido en elementos decorativos y pintura con textura en el dormitorio principal.",
    location: "Calafell, Tarragona",
    type: "Especialidad",
    duration: "2 semanas",
    services: ["Acabados Decorativos", "Estuco Veneciano", "Efectos Especiales", "Texturas"],
  },
}

// Define the Project type outside the component to make it reusable
type Project = {
  id: string
  title: string
  thumbnail: string
  images: string[]
  description: string
  location: string
  type: string
  duration: string
  services: string[]
}

export default function FeaturedWorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-32">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-16 gap-6 sm:gap-0">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              PROYECTOS
              <br />
              DESTACADOS
            </h2>
            <div className="max-w-md">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Desde repintados residenciales hasta grandes proyectos comerciales, nuestro portafolio muestra una
                combinación de artesanía y atención al detalle que nos distingue en toda la provincia de Tarragona y
                Barcelona.
              </p>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 border border-gray-800 dark:border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                Ver todos los proyectos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Project Categories */}
          {[
            {
              title: "RESIDENCIAL",
              number: "01",
              description: "Transformando hogares con pinturas premium y técnicas expertas",
              project: featuredProjects.residencial,
            },
            {
              title: "COMERCIAL",
              number: "02",
              description: "Soluciones profesionales para negocios y propiedades comerciales",
              project: featuredProjects.comercial,
            },
            {
              title: "ESPECIALIDAD",
              number: "03",
              description: "Acabados personalizados y pintura decorativa para espacios únicos",
              project: featuredProjects.especialidad,
            },
          ].map((category, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 sm:py-12 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="space-y-4 mb-4 sm:mb-0">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-2xl sm:text-4xl font-bold">{category.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">({category.number})</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-8">
                <div
                  className="hidden md:block relative w-48 h-32 bg-gray-200 dark:bg-gray-900 cursor-pointer overflow-hidden"
                  onClick={() => openProject(category.project)}
                >
                  <Image
                    src={category.project.thumbnail || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <button
                  onClick={() => openProject(category.project)}
                  className="inline-flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Ver proyectos <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Our Service Expertise */}
        <div className="mb-16 sm:mb-32">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-16 gap-6 sm:gap-0">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              NUESTRA
              <br />
              ESPECIALIDAD
            </h2>
            <div className="max-w-md">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Aprovechando materiales premium y años de experiencia para ofrecer resultados excepcionales en proyectos
                de pintura residencial y comercial en toda la costa catalana.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-gray-800 dark:border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                Iniciar un proyecto <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                number: "01",
                title: "PINTURA INTERIOR",
                descriptions: [
                  "Transformando espacios habitables con pinturas y acabados premium.",
                  "Preparación meticulosa y técnicas de aplicación impecables.",
                ],
              },
              {
                number: "02",
                title: "PINTURA EXTERIOR",
                descriptions: [
                  "Soluciones resistentes a la intemperie para protección y belleza duradera.",
                  "Preparación integral de superficies y materiales de calidad.",
                ],
              },
              {
                number: "03",
                title: "ACABADOS ESPECIALES",
                descriptions: [
                  "Técnicas decorativas personalizadas para un impacto visual único.",
                  "Acabados texturizados, efectos falsos y aplicaciones artísticas.",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="space-y-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">({service.number})</span>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                {service.descriptions.map((desc, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-400 text-sm">
                    {desc}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de proyecto */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
    </section>
  )
}
