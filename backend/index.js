// This file serves as the entry point for Vercel serverless functions
import app from "./api/index.js";

// Export the Express app as a Vercel serverless function
export default async (req, res) => {
  // If the request is for /api, let the Express app handle it
  if (req.url.startsWith('/api')) {
    return app(req, res);
  }
  
  // For any other route, return a 404
  res.status(404).json({ error: 'Not found' });
};
