import { PartialType } from '@nestjs/swagger';
import { CreateTenantDto } from './create-tenant.dto';

export class EditTenantDto extends PartialType(CreateTenantDto) {}
