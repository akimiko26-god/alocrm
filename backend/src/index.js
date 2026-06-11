import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import authRoutes from './api/routes/auth.routes.js';
import userRoutes from './api/routes/user.routes.js';
import orderRoutes from './api/routes/order.routes.js';
import serviceRoutes from './api/routes/service.routes.js';
import chatRoutes from './api/routes/chat.routes.js';
import adminRoutes from './api/routes/admin.routes.js';
import integrationRoutes from './api/routes/integration.routes.js';

import { errorHandler } from './middleware/error.middleware.js';
import { authMiddleware } from './middleware/auth.middleware.js';
import { ChatService } from './services/chat.service.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  },
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Public routes
app.use('/api/auth', authRoutes);

// Protected routes
app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/orders', authMiddleware, orderRoutes);
app.use('/api/services', authMiddleware, serviceRoutes);
app.use('/api/chat', authMiddleware, chatRoutes);
app.use('/api/integrations', authMiddleware, integrationRoutes);
app.use('/api/admin', authMiddleware, adminRoutes);

// Socket.io events
const chatService = new ChatService(io);
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    next(new Error('Authentication failed'));
  } else {
    next();
  }
});

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('join_room', (roomId) => {
    socket.join(roomId);
    socket.emit('room_joined', roomId);
  });

  socket.on('send_message', async (data) => {
    await chatService.handleMessage(data, socket, io);
  });

  socket.on('typing', (data) => {
    socket.to(data.roomId).emit('user_typing', { userId: data.userId });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 AloCRM Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV}`);
});

export default app;
