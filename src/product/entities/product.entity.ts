import { Category } from '../../category/entities/category.entity';
import { Tenant } from '../../tenant/entities/tenant.entity';
import { TypeEnum } from '../enums';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @ManyToOne((type) => Category)
  @JoinColumn({ name: 'categories_id' })
  category: Category;

  @ManyToOne((type) => Tenant)
  @JoinColumn({ name: 'tenants_id' })
  tenant: Tenant;

  @Column()
  description: string;

  @Column({ default: TypeEnum.Stock })
  Type?: TypeEnum;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn({
    name: 'creation_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
  })
  deletedAt?: Date;
}
