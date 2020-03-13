import { Router } from 'express';
import multer from 'multer';

import FileController from './app/controllers/FileController';
import ProductController from './app/controllers/ProductController';
import StockController from './app/controllers/StockController';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.delete('/products/:id', ProductController.delete);

routes.post('/stock', StockController.store);
routes.put('/stock/:product_id', StockController.update);
routes.delete('/stock/:product_id', StockController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
