import { IsString, Validate } from 'class-validator';
import { IsRelationship } from 'src/prisma/validator/IsRelationship.validator';

export class CreateMenuDTO {
  @IsString({
    message: 'name: El nombre debe ser texto.',
  })
  name!: string;

  @Validate(IsRelationship, ['menu', 'id'], {
    message: 'branch_id: El menú no existe, o es un id inválido.',
  })
  branch_id!: number;
}
