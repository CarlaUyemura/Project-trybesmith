import { ProductId } from '../interface/product';
import ProductModel from '../models/product.model';

export default class ProductService {
  constructor(private productModel = new ProductModel()) {}

  async createProduct(name: string, amount: string): Promise<ProductId> {
    const product = await this.productModel.createProduct(name, amount);
    return product;
  }

  async getAllProducts(): Promise<ProductId[]> {
    const products = await this.productModel.getAllProducts();
    return products;
  }
}