import { MapPin } from "lucide-react"

const locations = [
  "El Vendrell",
  "Coma Ruga",
  "El Francás",
  "Torredembarra",
  "Calafell",
  "Segur Calafell",
  "Cunit",
  "Cubelles",
  "Vilanova i la Geltrú",
  "Sitges",
  "Sant Pere de Ribes",
  "Creixell",
  "Roda de Bará",
  "Tarragona",
  "Reus",
  "Salou",
  "Cambrils",
  "Altafulla",
  "Barcelona",
]

export default function LocationsSection() {
  return (
    <section id="locations" className="py-16 sm:py-32 px-4 sm:px-6 bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 lg:gap-16">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            ZONAS DE
            <br />
            SERVICIO
          </h2>
          <div className="max-w-md lg:text-right">
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Ofrecemos nuestros servicios profesionales de pintura en toda la costa catalana, desde Barcelona hasta
              Tarragona. Consulta nuestra lista de ubicaciones donde trabajamos habitualmente.
            </p>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 border border-gray-300 dark:border-gray-800 rounded-md"
            >
              <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span>{location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
