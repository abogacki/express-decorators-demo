import { Express } from 'express';
import { StringController } from '../controllers/string-controller';

export const registerRoutes = (app: Express) => {
  app.get('/string/reverse', StringController.reverse);
};
