// backend/routes/documentRoutes.js

import express from 'express';
// Update the import statement
import { authenticate } from '../middleware/authentication.js';
import { createDocument, getAllDocuments } from '../controllers/documentController.js';

const router = express.Router();

// Document routes
router.post('/create', authenticate, createDocument); // Create a new document
router.get('/documents', authenticate, getAllDocuments); // Get all documents

// Add other routes as needed

export default router;

