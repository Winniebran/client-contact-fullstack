import { z } from "zod";
import { clientResponseSerializer, createClientSerializer } from "./client.serializer";
import { typeResponseSerializer } from "./type.serializer";

export const createContactSerializer = z.object({
  firstName: z.string().min(2).trim(),
  lastName: z.string().min(2).trim(),
  email: z.string().trim().email("Invalid email format").min(10),
  cellPhone: z.string().trim().min(11),
  image: z.string().trim().nullish(),
  type: z.string().uuid()
});

export const contactResponseSerializer: any = createContactSerializer.extend({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  type: typeResponseSerializer,
  client: clientResponseSerializer
});

export const updateContactSerializer = createContactSerializer.partial();
