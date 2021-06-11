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
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto, EditCategoryDto } from '../dto';
import { CategoryService } from '../services/category.service';

@ApiTags('Categories')
@Controller('category')
export class CategoryController {
  constructor(private categoriesService: CategoryService) {}

  @Get()
  getAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateCategoryDto) {
    return this.categoriesService.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: EditCategoryDto) {
    return this.categoriesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.delete(id);
  }
}
