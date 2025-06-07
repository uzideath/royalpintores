import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Royal Pintores | Servicios Profesionales de Pintura",
  description: "Servicios profesionales de pintura en El Vendrell, Tarragona, Barcelona y alrededores",
  generator: "Next.js",
  applicationName: "Royal Pintores",
  referrer: "origin-when-cross-origin",
  keywords: [
    "pintores profesionales",
    "servicios de pintura",
    "pintura interior",
    "pintura exterior",
    "Royal Pintores",
    "El Vendrell",
    "Tarragona",
    "Barcelona",
  ],
  authors: [{ name: "Royal Pintores" }],
  creator: "Royal Pintores",
  publisher: "Royal Pintores",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
