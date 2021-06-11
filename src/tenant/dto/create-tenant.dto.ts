import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateTenantDto {
  @IsString()
  userName: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;
}
