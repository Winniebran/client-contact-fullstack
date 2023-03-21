import { z } from "zod";

export const createClientSerializer = z.object({
  firstName: z.string().min(2).trim(),
  lastName: z.string().min(2).trim(),
  password: z
    .string()
    .trim()
    .regex(/[A-Z]/, "Must contain a capital letter")
    .regex(/([a-z])/, "Must contain a lowercase")
    .regex(/(\d)/, "Must contain a number")
    .regex(/(\W)|_/, "Must contain a special character")
    .regex(/.{8,}/, "Must contain at least 8 characters"),
  email: z.string().trim().email("Invalid email format").min(10),
  cellPhone: z.string().trim().min(11),
  image: z.string().trim().nullable(),
});

export const clientResponseSerializer = createClientSerializer
  .extend({
    id: z.string().uuid(),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
  })
  .omit({ password: true });

export const listClientsWithoutPassword = clientResponseSerializer.array();

export const updateClientSerializer = createClientSerializer.partial();
