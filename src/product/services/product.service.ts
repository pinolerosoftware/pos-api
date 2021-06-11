import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto, EditProductDto } from '../dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepo.find({ relations: ['tenant', 'category'] });
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOne(id, {
      relations: ['tenant', 'category'],
    });
    if (!product) throw new NotFoundException();

    return product;
  }

  async create(body: CreateProductDto) {
    const newProduct = await this.productRepo.create(body as any);
    return this.productRepo.save(newProduct);
  }

  async update(id: number, body: EditProductDto) {
    const product = await this.productRepo.findOne(id);
    if (!product) throw new NotFoundException('Product does not exist');
    this.productRepo.merge(product, body as any);
    return this.productRepo.save(product);
  }

  async delete(id: number) {
    return await this.productRepo.delete(id);
  }
}
