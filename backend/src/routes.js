import { Router } from 'express';
import multer from 'multer';

import FileController from './app/controllers/FileController';
import ProductController from './app/controllers/ProductController';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
