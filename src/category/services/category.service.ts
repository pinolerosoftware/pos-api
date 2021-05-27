import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoriesRepo: Repository<Category>,
  ) {}

  findAll() {
    return this.categoriesRepo.find({
      relations: ['tenant'],
    });
  }

  findOne(id: number) {
    return this.categoriesRepo.findOne({where: {id}, relations: ['tenant']});
  }

  create(body: any) {
    const newProduct = this.categoriesRepo.create(body);
    return this.categoriesRepo.save(newProduct);
  }

  async update(id: number, body: any) {
    const product = await this.categoriesRepo.findOne(id);
    this.categoriesRepo.merge(product, body);
    return this.categoriesRepo.save(product);
  }

  async delete(id: number) {
    const product = await this.categoriesRepo.findOne(id);
    product.active = false;
    return true;
  }
}
