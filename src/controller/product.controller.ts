import { Request, Response } from 'express';
import ProductService from '../service/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  async createProduct(req: Request, res: Response): Promise<void> {
    const { name, amount } = req.body;
    const result = await this.productService.createProduct(name, amount);
    res.status(201).json(result);
  }
}