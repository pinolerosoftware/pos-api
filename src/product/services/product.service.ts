import { Injectable, Options } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepo.find({ relations: ['tenant', 'category'] });
  }

  findOne(id: number) {
    return this.productRepo.findOne({
      where: { id },
      relations: ['tenant', 'category'],
    });
  }

  create(body: any) {
    const newProduct = this.productRepo.create(body);
    return this.productRepo.save(newProduct);
  }

  async update(id: number, body: any) {
    const product = await this.productRepo.findOne(id);
    this.productRepo.merge(product, body);
    return this.productRepo.save(product);
  }

  async delete(id: number) {
    await this.productRepo.delete(id);
    return true;
  }
}
