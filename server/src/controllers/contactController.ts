import { Request, Response } from 'express';
import { contactSchema, ContactFormData } from '../validation/contactSchema';
import { emailService } from '../services/emailService';
import { Contact } from '../models/Contact';
import { ZodError } from 'zod';

/**
 * Contact Controller
 * Handles contact form submissions
 */

/**
 * @route   POST /api/contact
 * @desc    Submit contact form
 * @access  Public
 */
export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request body
    const validatedData: ContactFormData = contactSchema.parse(req.body);

    // Capture additional metadata
    const ipAddress = req.ip || req.headers['x-forwarded-for'] || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    // Auto-generate subject from projectType if not provided
    const subject =
      validatedData.subject ||
      (validatedData.projectType
        ? `Inquiry: ${validatedData.projectType}`
        : 'General Inquiry');

    // Save to database FIRST
    const contact = await Contact.create({
      ...validatedData,
      subject,
      phone: validatedData.phone || undefined,
      projectType: validatedData.projectType || undefined,
      ipAddress,
      userAgent,
      status: 'new',
    });

    console.log(`✅ Contact saved to database: ${contact._id}`);

    // Try to send emails (non-blocking - don't fail if email service is unavailable)
    try {
      await emailService.sendContactNotification(validatedData);
      await emailService.sendAutoReply(validatedData);
    } catch (emailError) {
      console.warn('⚠️  Email sending failed, but contact was saved to database:', emailError);
      // Continue - don't fail the request just because email failed
    }

    // Success response
    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data: {
        id: contact._id,
        name: validatedData.name,
        email: validatedData.email,
      },
    });
  } catch (error) {
    // Handle validation errors
    if (error instanceof ZodError) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      });
      return;
    }

    // Handle database or unexpected errors
    console.error('❌ Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
};

/**
 * @route   GET /api/contact/health
 * @desc    Check contact service health
 * @access  Public
 */
export const checkContactHealth = async (req: Request, res: Response): Promise<void> => {
  try {
    const isEmailServiceHealthy = await emailService.verifyConnection();

    res.status(isEmailServiceHealthy ? 200 : 503).json({
      success: isEmailServiceHealthy,
      service: 'contact',
      email: isEmailServiceHealthy ? 'ready' : 'unavailable',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(503).json({
      success: false,
      service: 'contact',
      email: 'error',
      timestamp: new Date().toISOString(),
    });
  }
};
