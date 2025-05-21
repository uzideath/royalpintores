"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import NavBar from "@/components/NavBar"
import ContactSection from "@/components/ContactSection"

export default function PinturaExteriorClientPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <NavBar />

      {/* Split Hero Section */}
      <section className="pt-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
              >
                <ArrowLeft className="w-4 h-4" /> Volver al inicio
              </Link>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">PINTURA EXTERIOR</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl">
                Protección y belleza duradera para su propiedad. Nuestros servicios de pintura exterior combinan
                resistencia a la intemperie con acabados estéticos de alta calidad.
              </p>
            </div>
            <div className="relative h-[60vh] md:h-[80vh]">
              <Image
                src="/exterior-house-painting.png"
                alt="Servicio de Pintura Exterior"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Sections */}
      <section className="relative py-24">
        {/* Background shape */}
        <div className="absolute top-0 right-0 w-1/2 h-[70vh] bg-gray-100 dark:bg-gray-900 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main content with overlap */}
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-white dark:bg-black p-8 md:p-12 shadow-xl dark:shadow-none dark:border dark:border-gray-800 rounded-lg md:absolute md:top-24 md:left-0 md:w-[120%] z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Protección y estética para su propiedad</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  La pintura exterior es mucho más que estética: es la primera línea de defensa de su propiedad contra
                  los elementos. Nuestro servicio de pintura exterior está diseñado para proporcionar una protección
                  duradera contra la lluvia, el sol, el viento y otros factores ambientales, a la vez que mejora
                  significativamente la apariencia de su propiedad.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Utilizamos pinturas específicamente formuladas para exteriores con alta resistencia a la intemperie,
                  protección UV y propiedades impermeabilizantes que prolongan la vida útil de sus superficies
                  exteriores.
                </p>
                <div className="space-y-3">
                  <h3 className="font-semibold text-xl">Nuestro proceso incluye:</h3>
                  {[
                    "Evaluación detallada de superficies exteriores",
                    "Limpieza y preparación profesional",
                    "Reparación de grietas y daños estructurales",
                    "Imprimación específica según el sustrato",
                    "Aplicación de múltiples capas de pintura exterior",
                    "Sellado y protección final",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gray-800 dark:text-white mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:ml-auto">
                <div className="aspect-[4/5] relative bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden md:ml-24">
                  <Image
                    src="/placeholder.svg?height=800&width=640&query=close up of exterior house painting with professional equipment"
                    alt="Proceso de pintura exterior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Minimalist Design */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Servicios de pintura exterior</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: "Pintura de fachadas",
                description:
                  "Renovación completa de fachadas con sistemas de pintura que protegen y embellecen la estructura principal de su propiedad.",
                image:
                  "/placeholder.svg?height=600&width=800&query=elegant house facade being painted by professionals",
              },
              {
                title: "Impermeabilización",
                description:
                  "Aplicación de sistemas impermeabilizantes para prevenir filtraciones y daños por humedad en superficies exteriores.",
                image:
                  "/placeholder.svg?height=600&width=800&query=waterproofing exterior surface of building minimalist",
              },
              {
                title: "Restauración de fachadas",
                description:
                  "Recuperación de fachadas deterioradas, incluyendo reparación de grietas, tratamiento de humedades y renovación estética.",
                image: "/placeholder.svg?height=600&width=800&query=facade restoration before and after minimalist",
              },
              {
                title: "Tratamientos especializados",
                description:
                  "Soluciones específicas para problemas de humedad, protección UV y resistencia a condiciones climáticas adversas.",
                image: "/placeholder.svg?height=600&width=800&query=specialized exterior paint treatment minimalist",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-col h-full border-b border-gray-200 dark:border-gray-800 pb-8 group"
              >
                <div className="aspect-[4/3] relative bg-gray-100 dark:bg-gray-900 mb-8 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Minimalist Design */}
      <section className="py-24 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Beneficios de nuestro servicio</h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "Protección duradera",
                description:
                  "Nuestras pinturas exteriores ofrecen una barrera efectiva contra los elementos y mantienen sus propiedades protectoras durante años.",
              },
              {
                title: "Estética impecable",
                description:
                  "Transformamos completamente la apariencia de su propiedad, aumentando su atractivo visual y valor de mercado.",
              },
              {
                title: "Eficiencia y calidad",
                description:
                  "Utilizamos materiales premium y técnicas avanzadas que garantizan resultados superiores y mayor durabilidad.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-light">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase - Minimalist Design */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Transformaciones</h2>

          <div className="space-y-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative aspect-square w-full mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=800&query=house exterior before painting old and worn minimalist"
                    alt="Antes de pintura exterior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white px-6 py-4">
                    <p className="font-medium">ANTES</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative aspect-square w-full mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=800&query=house exterior after painting fresh and beautiful minimalist"
                    alt="Después de pintura exterior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 text-black px-6 py-4">
                    <p className="font-medium">DESPUÉS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative aspect-square w-full mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=800&query=facade before restoration damaged minimalist"
                    alt="Antes de restauración"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white px-6 py-4">
                    <p className="font-medium">ANTES</p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative aspect-square w-full mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=800&query=facade after restoration beautiful minimalist"
                    alt="Después de restauración"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 text-black px-6 py-4">
                    <p className="font-medium">DESPUÉS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Su propiedad necesita una renovación exterior?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Contáctenos hoy para una evaluación gratuita y presupuesto personalizado para su proyecto de pintura
            exterior.
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

      {/* FAQ Section - Minimalist Design */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Preguntas frecuentes</h2>

          <div className="space-y-12">
            {[
              {
                question: "¿Cuál es la mejor época del año para pintar el exterior?",
                answer:
                  "La primavera y el verano son ideales debido a las temperaturas moderadas y menor humedad. Sin embargo, con nuestras técnicas y materiales especializados, podemos trabajar durante gran parte del año, evitando días de lluvia o temperaturas extremas.",
              },
              {
                question: "¿Cuánto tiempo dura una pintura exterior bien aplicada?",
                answer:
                  "Una pintura exterior de calidad aplicada profesionalmente puede durar entre 7 y 10 años, dependiendo de la exposición a los elementos, la calidad de los materiales utilizados y el mantenimiento regular.",
              },
              {
                question: "¿Qué preparación requiere mi propiedad antes de la pintura exterior?",
                answer:
                  "Nosotros nos encargamos de toda la preparación, que incluye limpieza a presión, rascado de pintura suelta, reparación de grietas y daños, lijado de superficies y aplicación de imprimaciones. Usted solo necesita asegurar acceso adecuado al perímetro de la propiedad.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-t border-gray-200 dark:border-gray-800 pt-8">
                <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
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
