import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoriesRepo: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoriesRepo.find({ relations: ['tenant'] });
  }

  async findOne(id: number) {
    const category = await this.categoriesRepo.findOne(id, {
      relations: ['tenant'],
    });

    if (!category) throw new NotFoundException();
    return category;
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
    return await this.categoriesRepo.delete(id);
  }
}
