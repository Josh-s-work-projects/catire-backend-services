import { PartialType } from '@nestjs/mapped-types';
import { CreateBranchDTO } from 'src/branches/dto/create-branch.dto';

export class UpdateMenuDTO extends PartialType(CreateBranchDTO) {}
