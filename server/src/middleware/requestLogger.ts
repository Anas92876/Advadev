import { Request, Response, NextFunction } from 'express';

/**
 * Request logging middleware
 * Logs all incoming requests with method, path, and response time
 */
export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const startTime = Date.now();

  // Log when response is finished
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.path} - ${res.statusCode} (${duration}ms)`;

    // Color-code based on status
    if (res.statusCode >= 500) {
      console.error(`❌ ${logMessage}`);
    } else if (res.statusCode >= 400) {
      console.warn(`⚠️  ${logMessage}`);
    } else {
      console.log(`✅ ${logMessage}`);
    }
  });

  next();
}
