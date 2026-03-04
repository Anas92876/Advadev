import rateLimit from 'express-rate-limit';

/**
 * Rate Limiter Middleware
 * Prevents spam and abuse of the contact form API
 *
 * Limits:
 * - 5 requests per 15 minutes per IP address
 * - Helps prevent spam and DoS attacks
 */
export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP. Please try again later.',
    retryAfter: '15 minutes',
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  // Skip rate limiting for health check endpoints
  skip: (req) => req.path.includes('/health'),
});
