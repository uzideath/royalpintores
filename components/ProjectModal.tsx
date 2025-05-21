"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectModal({ isOpen, onClose, project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm p-4">
      <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-xl dark:shadow-none">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="relative flex-grow overflow-auto">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-black/50 hover:bg-white/70 dark:hover:bg-black/70 p-2 rounded-full"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-black/50 hover:bg-white/70 dark:hover:bg-black/70 p-2 rounded-full"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          <div className="p-6">
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Descripción</h4>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Ubicación</h4>
                <p>{project.location}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Tipo de proyecto</h4>
                <p>{project.type}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Duración</h4>
                <p>{project.duration}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Servicios</h4>
                <p>{project.services.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
