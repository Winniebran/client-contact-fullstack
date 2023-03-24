import { z } from "zod";

export const createLoginSerializer = z.object({
  email: z.string().email("Invalid email format").min(10),
  password: z
    .string()
    .trim()
    .regex(/[A-Z]/, "Must contain a capital letter")
    .regex(/([a-z])/, "Must contain a lowercase")
    .regex(/(\d)/, "Must contain a number")
    .regex(/(\W)|_/, "Must contain a special character")
    .regex(/.{8,}/, "Must contain at least 8 characters"),
});
