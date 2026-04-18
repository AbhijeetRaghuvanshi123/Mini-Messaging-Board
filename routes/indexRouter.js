import { Router } from 'express';
import { home, newMessage, addNewMessage, viewMessage } from '../controllers/indexController.js';

const indexRouter = Router();

indexRouter.get('/', home);
indexRouter.get('/view', viewMessage)
indexRouter.get('/new', newMessage);
indexRouter.post('/new', addNewMessage);

export { indexRouter };