import * as z from "zod";

export const createContactSerializer = z.object({
  firstName: z.string().min(2).trim(),
  lastName: z.string().min(2).trim(),
  email: z.string().trim().email("Invalid email format").min(10),
  cellPhone: z.string().trim().min(11),
  image: z.string().trim().nullish(),
  type: z.string(),
});
