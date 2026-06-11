import express from 'express';
import { UserController } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/profile', UserController.getProfile);
router.put('/profile', UserController.updateProfile);
router.post('/avatar', UserController.uploadAvatar);
router.get('/stats', UserController.getUserStats);

export default router;
