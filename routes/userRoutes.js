// backend/routes/userRoutes.js

import express from 'express';
import { register, login } from '../controllers/userController.js';
// import { checkAuthStatus } from '../controllers/authenticationController.js';
const router = express.Router();

// User routes
router.post('/register', register); // Register a new user
router.post('/login', login); // Login
// router.get('/check-auth', checkAuthStatus); // New route to check authentication status

export default router;
