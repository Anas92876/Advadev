import { ContactFormData } from '../validation/contactSchema';

// Use require for nodemailer due to CommonJS compatibility
const nodemailerModule = require('nodemailer');
const nodemailer = nodemailerModule.default || nodemailerModule;
type Transporter = any;

/**
 * Email Service for sending contact form submissions
 * Handles email configuration and sending logic
 */
class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  /**
   * Verify email service connection
   */
  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('✅ Email service is ready to send messages');
      return true;
    } catch (error) {
      console.error('❌ Email service verification failed:', error);
      return false;
    }
  }

  /**
   * Send contact form notification email to admin
   */
  async sendContactNotification(data: ContactFormData): Promise<void> {
    const adminEmail = process.env.ADMIN_EMAIL || 'hello@advadev.com';
    const fromEmail = process.env.SMTP_FROM || 'noreply@advadev.com';

    const htmlContent = this.generateContactEmailHTML(data);
    const textContent = this.generateContactEmailText(data);

    try {
      await this.transporter.sendMail({
        from: `Advadev Contact Form <${fromEmail}>`,
        to: adminEmail,
        replyTo: data.email,
        subject: `New Contact Form Submission: ${data.subject}`,
        text: textContent,
        html: htmlContent,
      });

      console.log(`✅ Contact notification sent for: ${data.email}`);
    } catch (error) {
      console.error('❌ Failed to send contact notification:', error);
      throw new Error('Failed to send email notification');
    }
  }

  /**
   * Send auto-reply to the person who submitted the form
   */
  async sendAutoReply(data: ContactFormData): Promise<void> {
    const fromEmail = process.env.SMTP_FROM || 'noreply@advadev.com';

    const htmlContent = this.generateAutoReplyHTML(data);
    const textContent = this.generateAutoReplyText(data);

    try {
      await this.transporter.sendMail({
        from: `Advadev <${fromEmail}>`,
        to: data.email,
        subject: `Thank you for contacting Advadev`,
        text: textContent,
        html: htmlContent,
      });

      console.log(`✅ Auto-reply sent to: ${data.email}`);
    } catch (error) {
      console.error('❌ Failed to send auto-reply:', error);
      // Don't throw error for auto-reply failures
    }
  }

  /**
   * Generate HTML email content for admin notification
   */
  private generateContactEmailHTML(data: ContactFormData): string {
    return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #667eea; display: block; margin-bottom: 5px; }
    .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #667eea; }
    .footer { text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      ${data.company ? `
      <div class="field">
        <span class="label">Company:</span>
        <div class="value">${data.company}</div>
      </div>
      ` : ''}
      ${data.phone ? `
      <div class="field">
        <span class="label">Phone:</span>
        <div class="value">${data.phone}</div>
      </div>
      ` : ''}
      <div class="field">
        <span class="label">Subject:</span>
        <div class="value">${data.subject}</div>
      </div>
      ${data.projectType ? `
      <div class="field">
        <span class="label">Project Type:</span>
        <div class="value">${data.projectType}</div>
      </div>
      ` : ''}
      ${data.budget ? `
      <div class="field">
        <span class="label">Budget:</span>
        <div class="value">${data.budget}</div>
      </div>
      ` : ''}
      <div class="field">
        <span class="label">Message:</span>
        <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="footer">
        <p>This email was sent from the Advadev contact form</p>
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();
  }

  /**
   * Generate plain text email for admin notification
   */
  private generateContactEmailText(data: ContactFormData): string {
    return `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}
${data.phone ? `Phone: ${data.phone}` : ''}
Subject: ${data.subject}
${data.projectType ? `Project Type: ${data.projectType}` : ''}
${data.budget ? `Budget: ${data.budget}` : ''}

Message:
${data.message}

---
This email was sent from the Advadev contact form
    `.trim();
  }

  /**
   * Generate HTML auto-reply
   */
  private generateAutoReplyHTML(data: ContactFormData): string {
    return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
    .message { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting Advadev</h1>
    </div>
    <div class="content">
      <div class="message">
        <p>Hi ${data.name},</p>
        <p>Thank you for reaching out to us! We've received your message and one of our team members will get back to you within 24-48 hours.</p>
        <p><strong>Your message:</strong></p>
        <p style="background: #f8f9fa; padding: 15px; border-left: 3px solid #667eea; margin: 15px 0;">
          ${data.message.replace(/\n/g, '<br>')}
        </p>
        <p>In the meantime, feel free to explore our <a href="https://advadev.com/portfolio">portfolio</a> or check out our latest <a href="https://advadev.com/blog">blog posts</a>.</p>
        <p>Best regards,<br>The Advadev Team</p>
      </div>
      <div class="footer">
        <p>Advadev - Transforming Ideas Into Digital Excellence</p>
        <p><a href="https://advadev.com">Visit our website</a></p>
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();
  }

  /**
   * Generate plain text auto-reply
   */
  private generateAutoReplyText(data: ContactFormData): string {
    return `
Hi ${data.name},

Thank you for reaching out to us! We've received your message and one of our team members will get back to you within 24-48 hours.

Your message:
${data.message}

In the meantime, feel free to explore our portfolio or check out our latest blog posts at https://advadev.com.

Best regards,
The Advadev Team

---
Advadev - Transforming Ideas Into Digital Excellence
https://advadev.com
    `.trim();
  }
}

// Export singleton instance
export const emailService = new EmailService();
