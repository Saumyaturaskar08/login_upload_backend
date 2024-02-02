import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/keys.js';

export const authenticate = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error.name); // Log the name of the error for debugging
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

//  default authenticate;

