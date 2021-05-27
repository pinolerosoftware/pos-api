import { Module } from '@nestjs/common';
// Services
import { ProductService } from './services/product.service';
// Controllers
import { ProductsController } from './controllers/product.controller';
// TypeORM & Entities
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService],
  controllers: [ProductsController],
})
export class ProductModule {}
