import { z } from 'zod';

/**
 * Contact form validation schema
 * Accepts the frontend form fields as-is.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .trim(),

  email: z
    .string()
    .email('Please provide a valid email address')
    .max(255, 'Email must not exceed 255 characters')
    .toLowerCase()
    .trim(),

  phone: z
    .string()
    .max(30, 'Phone number too long')
    .trim()
    .optional()
    .or(z.literal('')),

  // Subject is auto-generated in the controller from projectType
  subject: z
    .string()
    .max(200)
    .trim()
    .optional(),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must not exceed 2000 characters')
    .trim(),

  // Accept any string value — frontend uses its own labels
  projectType: z
    .string()
    .max(100)
    .trim()
    .optional()
    .or(z.literal('')),

  company: z
    .string()
    .max(100, 'Company name must not exceed 100 characters')
    .trim()
    .optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
