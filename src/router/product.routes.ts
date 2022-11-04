import { Router } from 'express';
import ProductController from '../controller/product.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', productController.createProduct.bind(productController));
productRouter.get('/', productController.getAllProducts.bind(productController));

export default productRouter;