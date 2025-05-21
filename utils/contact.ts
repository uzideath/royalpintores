export const handleContactClick = () => {
  const phoneNumber = "+34613962582" // Número de teléfono de Royal Pintores
  const message = "Hola, me gustaría solicitar un presupuesto para servicios de pintura." // Mensaje predefinido

  // Construir URL de WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Abrir URL en nueva pestaña o ventana
  window.open(url, "_blank")
}
