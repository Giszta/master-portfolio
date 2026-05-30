import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "validation_name_min")
    .max(60, "validation_name_max"),
  email: z
    .string()
    .email("validation_email_invalid"),
  subject: z
    .string()
    .min(3, "validation_subject_min")
    .max(100, "validation_subject_max"),
  message: z
    .string()
    .min(10, "validation_message_min")
    .max(2000, "validation_message_max"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
