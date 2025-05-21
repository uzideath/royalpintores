import { z } from "zod"

export const contactFormSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  telefono: z.string().min(9, {
    message: "El teléfono debe tener al menos 9 dígitos.",
  }),
  email: z
    .string()
    .email({
      message: "Por favor, introduce un email válido.",
    })
    .optional()
    .or(z.literal("")),
  ubicacion: z.string().optional().or(z.literal("")),
  servicio: z.enum(["interior", "exterior", "comercial", "decorativo"]),
  mensaje: z.string().optional().or(z.literal("")),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
