import express, { Router } from 'express';
import { submitContactForm, checkContactHealth } from '../controllers/contactController';
import { rateLimiter } from '../middleware/rateLimiter';

const router: Router = express.Router();

/**
 * Contact Routes
 *
 * @route   POST /api/contact - Submit contact form
 * @route   GET /api/contact/health - Check contact service health
 */

// POST /api/contact - Submit contact form (with rate limiting)
router.post('/', rateLimiter, submitContactForm);

// GET /api/contact/health - Health check
router.get('/health', checkContactHealth);

export default router;
