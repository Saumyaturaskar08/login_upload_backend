import dotenv from 'dotenv';
import express from 'express';
import app from './App.js';

dotenv.config();

const port = process.env.PORT || 3002;

// Create an instance of the Express app
const server = express();

// Content Security Policy middleware
server.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; font-src 'self' http://localhost:3000;");
  next();
});

// Use the app routes and middleware
server.use(app);

// Start the server
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
 console.log(`Example app listening on port ${port}`);

});