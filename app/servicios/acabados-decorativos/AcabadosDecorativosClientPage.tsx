"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import NavBar from "@/components/NavBar"
import ContactSection from "@/components/ContactSection"

export default function AcabadosDecorativosClientPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <NavBar />

      {/* Hero Section with Artistic Layout - Fixed Layout */}
      <section className="pt-32 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 md:col-start-1 z-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
              >
                <ArrowLeft className="w-4 h-4" /> Volver al inicio
              </Link>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                ACABADOS
                <br />
                DECORATIVOS
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl">
                Arte y técnica para transformar sus espacios. Nuestros acabados decorativos combinan belleza artística
                con maestría técnica para crear ambientes únicos y personalizados.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] relative bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden w-full">
                  <Image
                    src="/placeholder.svg?height=800&width=600&query=venetian plaster wall finish close up"
                    alt="Estuco veneciano"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="aspect-[3/4] relative bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden w-full mt-12">
                  <Image
                    src="/placeholder.svg?height=800&width=600&query=metallic rust effect decorative finish"
                    alt="Efecto óxido"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-gray-200 dark:border-gray-800 rounded-full -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 border-2 border-gray-200 dark:border-gray-800 -z-10 transform translate-x-1/2 translate-y-1/4"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=640&query=close up of venetian plaster application technique"
                  alt="Técnica de acabado decorativo"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-64 h-16 bg-gray-100 dark:bg-gray-900 -z-10"></div>
              <div className="absolute -top-8 -right-8 w-16 h-64 bg-gray-100 dark:bg-gray-900 -z-10"></div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">El arte de los acabados decorativos</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Los acabados decorativos representan la fusión perfecta entre arte y técnica en el mundo de la pintura.
                Estas técnicas especializadas permiten crear superficies únicas con texturas, brillos y efectos visuales
                que van mucho más allá de la pintura convencional.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Nuestro equipo de artesanos especializados domina técnicas tradicionales y contemporáneas para
                transformar cualquier superficie en una obra de arte personalizada que refleja su estilo y personalidad.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-xl">Nuestro enfoque incluye:</h3>
                {[
                  "Consulta de diseño personalizada",
                  "Muestras y pruebas de color/efecto",
                  "Preparación meticulosa de superficies",
                  "Aplicación artesanal por especialistas",
                  "Acabados protectores para mayor durabilidad",
                  "Asesoramiento para mantenimiento",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gray-800 dark:text-white mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Gallery - Fixed Masonry Layout */}
      <section className="py-24 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Técnicas decorativas</h2>

          {/* Fixed masonry-style gallery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              {
                title: "Estuco veneciano",
                description:
                  "Técnica clásica italiana que crea superficies con aspecto de mármol pulido, aportando elegancia y luminosidad a cualquier espacio.",
                image: "/placeholder.svg?height=400&width=600&query=venetian plaster wall finish close up",
                span: "md:col-span-6 md:row-span-2",
              },
              {
                title: "Veladuras",
                description:
                  "Aplicación de capas translúcidas de color que crean efectos de profundidad y movimiento, ideales para espacios sofisticados.",
                image: "/placeholder.svg?height=400&width=600&query=color washing decorative paint technique",
                span: "md:col-span-6",
              },
              {
                title: "Efecto óxido y metalizados",
                description:
                  "Recreación de superficies con apariencia de metal oxidado o acabados metálicos para un toque industrial o lujoso.",
                image: "/placeholder.svg?height=400&width=600&query=metallic rust effect decorative finish",
                span: "md:col-span-6",
              },
              {
                title: "Microcemento decorativo",
                description:
                  "Revestimiento continuo de alta resistencia con acabado mineral, perfecto para crear espacios contemporáneos y minimalistas.",
                image: "/placeholder.svg?height=400&width=600&query=decorative microcement wall application",
                span: "md:col-span-8",
              },
              {
                title: "Efectos texturizados",
                description:
                  "Creación de superficies con relieve y textura mediante técnicas especiales que aportan dimensión y carácter a las paredes.",
                image: "/placeholder.svg?height=400&width=600&query=textured wall finish decorative technique",
                span: "md:col-span-4",
              },
              {
                title: "Trampantojos y murales",
                description:
                  "Arte pictórico que crea ilusiones ópticas o escenas completas, transformando radicalmente el carácter de un espacio.",
                image: "/placeholder.svg?height=400&width=600&query=trompe l'oeil mural painting technique",
                span: "md:col-span-12",
              },
            ].map((technique, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-lg ${technique.span || ""}`}>
                <div className="aspect-[16/9] relative w-full h-full">
                  <Image
                    src={technique.image || "/placeholder.svg"}
                    alt={technique.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{technique.title}</h3>
                    <p className="text-gray-200">{technique.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section with Interactive Cards */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Aplicaciones ideales</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Paredes de acento",
                description:
                  "Transforme una pared en el punto focal de cualquier habitación con un acabado decorativo que captura la atención y define el espacio.",
                image: "/placeholder.svg?height=400&width=600&query=luxury accent wall with decorative finish",
              },
              {
                title: "Zonas de recepción",
                description:
                  "Cause una primera impresión impactante en vestíbulos y entradas con acabados elegantes que establecen el tono para todo el espacio.",
                image: "/placeholder.svg?height=400&width=600&query=luxury hotel reception with decorative walls",
              },
              {
                title: "Dormitorios principales",
                description:
                  "Cree un santuario personal con acabados decorativos que aportan calidez, textura y un ambiente único a su espacio más íntimo.",
                image: "/placeholder.svg?height=400&width=600&query=master bedroom with textured accent wall",
              },
              {
                title: "Espacios comerciales",
                description:
                  "Diferencie su negocio con acabados decorativos que refuerzan su identidad de marca y crean una experiencia memorable para sus clientes.",
                image: "/placeholder.svg?height=400&width=600&query=boutique store with decorative wall finishes",
              },
              {
                title: "Restaurantes y hoteles",
                description:
                  "Eleve la experiencia gastronómica o de hospedaje con acabados que crean ambientes sofisticados y temáticos acordes con su concepto.",
                image: "/placeholder.svg?height=400&width=600&query=upscale restaurant with venetian plaster walls",
              },
              {
                title: "Baños y cocinas",
                description:
                  "Utilice acabados decorativos impermeables y resistentes a la humedad para añadir estilo y funcionalidad a estos espacios.",
                image: "/placeholder.svg?height=400&width=600&query=luxury bathroom with microcement walls",
              },
            ].map((application, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                <div className="aspect-[3/2] relative">
                  <Image
                    src={application.image || "/placeholder.svg"}
                    alt={application.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{application.title}</h3>
                    <p className="text-gray-200">{application.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:opacity-0 transition-opacity duration-300">
                    {application.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section className="py-24 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-gray-200 dark:border-gray-800 rounded-full -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-gray-200 dark:border-gray-800 -z-10 transform translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Nuestro proceso creativo</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform sm:-translate-x-px"></div>

            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Inspiración y concepto",
                  description:
                    "Exploramos sus preferencias estéticas, la función del espacio y las posibilidades técnicas para desarrollar un concepto personalizado.",
                },
                {
                  step: "02",
                  title: "Diseño y muestras",
                  description:
                    "Creamos muestras físicas de los acabados seleccionados para que pueda visualizar el resultado final en su propio espacio.",
                },
                {
                  step: "03",
                  title: "Preparación artesanal",
                  description:
                    "Preparamos meticulosamente las superficies y mezclamos los materiales específicos para lograr el efecto deseado.",
                },
                {
                  step: "04",
                  title: "Aplicación por capas",
                  description:
                    "Aplicamos múltiples capas con técnicas especializadas, respetando los tiempos de secado para lograr la profundidad y textura adecuadas.",
                },
                {
                  step: "05",
                  title: "Acabado y protección",
                  description:
                    "Finalizamos con selladores y protectores específicos que realzan la belleza del acabado y garantizan su durabilidad.",
                },
              ].map((process, index) => (
                <div key={index} className="relative flex flex-col sm:flex-row items-start gap-8">
                  {/* Circle marker */}
                  <div className="absolute left-0 sm:left-1/2 w-8 h-8 bg-white dark:bg-black border-2 border-gray-800 dark:border-white rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-xs font-bold">{process.step}</span>
                  </div>

                  {/* Content */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-12 sm:text-right">
                    {index % 2 === 0 ? (
                      <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-gray-800">
                        <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="hidden sm:block sm:w-1/2 sm:pl-12">
                    {index % 2 === 1 ? (
                      <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-gray-800">
                        <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="sm:hidden ml-12">
                    {index % 2 === 1 ? (
                      <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-gray-800">
                        <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase with Before/After - Fixed Layout */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Proyectos destacados</h2>

          <div className="space-y-24">
            {/* Project 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">PROYECTO DESTACADO</div>
                <h3 className="text-2xl font-bold mb-4">Estuco veneciano en Calafell</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Aplicación de estuco veneciano en tonos tierra para el salón principal de una vivienda, creando un
                  ambiente elegante y atemporal.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">Desafío:</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Los propietarios querían un acabado lujoso pero cálido, que complementara su mobiliario de estilo
                      clásico y aportara profundidad visual al espacio.
                    </p>
                  </div>
                  <div>
                    <div className="font-medium">Solución:</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Desarrollamos un estuco veneciano personalizado en tonos tierra con sutiles matices dorados,
                      aplicado en múltiples capas para crear profundidad y movimiento.
                    </p>
                  </div>
                  <div>
                    <div className="font-medium">Resultado:</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Un espacio transformado que combina elegancia atemporal con calidez, creando un ambiente acogedor
                      que realza la arquitectura de la estancia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square relative bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden w-full">
                    <Image
                      src="/placeholder.svg?height=600&width=600&query=living room before venetian plaster application"
                      alt="Antes - Estuco veneciano"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs">ANTES</div>
                  </div>
                  <div className="aspect-square relative bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden w-full">
                    <Image
                      src="/placeholder.svg?height=600&width=600&query=luxury living room with venetian plaster accent wall"
                      alt="Después - Estuco veneciano"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs">DESPUÉS</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gray-800 dark:border-white -z-10"></div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square relative bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden w-full">
                    <Image
                      src="/placeholder.svg?height=600&width=600&query=restaurant wall before rust effect application"
                      alt="Antes - Efecto óxido"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs">ANTES</div>
                  </div>
                  <div className="aspect-square relative bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden w-full">
                    <Image
                      src="/placeholder.svg?height=600&width=600&query=restaurant with rust effect decorative walls"
                      alt="Después - Efecto óxido"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs">DESPUÉS</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gray-800 dark:border-white -z-10"></div>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">PROYECTO DESTACADO</div>
                <h3 className="text-2xl font-bold mb-4">Efecto óxido en restaurante</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Creación de paredes con efecto óxido para un restaurante de estilo industrial en Tarragona,
                  complementando la decoración y el concepto gastronómico.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">Desafío:</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Los propietarios buscaban un acabado único que destacara la estructura del restaurante y aportara
                      un toque de industrialismo sin perder la funcionalidad.
                    </p>
                  </div>
                  <div>
                    <div className="font-medium">Solución:</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Implementamos una técnica de efecto óxido que simulaba la apariencia de metal oxidado, combinando
                      texturas rugosas con tonos de gris metálico para crear un acabado distintivo.
                    </p>
                  </div>
                  <div>
                    <div className="font-medium">Resultado:</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Las paredes del restaurante adquirieron un aspecto único que atraía la atención y se integraba
                      perfectamente con el resto de la decoración, creando una experiencia visual memorable para los
                      clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
