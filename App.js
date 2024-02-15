// backend/App.js

import express from 'express';
import userRoutes from './routes/userRoutes.js';
import documentRoutes from './routes/documentRoutes.js';
// import { authenticate } from './middleware/authentication.js';
import dotenv from "dotenv";
import connect from "./config/database.js";
import cors from 'cors';
//import { authenticate } from './middleware/authentication.js';

dotenv.config();

const app = express();
app.use(cors()); 
// Middleware
app.use(express.json());


// Database connection
connect();

// Add CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://login-portal-backendaz.onrender.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });

  // const PORT = process.env.PORT || 3001;
  // app.listen(PORT, () => {
  //     console.log(`Server is running on port ${PORT}`);
  // });

// Routes
app.use('/api/users', userRoutes);
app.use('/api/documents', documentRoutes);
//app.use('/api/auths',authenticate)

export default app;
