"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const projectImages = [
  {
    src: "/modern-living-room-painting.jpeg",
    alt: "Proyecto de Pintura Interior",
  },
  {
    src: "/exterior-house-painting.jpeg",
    alt: "Proyecto de Pintura Exterior",
  },
  {
    src: "/placeholder-1o6nn.jpeg",
    alt: "Proyecto de Pintura Comercial",
  },
]

export default function MainSection() {
  return (
    <section id="main" className="pt-24 sm:pt-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Project Images Grid/Slider */}
        <div id="picture-slider" className="mb-8 sm:mb-16">
          {/* Mobile Slider */}
          <div className="sm:hidden">
            <Swiper modules={[Pagination]} spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}>
              {projectImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-[4/3] relative bg-gray-200 dark:bg-gray-900">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop/Tablet Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] relative bg-gray-200 dark:bg-gray-900">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-16 sm:mb-32">
          <div className="text-sm mb-4 text-gray-600 dark:text-gray-400">(BIENVENIDO A ROYAL PINTORES)</div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
            SERVICIOS <span className="font-serif italic font-normal">premium</span>
            <br className="hidden sm:block" /> DE PINTURA
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
            <p className="max-w-md text-gray-600 dark:text-gray-400">
              Transformando espacios con artesanía excepcional. Especialistas en servicios de pintura interior, exterior
              y comercial en El Vendrell, Tarragona, Barcelona y alrededores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-gray-800 dark:border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                Solicitar presupuesto <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+34613962582"
                className="inline-flex items-center gap-2 border border-gray-800 dark:border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors sm:hidden"
              >
                <Phone className="w-4 h-4" /> Llamar ahora
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="mb-16 sm:mb-32">
          <p className="max-w-md mb-8 sm:mb-16 text-gray-600 dark:text-gray-400">
            Con años de experiencia, damos vida a tu visión con pinturas premium y técnicas expertas, creando resultados
            hermosos y duraderos para tu propiedad en toda la costa catalana.
          </p>

          <div className="space-y-4 sm:space-y-6">
            {[
              { title: "PINTURA INTERIOR", href: "/servicios/pintura-interior" },
              { title: "PINTURA EXTERIOR", href: "/servicios/pintura-exterior" },
              { title: "SERVICIOS COMERCIALES", href: "/servicios/comercial" },
              { title: "ACABADOS DECORATIVOS", href: "/servicios/acabados-decorativos" },
            ].map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 sm:py-6 border-t border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-lg sm:text-xl">{service.title}</h3>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Explorar <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Exhibition Image */}
        <div className="aspect-[16/9] relative bg-gray-200 dark:bg-gray-900 mb-16 sm:mb-32">
          <Image
            src="/paint.png"
            alt="Muestra de Pintura Profesional"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
