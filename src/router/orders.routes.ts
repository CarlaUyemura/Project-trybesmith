import { Router } from 'express';
import OrderController from '../controller/order.controller';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAllOrders.bind(orderController));

export default orderRouter;