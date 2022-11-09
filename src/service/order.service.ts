import { Order } from '../interface/order';
import OrderModel from '../models/order.model';

export default class OrderService {
  constructor(private orderModel = new OrderModel()) {}

  async getAllOrders():Promise<Order[]> {
    const orders = await this.orderModel.getAllOrders();
    return orders;
  }
}