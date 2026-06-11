import express from 'express';
import { IntegrationController } from '../controllers/integration.controller.js';
import { roleMiddleware } from '../../middleware/auth.middleware.js';

const router = express.Router();

router.get('/status', IntegrationController.getIntegrationStatus);
router.post('/sync-orders', IntegrationController.syncOrdersFromPlatforms);
router.post('/connect/:platform', IntegrationController.connectPlatform);
router.post('/disconnect/:platform', IntegrationController.disconnectPlatform);
router.get('/webhooks/:platform', roleMiddleware(['admin']), IntegrationController.getWebhookStatus);

export default router;
