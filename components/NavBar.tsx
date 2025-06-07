"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6 transition-all duration-300 ${
        scrolled ? "bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Royal Pintores Logo"
            width={180}
            height={75}
            className="h-14 sm:h-16 w-auto"
          />
        </Link>
        <div className="hidden sm:flex items-center gap-4 sm:gap-8">
          <Link href="#services" className="hover:text-gray-600 dark:hover:text-gray-300">
            Servicios
          </Link>
          <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">
            Proyectos
          </Link>
          <Link href="#locations" className="hover:text-gray-600 dark:hover:text-gray-300">
            Zonas
          </Link>
          <Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">
            Contacto
          </Link>
          <ThemeToggle />
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+34613962582"
            className="flex items-center gap-2 border border-gray-800 dark:border-white px-3 py-1.5 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            <Phone className="w-4 h-4" /> 613 962 582
          </a>
        </div>
        <div className="sm:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="w-8 h-8 flex flex-col justify-center items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg py-4 px-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col space-y-4">
            <Link
              href="#services"
              className="py-2 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#projects"
              className="py-2 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="#locations"
              className="py-2 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Zonas
            </Link>
            <Link
              href="#contact"
              className="py-2 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <a
              href="tel:+34613962582"
              className="flex items-center gap-2 border border-gray-800 dark:border-white px-3 py-2 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors justify-center mt-2"
            >
              <Phone className="w-4 h-4" /> Llamar ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
