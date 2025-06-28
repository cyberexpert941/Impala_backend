import mongoose from 'mongoose';

// MongoDB connection options
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 20000, // Increased timeout
  socketTimeoutMS: 45000,
  family: 4  // Use IPv4, skip trying IPv6
};

// Default to local MongoDB, but allow override via environment variable
// const MONGODB_URI = "mongodb://localhost:27017/impala_db";
const MONGODB_URI = "mongodb://ecom_user:abcd1234@20.193.136.174:27017/impala_db";

// Connect to MongoDB with retry logics
export const connectWithRetry = async (): Promise<void> => {
  console.log("MONGODB_URI", MONGODB_URI);
  if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined.');
    return; // Exit if the URI is not defined
  }
  
  try {
    await mongoose.connect(MONGODB_URI, mongooseOptions);
    console.log('Successfully connected to MongoDB.');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    console.log('Retrying connection in 5 seconds...');
    setTimeout(connectWithRetry, 5000);
  }
};

// Handle connection errors after initial connection
mongoose.connection.on('error', (err: Error) => {
  console.error('MongoDB connection error:', err);
  setTimeout(connectWithRetry, 5000);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected. Attempting to reconnect...');
  setTimeout(connectWithRetry, 5000);
});

// Graceful connection close
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  } catch (err) {
    console.error('Error closing MongoDB connection:', err);
    process.exit(1);
  }
});

  