import { z } from "zod";

export const createTypeSerializer = z.object({
  name: z.string().min(2).trim(),
});

export const typeResponseSerializer = createTypeSerializer.extend({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const updateTypeSerializer = createTypeSerializer.partial();
