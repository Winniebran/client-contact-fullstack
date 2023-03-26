import * as z from "zod";

export const createTypeSerializer = z.object({
  name: z.string().min(3).trim(),
});
