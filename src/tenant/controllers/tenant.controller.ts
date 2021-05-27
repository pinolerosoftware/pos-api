import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TenantService } from '../services/tenant.service';

@Controller('tenant')
export class TenantController {
  constructor(private tenantService: TenantService) {}

  @Get()
  getAll() {
    return this.tenantService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    console.log(id);
    return this.tenantService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.tenantService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.tenantService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.tenantService.delete(id);
  }
}
