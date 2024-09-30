import { z } from "zod";

export const signUpZod = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Not a valid email"),
  }),
});
