import express from 'express';
import { singleProductInfo,removeProducts, addProduct ,listProducts } from '../controllers/productController.js';

const productRouter = express.Router();
productRouter.post('/add', addProduct);
productRouter.get('/list', listProducts);
productRouter.delete('/remove', removeProducts);
productRouter.get('/single', singleProductInfo);

export default productRouter;

