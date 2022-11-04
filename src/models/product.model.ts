import { ResultSetHeader } from 'mysql2';
import { ProductId } from '../interface/product';
import mysql from './connection';

export default class ProductModel {
  private connection = mysql;
  
  async createProduct(name: string, amount: string): Promise<ProductId> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const newProduct = {
      id: insertId,
      name,
      amount,
    };
    return newProduct;
  }
}