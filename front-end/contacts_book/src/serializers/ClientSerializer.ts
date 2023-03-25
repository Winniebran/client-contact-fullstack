import * as z from "zod";

export const registerClientSerializer = z
  .object({
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
    confirmPassword: z.string(),
    email: z.string().trim().email("Invalid email format").min(10),
    cellPhone: z.string().trim().min(11),
    image: z.string().trim().nullish(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginClientSerializer = z.object({
  email: z.string().trim().nonempty("Email is required").email("Invalid email format"),
  password: z.string().trim().nonempty("Password is required"),
});
