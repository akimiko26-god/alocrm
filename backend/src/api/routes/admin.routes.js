import express from 'express';
import { AdminController } from '../controllers/admin.controller.js';
import { roleMiddleware } from '../../middleware/auth.middleware.js';

const router = express.Router();

router.use(roleMiddleware(['admin', 'dev']));

router.get('/dashboard', AdminController.getDashboard);
router.get('/users', AdminController.getAllUsers);
router.get('/users/:id', AdminController.getUserDetails);
router.patch('/users/:id/role', AdminController.updateUserRole);
router.delete('/users/:id', AdminController.deleteUser);
router.get('/orders', AdminController.getAllOrders);
router.get('/analytics', AdminController.getAnalytics);
router.post('/support/create', AdminController.createSupportTicket);
router.get('/support', AdminController.getSupportTickets);
router.patch('/support/:id', AdminController.updateSupportTicket);

export default router;
