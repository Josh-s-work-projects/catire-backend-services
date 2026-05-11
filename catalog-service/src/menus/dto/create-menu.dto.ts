import { IsString, Validate } from 'class-validator';
import { IsRelationship } from 'src/prisma/validator/IsRelationship.validator';

export class CreateMenuDTO {
  @IsString()
  name!: string;

  @Validate(IsRelationship, ['menu', 'id'])
  branch_id!: number;
}
