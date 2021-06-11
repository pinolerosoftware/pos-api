import { IsNumber, IsString, IsEnum } from 'class-validator';
import { EnumToString } from 'src/helpers/EnumToString';
import { TypeEnum } from '../enums';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  category: number;

  @IsNumber()
  tenant: number;

  @IsString()
  description: string;

  @IsEnum(TypeEnum, {
    message: `Invalid Option. The correct values are ${EnumToString(TypeEnum)}`,
  })
  type: TypeEnum;
}
