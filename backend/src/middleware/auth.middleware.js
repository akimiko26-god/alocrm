import jwt from 'jsonwebtoken';
import { AuthenticationError } from '../utils/errors.js';

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new AuthenticationError('No token provided');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (error) {
    if (error instanceof AuthenticationError) {
      res.status(401).json({ error: error.message });
    } else {
      res.status(401).json({ error: 'Invalid token' });
    }
  }
};

export const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.userRole)) {
      res.status(403).json({ error: 'Access denied' });
    } else {
      next();
    }
  };
};
