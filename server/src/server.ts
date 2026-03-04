import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';
import { requestLogger } from './middleware/requestLogger';
import { connectDatabase } from './config/database';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDatabase();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// ========================================
// MIDDLEWARE
// ========================================

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use(requestLogger);

// ========================================
// ROUTES
// ========================================

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Advadev API server is running',
    timestamp: new Date().toISOString()
  });
});

// API routes
import contactRoutes from './routes/contactRoutes';

app.use('/api/contact', contactRoutes);

// ========================================
// ERROR HANDLING
// ========================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path
  });
});

// Global error handler (must be last)
app.use(errorHandler);

// ========================================
// SERVER START
// ========================================

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════╗
║                                           ║
║   🚀 Advadev API Server                  ║
║                                           ║
║   Status: Running                         ║
║   Port: ${PORT}                            ║
║   Environment: ${process.env.NODE_ENV || 'development'}         ║
║                                           ║
╚═══════════════════════════════════════════╝
  `);
});

export default app;
