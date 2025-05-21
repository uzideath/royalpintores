import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 lg:gap-16">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            LO QUE DICEN
            <br />
            NUESTROS CLIENTES
          </h2>
          <div className="max-w-md lg:text-right">
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Nuestra reputación se basa en la satisfacción del cliente. Escucha directamente de propietarios y empresas
              que han experimentado nuestro compromiso con la calidad y el servicio.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-gray-800 dark:border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors rounded-full"
            >
              Contáctanos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {[
            {
              image: "/placeholder.svg?height=600&width=450&query=professional woman homeowner",
              quote:
                "Royal Pintores transformó nuestro hogar en El Vendrell con una atención excepcional al detalle. Su equipo fue profesional, puntual, y la calidad del trabajo superó nuestras expectativas. Hemos recibido innumerables elogios por nuestro nuevo interior.",
              name: "Sara Martínez",
              role: "Propietaria en El Vendrell",
            },
            {
              image: "/placeholder.svg?height=600&width=450&query=business owner in office",
              quote:
                "Como administrador de propiedades comerciales en Tarragona, he trabajado con muchos contratistas de pintura, pero Royal Pintores destaca sobre el resto. Su equipo completó la renovación de nuestra oficina a tiempo y con mínima interrupción para nuestras operaciones comerciales.",
              name: "Miguel Rodríguez",
              role: "Administrador de Propiedades en Tarragona",
            },
          ].map((testimonial, index) => (
            <div key={index} className="space-y-6">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt="Retrato de testimonio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <blockquote className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                  {testimonial.quote}
                </blockquote>
                <div>
                  <div className="text-xl font-semibold">{testimonial.name}</div>
                  <div className="text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
