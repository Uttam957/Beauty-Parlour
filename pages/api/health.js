// pages/api/health.js
// Health check API endpoint to test server status and MongoDB connectivity
import dbConnect from '../../lib/mongodb';

export default async function handler(req, res) {
  // Ensure only GET requests are allowed
  if (req.method !== 'GET') {
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }

  try {
    // Attempt connecting to the database using the cached Mongoose helper
    await dbConnect();
    return res.status(200).json({ status: 'ok', database: 'connected' });
  } catch (error) {
    // Return connection error details if MongoDB is unavailable
    return res.status(500).json({
      status: 'error',
      database: 'disconnected',
      error: error.message,
    });
  }
}
