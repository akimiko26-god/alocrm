import express from 'express';
import { ChatController } from '../controllers/chat.controller.js';

const router = express.Router();

router.get('/rooms', ChatController.getUserChatRooms);
router.get('/room/:roomId/messages', ChatController.getRoomMessages);
router.post('/room', ChatController.createChatRoom);
router.delete('/room/:roomId', ChatController.deleteChatRoom);

export default router;
