import express from 'express';
import { singleProductInfo,removeProducts, addProduct ,listProducts } from '../controllers/productController.js';
import upload from '../middleware/multer.js';

const productRouter = express.Router();
productRouter.post('/add',upload.fields([{name : 'image1' , maxCount:1},{name : 'image3' , maxCount:1},{name : 'image2' , maxCount:1}]), addProduct);
productRouter.get('/list', listProducts);
productRouter.delete('/remove', removeProducts);
productRouter.get('/single', singleProductInfo);

export default productRouter;

