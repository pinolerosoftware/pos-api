import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tenant } from '../entities/tenant.entity';

@Injectable()
export class TenantService {
  constructor(
    @InjectRepository(Tenant) private tenantsRepo: Repository<Tenant>,
  ) {}

  findAll() {
    return this.tenantsRepo.find();
  }

  findOne(id: number) {
    return this.tenantsRepo.findOne(id);
  }

  create(body: any) {
    const newProduct = this.tenantsRepo.create(body);
    return this.tenantsRepo.save(newProduct);
  }

  async update(id: number, body: any) {
    const product = await this.tenantsRepo.findOne(id);
    this.tenantsRepo.merge(product, body);
    return this.tenantsRepo.save(product);
  }

  async delete(id: number) {
    await this.tenantsRepo.delete(id);
    return true;
  }
}
