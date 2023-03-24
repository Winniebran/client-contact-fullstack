import { z } from "zod";

export const createContactSerializer = z.object({
  firstName: z.string().min(2).trim(),
  lastName: z.string().min(2).trim(),
  email: z.string().trim().email("Invalid email format").min(10),
  cellPhone: z.string().trim().min(11),
  image: z.string().trim().nullish(),
});

export const contactResponseSerializer = createContactSerializer.extend({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const listContacts = contactResponseSerializer.array();

export const updateContactSerializer = createContactSerializer.partial();
