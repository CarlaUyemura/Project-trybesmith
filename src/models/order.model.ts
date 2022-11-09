import { RowDataPacket } from 'mysql2';
import { Order } from '../interface/order';
import mysql from './connection';

export default class OrderModel {
  private connection = mysql;

  async getAllOrders(): Promise<Order[]> {
    const [rows] = await this.connection.execute<(Order[] & RowDataPacket[])>(
      `SELECT Orders.id, Orders.userId, JSON_ARRAYAGG(Products.id) AS productsIds
          FROM Trybesmith.Orders
          INNER JOIN Trybesmith.Products ON Products.orderId = Orders.id
          GROUP BY Orders.id`);
    return rows;
  }
}