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
import { CreateTenantDto } from '../dto/create-tenant.dto';
import { EditTenantDto } from '../dto/edit-tenant.dto';
import { TenantService } from '../services/tenant.service';
@ApiTags('Tenants')
@Controller('tenant')
export class TenantController {
  constructor(private tenantService: TenantService) {}

  @Get()
  getAll() {
    return this.tenantService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.tenantService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateTenantDto) {
    return this.tenantService.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: EditTenantDto) {
    return this.tenantService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tenantService.delete(id);
  }
}
