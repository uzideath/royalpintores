"use client"

import { useState } from "react"
import Image from "next/image"
import ProjectModal from "./ProjectModal"

// Datos de proyectos
const projects = [
  {
    id: "residencial-vendrell",
    title: "Renovación Residencial en El Vendrell",
    thumbnail: "/projects/residential-project-1.png",
    images: [
      "/projects/residential-project-1.png",
      "/projects/residential-project-1-detail.png",
      "/projects/residential-project-1-after.png",
    ],
    description:
      "Renovación completa de una vivienda unifamiliar en El Vendrell. El proyecto incluyó pintura interior de todas las habitaciones, pasillos y zonas comunes, así como tratamiento de humedades en algunas paredes. Se utilizaron pinturas premium con acabado mate para las paredes y esmalte al agua para carpintería.",
    location: "El Vendrell, Tarragona",
    type: "Residencial",
    duration: "2 semanas",
    services: ["Pintura Interior", "Tratamiento de Humedades", "Esmaltado de Carpintería"],
    category: "residencial",
  },
  {
    id: "villa-sitges",
    title: "Villa de Lujo en Sitges",
    thumbnail: "/projects/luxury-villa.png",
    images: ["/projects/luxury-villa.png", "/projects/luxury-villa-detail.png", "/projects/luxury-villa-exterior.png"],
    description:
      "Proyecto integral de pintura para una villa de lujo en Sitges. Trabajamos tanto en el interior como en el exterior, aplicando técnicas decorativas especiales en el salón principal y utilizando pintura resistente a la intemperie para la fachada y zonas exteriores.",
    location: "Sitges, Barcelona",
    type: "Residencial de Lujo",
    duration: "1 mes",
    services: ["Pintura Interior", "Pintura Exterior", "Técnicas Decorativas", "Restauración de Fachada"],
    category: "residencial",
  },
  {
    id: "oficinas-tarragona",
    title: "Oficinas Corporativas en Tarragona",
    thumbnail: "/projects/office-project.png",
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
    category: "comercial",
  },
  {
    id: "restaurante-cambrils",
    title: "Restaurante en Cambrils",
    thumbnail: "/projects/restaurant-project.png",
    images: [
      "/projects/restaurant-project.png",
      "/projects/restaurant-project-detail.png",
      "/projects/restaurant-project-bar.png",
    ],
    description:
      "Renovación completa de un restaurante en Cambrils, incluyendo zona de comedor, bar y terraza. Se aplicaron acabados decorativos especiales en la zona del bar y se utilizaron pinturas lavables y resistentes a manchas en el área de cocina y comedor.",
    location: "Cambrils, Tarragona",
    type: "Comercial",
    duration: "2 semanas",
    services: ["Pintura Comercial", "Acabados Decorativos", "Pintura Lavable", "Restauración de Mobiliario"],
    category: "comercial",
  },
  {
    id: "fachada-torredembarra",
    title: "Restauración de Fachada en Torredembarra",
    thumbnail: "/projects/facade-project.png",
    images: [
      "/projects/facade-project.png",
      "/projects/facade-project-detail.png",
      "/projects/facade-project-after.png",
    ],
    description:
      "Restauración completa de la fachada de un edificio histórico en Torredembarra. El proyecto incluyó reparación de grietas, tratamiento contra humedades y aplicación de pintura especial para fachadas con protección contra los rayos UV y la intemperie.",
    location: "Torredembarra, Tarragona",
    type: "Especialidad",
    duration: "3 semanas",
    services: ["Restauración de Fachada", "Tratamiento de Grietas", "Impermeabilización", "Pintura Exterior"],
    category: "especialidad",
  },
  {
    id: "decorativo-calafell",
    title: "Acabados Decorativos en Calafell",
    thumbnail: "/projects/decorative-project.png",
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
    category: "especialidad",
  },
]

export default function ProjectsGallery({ category = "all" }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(category)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const openProject = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="py-8">
      {/* Filtros de categoría */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeCategory === "all"
              ? "bg-gray-800 dark:bg-white text-white dark:text-black"
              : "bg-transparent border border-gray-300 dark:border-gray-700 hover:border-gray-800 dark:hover:border-white"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setActiveCategory("residencial")}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeCategory === "residencial"
              ? "bg-gray-800 dark:bg-white text-white dark:text-black"
              : "bg-transparent border border-gray-300 dark:border-gray-700 hover:border-gray-800 dark:hover:border-white"
          }`}
        >
          Residencial
        </button>
        <button
          onClick={() => setActiveCategory("comercial")}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeCategory === "comercial"
              ? "bg-gray-800 dark:bg-white text-white dark:text-black"
              : "bg-transparent border border-gray-300 dark:border-gray-700 hover:border-gray-800 dark:hover:border-white"
          }`}
        >
          Comercial
        </button>
        <button
          onClick={() => setActiveCategory("especialidad")}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeCategory === "especialidad"
              ? "bg-gray-800 dark:bg-white text-white dark:text-black"
              : "bg-transparent border border-gray-300 dark:border-gray-700 hover:border-gray-800 dark:hover:border-white"
          }`}
        >
          Especialidad
        </button>
      </div>

      {/* Galería de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group cursor-pointer border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition-all hover:border-gray-400 dark:hover:border-gray-600"
            onClick={() => openProject(project)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.thumbnail || "/placeholder.svg?height=400&width=600&query=painting project"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{project.location}</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">{project.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de proyecto */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
    </div>
  )
}
