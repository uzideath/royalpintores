"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Building2, Briefcase, PaintBucket, Clock, Users, Wrench } from "lucide-react"
import NavBar from "@/components/NavBar"
import ContactSection from "@/components/ContactSection"

export default function ComercialClientPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <NavBar />

      {/* Fixed Sidebar Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Fixed on desktop, scrollable header on mobile */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:w-1/3 lg:flex lg:flex-col lg:justify-center lg:bg-gray-50 lg:dark:bg-black lg:p-12">
          <div className="pt-32 lg:pt-0 px-4 sm:px-6 lg:px-0">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">PINTURA COMERCIAL</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Soluciones profesionales de pintura para negocios, oficinas y espacios comerciales. Transformamos su
              entorno empresarial con mínimas interrupciones.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-black dark:border-white px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Solicitar presupuesto <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main Content - Scrollable */}
        <div className="lg:w-2/3">
          {/* Services Cards with Icons */}
          <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl font-bold mb-12">Nuestros servicios comerciales</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Oficinas y espacios de trabajo",
                  description:
                    "Creamos ambientes profesionales que fomentan la productividad y reflejan la identidad corporativa de su empresa.",
                  icon: <Building2 className="w-10 h-10" />,
                },
                {
                  title: "Locales comerciales",
                  description:
                    "Transformamos tiendas y espacios de venta con acabados atractivos que mejoran la experiencia del cliente.",
                  icon: <Briefcase className="w-10 h-10" />,
                },
                {
                  title: "Restaurantes y hostelería",
                  description:
                    "Aplicamos acabados duraderos y fáciles de limpiar, ideales para entornos de alta actividad y tráfico.",
                  icon: <PaintBucket className="w-10 h-10" />,
                },
                {
                  title: "Centros educativos y sanitarios",
                  description:
                    "Utilizamos pinturas antibacterianas y de bajo COV, seguras para entornos sensibles y de alta ocupación.",
                  icon: <Users className="w-10 h-10" />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-black p-6 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all h-full"
                >
                  <div className="text-gray-800 dark:text-white mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Full-width Image Section */}
          <section className="relative h-[60vh] w-full">
            <Image
              src="/placeholder.svg?height=800&width=1200&query=commercial painters working in modern office space"
              alt="Pintura comercial profesional"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl px-4">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experiencia comercial especializada</h2>
                <p className="text-xl">
                  Nuestro equipo está capacitado específicamente para proyectos comerciales, entendiendo las necesidades
                  únicas de los espacios de negocio.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl font-bold mb-12">Ventajas de nuestro servicio comercial</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Mínima interrupción",
                  description:
                    "Trabajamos en horarios flexibles, incluso fuera del horario comercial, para minimizar el impacto en su actividad.",
                  icon: <Clock className="w-6 h-6" />,
                },
                {
                  title: "Acabados duraderos",
                  description:
                    "Utilizamos pinturas comerciales de alta resistencia, diseñadas para soportar el desgaste diario intenso.",
                  icon: <Wrench className="w-6 h-6" />,
                },
                {
                  title: "Cumplimiento normativo",
                  description:
                    "Garantizamos el cumplimiento de todas las normativas de seguridad y salud aplicables a espacios comerciales.",
                  icon: <Check className="w-6 h-6" />,
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 dark:bg-black text-gray-800 dark:text-white mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Timeline */}
          <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50 dark:bg-black">
            <h2 className="text-3xl font-bold mb-16 text-center">Nuestro proceso de trabajo</h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform sm:-translate-x-px"></div>

              <div className="space-y-24">
                {[
                  {
                    step: "01",
                    title: "Evaluación y planificación",
                    description:
                      "Analizamos sus necesidades específicas, el estado actual de las superficies y desarrollamos un plan detallado que minimice las interrupciones.",
                  },
                  {
                    step: "02",
                    title: "Preparación del espacio",
                    description:
                      "Protegemos mobiliario, equipos y áreas adyacentes. Preparamos las superficies con técnicas profesionales para garantizar un acabado perfecto.",
                  },
                  {
                    step: "03",
                    title: "Aplicación experta",
                    description:
                      "Utilizamos equipos profesionales y técnicas avanzadas para aplicar pinturas comerciales de alta calidad con acabados uniformes y duraderos.",
                  },
                  {
                    step: "04",
                    title: "Control de calidad",
                    description:
                      "Realizamos inspecciones detalladas para garantizar que cada superficie cumple con nuestros estándares de calidad y con sus expectativas.",
                  },
                  {
                    step: "05",
                    title: "Limpieza y entrega",
                    description:
                      "Dejamos su espacio comercial impecable y listo para su uso inmediato, con un acabado profesional que impresionará a clientes y empleados.",
                  },
                ].map((process, index) => (
                  <div key={index} className="relative flex flex-col sm:flex-row items-start gap-8">
                    {/* Circle marker */}
                    <div className="absolute left-0 sm:left-1/2 w-8 h-8 bg-white dark:bg-black border-2 border-black dark:border-white rounded-full transform -translate-x-1/2 flex items-center justify-center">
                      <span className="text-xs font-bold">{process.step}</span>
                    </div>

                    {/* Content */}
                    <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-12 sm:text-right">
                      {index % 2 === 0 ? (
                        <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-black">
                          <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
                        </div>
                      ) : null}
                    </div>

                    <div className="hidden sm:block sm:w-1/2 sm:pl-12">
                      {index % 2 === 1 ? (
                        <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-black">
                          <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
                        </div>
                      ) : null}
                    </div>

                    <div className="sm:hidden ml-12">
                      {index % 2 === 1 ? (
                        <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-black">
                          <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl font-bold mb-12">Casos de éxito</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Oficinas corporativas en Barcelona",
                  description:
                    "Renovación completa de 1.200m² de oficinas para una empresa tecnológica, trabajando en horario nocturno para evitar interrupciones.",
                  image:
                    "/placeholder.svg?height=600&width=800&query=modern corporate office with fresh paint and branding",
                },
                {
                  title: "Cadena de restaurantes",
                  description:
                    "Implementación de un esquema de color corporativo en 5 locales, utilizando pinturas antibacterianas aptas para zonas de alimentación.",
                  image: "/placeholder.svg?height=600&width=800&query=restaurant interior with branded color scheme",
                },
                {
                  title: "Centro comercial en Tarragona",
                  description:
                    "Renovación de zonas comunes y fachada exterior, mejorando la estética y protección de más de 3.000m² de superficie.",
                  image: "/placeholder.svg?height=600&width=800&query=shopping mall common areas with new paint",
                },
                {
                  title: "Clínica dental",
                  description:
                    "Aplicación de pinturas especiales de bajo COV y antibacterianas en un entorno sanitario, cumpliendo con todas las normativas.",
                  image: "/placeholder.svg?height=600&width=800&query=modern dental clinic with clean white walls",
                },
              ].map((caseStudy, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-black rounded-lg overflow-hidden group hover:border-gray-300 dark:hover:border-gray-700 transition-all h-full"
                >
                  <div className="aspect-[4/3] relative bg-gray-50 dark:bg-black w-full">
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{caseStudy.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-50 dark:bg-black">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">¿Necesita renovar su espacio comercial?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Contáctenos hoy para una evaluación gratuita y un presupuesto personalizado para su proyecto comercial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-black dark:border-white px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  Solicitar presupuesto <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+34613962582"
                  className="inline-flex items-center gap-2 border border-black dark:border-white px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  Llamar ahora: 613 962 582
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <ContactSection />
        </div>
      </div>
    </div>
  )
}
