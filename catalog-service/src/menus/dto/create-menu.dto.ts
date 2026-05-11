import { IsString, Validate } from 'class-validator';
import { IsRelationship } from 'src/prisma/validator/IsRelationship.validator';

export class CreateMenuDTO {
  @IsString({
    message: 'El valor debe ser texto.',
  })
  name!: string;

  @Validate(IsRelationship, ['menu', 'id'], {
    message: 'El menú no existe, o es un id inválido.',
  })
  branch_id!: number;
}
