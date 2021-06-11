import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { CreateProductDto, EditProductDto } from '../dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('product')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  getAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateProductDto) {
    return this.productService.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: EditProductDto) {
    return this.productService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
