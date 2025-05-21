"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import NavBar from "@/components/NavBar"
import ContactSection from "@/components/ContactSection"

export default function PinturaInteriorClientPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <NavBar />

      {/* Hero Section - Full width image with overlay text */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/luxury-home-painting.png"
            alt="Servicio de Pintura Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white mb-6 hover:text-gray-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 text-white">PINTURA INTERIOR</h1>
          <p className="text-xl text-white max-w-2xl">
            Transformamos espacios interiores con colores vibrantes y acabados premium, creando ambientes personalizados
            que reflejan su estilo y personalidad.
          </p>
        </div>
      </section>

      {/* Zigzag Layout Sections */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section 1 - Image Right */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 relative">
                <span className="absolute -left-6 top-0 text-9xl font-bold opacity-5">01</span>
                Transformamos espacios con color y estilo
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                Nuestro servicio de pintura interior va más allá de simplemente aplicar color a las paredes. Creamos
                ambientes que transforman la experiencia de vivir o trabajar en un espacio, considerando la luz, la
                arquitectura y el propósito de cada habitación.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 relative z-10">
                Utilizamos pinturas premium de baja emisión de COV (Compuestos Orgánicos Volátiles) que son más
                saludables para su familia y el medio ambiente, manteniendo la calidad y durabilidad que caracterizan
                nuestro trabajo.
              </p>
              <div className="space-y-3 relative z-10">
                <h3 className="font-semibold text-xl">Nuestro proceso incluye:</h3>
                {[
                  "Consulta y planificación detallada",
                  "Preparación meticulosa de superficies",
                  "Protección de mobiliario y áreas adyacentes",
                  "Aplicación experta con técnicas avanzadas",
                  "Limpieza completa al finalizar",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gray-800 dark:text-white mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src="/interior-painter-precision.png"
                  alt="Proceso de pintura interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-gray-800 dark:border-white"></div>
            </div>
          </div>

          {/* Section 2 - Image Left */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-[4/3] relative bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src="/neutral-modern-living-room.png"
                  alt="Salón con pintura interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-gray-800 dark:border-white"></div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 relative">
                <span className="absolute -left-6 top-0 text-9xl font-bold opacity-5">02</span>
                Materiales premium para resultados excepcionales
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                La calidad de los materiales que utilizamos marca la diferencia en el resultado final. Seleccionamos
                cuidadosamente pinturas de alta gama que ofrecen mayor cobertura, durabilidad y resistencia al lavado.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Nuestras técnicas de aplicación garantizan acabados uniformes, sin marcas de rodillo o brocha visibles,
                creando superficies perfectas que transforman completamente la apariencia de su espacio.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-gray-800 dark:border-white px-6 py-3 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                Solicitar presupuesto <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Horizontal Scroll on Mobile */}
      <section className="py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Nuestros servicios de pintura interior</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pintura de paredes",
                description:
                  "Aplicación experta de pintura en paredes con acabados mate, satinado o brillante según sus preferencias.",
                image: "/placeholder.svg?key=1rq6h",
              },
              {
                title: "Pintura de techos",
                description:
                  "Renovación de techos con pinturas especiales que maximizan la luminosidad y amplitud visual del espacio.",
                image: "/placeholder-z9h1s.png",
              },
              {
                title: "Pintura de carpintería",
                description:
                  "Esmaltado de puertas, marcos, rodapiés y molduras con acabados duraderos y resistentes al desgaste.",
                image: "/placeholder.svg?height=400&width=600&query=painter painting wooden door trim with brush",
              },
              {
                title: "Efectos decorativos",
                description:
                  "Creación de acabados especiales como esponjados, veladuras o efectos metalizados para espacios únicos.",
                image:
                  "/placeholder.svg?height=400&width=600&query=decorative paint effect being applied on feature wall",
              },
              {
                title: "Reparación de superficies",
                description:
                  "Tratamiento de grietas, agujeros y imperfecciones para conseguir un acabado perfecto y duradero.",
                image: "/placeholder.svg?height=400&width=600&query=wall repair before painting interior",
              },
              {
                title: "Cambios de color",
                description: "Transformación completa de espacios mediante cambios de color estratégicos y armoniosos.",
                image:
                  "/placeholder.svg?height=400&width=600&query=before and after interior room color transformation",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden group hover:border-gray-300 dark:hover:border-gray-700 transition-all flex flex-col h-full"
              >
                <div className="aspect-[3/2] relative bg-gray-100 dark:bg-gray-900 w-full">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gray-800 dark:border-white"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gray-800 dark:border-white"></div>
            <blockquote className="text-2xl sm:text-3xl font-light italic text-center px-8 py-16 max-w-3xl mx-auto">
              "Royal Pintores transformó completamente nuestro hogar. Su atención al detalle y profesionalidad hicieron
              que el proceso fuera sin estrés, y el resultado final superó todas nuestras expectativas."
              <footer className="mt-6 text-base font-normal not-italic text-gray-600 dark:text-gray-400">
                — María Rodríguez, El Vendrell
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Listo para transformar su espacio interior?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Contáctenos hoy para una consulta gratuita y presupuesto personalizado para su proyecto de pintura interior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-gray-800 dark:border-white px-6 py-3 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Solicitar presupuesto <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+34613962582"
              className="inline-flex items-center gap-2 border border-gray-800 dark:border-white px-6 py-3 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Llamar ahora: 613 962 582
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion-like design */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                question: "¿Cuánto tiempo tarda en completarse un proyecto de pintura interior?",
                answer:
                  "El tiempo varía según el tamaño del espacio y la complejidad del trabajo. Una habitación estándar puede completarse en 1-2 días, mientras que una casa completa puede llevar de 3 a 7 días. Proporcionamos un cronograma detallado antes de comenzar cada proyecto.",
              },
              {
                question: "¿Necesito desalojar mi casa durante los trabajos de pintura?",
                answer:
                  "No es necesario desalojar completamente la vivienda. Trabajamos por zonas para minimizar las molestias. Sin embargo, recomendamos limitar el acceso a las áreas que se están pintando hasta que estén secas.",
              },
              {
                question: "¿Qué preparación debo hacer antes de que llegue el equipo de pintura?",
                answer:
                  "Recomendamos retirar objetos pequeños, cuadros y decoraciones. Nosotros nos encargamos de mover muebles grandes, proteger suelos y superficies, y realizar toda la preparación necesaria de las paredes.",
              },
              {
                question: "¿Qué tipo de pinturas utilizan?",
                answer:
                  "Utilizamos pinturas premium de marcas reconocidas como Titan, Valentine y Jotun, seleccionando el tipo específico según las necesidades de cada proyecto. Priorizamos productos de baja emisión de COV para interiores.",
              },
              {
                question: "¿Ofrecen garantía para sus trabajos de pintura interior?",
                answer:
                  "Sí, todos nuestros trabajos de pintura interior tienen una garantía de 2 años que cubre defectos en la aplicación como descascarillado, burbujas o decoloración prematura bajo condiciones normales de uso.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-0 last:pb-0">
                <button
                  className="flex w-full justify-between items-start text-left"
                  onClick={(e) => {
                    const target = e.currentTarget.nextElementSibling
                    if (target) {
                      target.classList.toggle("hidden")
                    }
                  }}
                >
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <span className="text-2xl">+</span>
                </button>
                <div className="mt-3 text-gray-600 dark:text-gray-400 hidden">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
