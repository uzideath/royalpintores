"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    ubicacion: "",
    mensaje: "",
    servicio: "interior",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Resetear el formulario después de 3 segundos
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        ubicacion: "",
        mensaje: "",
        servicio: "interior",
      })
    }, 3000)
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto mt-16 sm:mt-32 px-4 sm:px-6 pb-16">
      <div className="grid sm:grid-cols-2 gap-8 sm:gap-16 items-start">
        {/* Logo and Contact Info */}
        <div className="space-y-8">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/royal-pintores-logo.png"
              alt="Royal Pintores Logo"
              width={400}
              height={200}
              className="w-full max-w-md h-auto"
              priority
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-theme-primary">TRANSFORMA TU ESPACIO</h3>
            <p className="text-theme-secondary">
              ¿Listo para renovar tu hogar o negocio? Nuestro equipo de pintores profesionales ofrece resultados
              excepcionales con materiales premium y meticulosa atención al detalle en El Vendrell, Tarragona, Barcelona
              y alrededores.
            </p>

            <div className="max-w-sm">
              <a
                href="tel:+34613962582"
                className="inline-flex items-center gap-2 border border-theme px-4 py-2 hover:bg-theme-secondary transition-colors w-full justify-center text-theme-primary"
              >
                <Phone className="w-4 h-4" /> Llamar ahora: 613 962 582
              </a>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-theme-secondary" />
                <div>
                  <p className="font-medium text-theme-primary">Teléfono</p>
                  <a
                    href="tel:+34613962582"
                    className="text-theme-secondary hover:text-theme-primary transition-colors"
                  >
                    613 962 582
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-theme-secondary" />
                <div>
                  <p className="font-medium text-theme-primary">Email</p>
                  <a
                    href="mailto:info@royalpintores.com"
                    className="text-theme-secondary hover:text-theme-primary transition-colors"
                  >
                    info@royalpintores.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-theme-secondary" />
                <div>
                  <p className="font-medium text-theme-primary">Área de servicio</p>
                  <p className="text-theme-secondary">El Vendrell, Tarragona, Barcelona y alrededores</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-theme p-6 rounded-lg bg-card">
          <h3 className="text-xl font-bold mb-4 text-theme-primary">Solicitar Presupuesto</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium mb-1 text-theme-primary">
                Nombre*
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-ring text-foreground"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium mb-1 text-theme-primary">
                Teléfono*
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-ring text-foreground"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-theme-primary">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-ring text-foreground"
              />
            </div>

            <div>
              <label htmlFor="ubicacion" className="block text-sm font-medium mb-1 text-theme-primary">
                Ubicación
              </label>
              <input
                type="text"
                id="ubicacion"
                name="ubicacion"
                value={formData.ubicacion}
                onChange={handleChange}
                placeholder="¿Dónde se realizará el trabajo?"
                className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-ring text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-theme-primary">Tipo de servicio</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "interior", label: "Pintura Interior" },
                  { id: "exterior", label: "Pintura Exterior" },
                  { id: "comercial", label: "Comercial" },
                  { id: "decorativo", label: "Acabados Decorativos" },
                ].map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="radio"
                      id={option.id}
                      name="servicio"
                      value={option.id}
                      checked={formData.servicio === option.id}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor={option.id} className="text-sm text-theme-primary">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium mb-1 text-theme-primary">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                placeholder="Describe brevemente tu proyecto..."
                className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-ring text-foreground placeholder:text-muted-foreground"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitSuccess}
              className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-colors ${submitSuccess
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Enviando...</span>
                </>
              ) : submitSuccess ? (
                <>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>¡Enviado con éxito!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Solicitar presupuesto</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 sm:mt-32 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="text-sm text-theme-secondary">Navegación</div>
          {["Servicios", "Proyectos", "Zonas", "Contacto"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-theme-primary transition-colors text-theme-secondary"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="space-y-4">
          <div className="text-sm text-theme-secondary">Servicios</div>
          {["Pintura Interior", "Pintura Exterior", "Comercial", "Acabados Especiales"].map((item) => (
            <Link
              key={item}
              href="#services"
              className="block hover:text-theme-primary transition-colors text-theme-secondary"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="space-y-4 md:col-span-2">
          <div className="text-sm text-theme-secondary">Conecta</div>
          <div className="flex gap-4">
            <a href="tel:+34613962582" className="hover:text-theme-primary transition-colors text-theme-secondary">
              Teléfono
            </a>
            <a
              href="mailto:info@royalpintores.com"
              className="hover:text-theme-primary transition-colors text-theme-secondary"
            >
              Email
            </a>
            <a
              href="https://wa.me/34613962582"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme-primary transition-colors text-theme-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-16 flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-theme">
        <div className="text-sm text-theme-secondary mb-4 sm:mb-0">
          © 2023 Royal Pintores. Todos los derechos reservados.
        </div>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-theme-primary transition-colors text-theme-secondary">
            Política de Privacidad
          </Link>
          <Link href="#" className="hover:text-theme-primary transition-colors text-theme-secondary">
            Términos de Servicio
          </Link>
        </div>
      </div>
    </section>
  )
}
