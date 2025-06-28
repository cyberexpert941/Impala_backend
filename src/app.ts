import express from 'express'; 
import cors from 'cors';
import { connectWithRetry } from './shared/db/connector/mongo_connector';
import router from './router';
import dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

// Load environment variables
dotenv.config();

const app = express();

// Configure middleware with increased limits
app.use(express.json({ 
  limit: '500mb'
}));
app.use(express.urlencoded({ 
  limit: '500mb', 
  extended: true
}));

// Increase the timeout for requests
app.use((req, res, next) => {
  req.setTimeout(300000); // 5 minutes
  res.setTimeout(300000); // 5 minutes
  next();
});

// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));
app.options('*', cors()); 

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Use absolute path to the public folder
app.use('/api/files', express.static(path.join(__dirname, '../public')));

// Also serve directly from 'public' folder at root URL
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
connectWithRetry();

// Use the router for API routes
app.use('/api/v1', router);

// Basic health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    message: 'API is running', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Default API route
app.get('/api/', (req, res) => {
  res.json({ message: 'Welcome to Star Moon Backend API' });
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Global error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});

 