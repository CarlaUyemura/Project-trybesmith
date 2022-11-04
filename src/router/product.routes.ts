import { Router } from 'express';
import ProductController from '../controller/product.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', productController.createProduct.bind(productController));

export default productRouter;