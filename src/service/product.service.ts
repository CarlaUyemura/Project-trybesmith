import ProductModel from '../models/product.model';

export default class ProductService {
  constructor(private productModel = new ProductModel()) {}

  async createProduct(name: string, amount: string) {
    const product = await this.productModel.createProduct(name, amount);
    return product;
  }
}