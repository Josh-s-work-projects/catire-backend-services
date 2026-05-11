import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateBranchDTO {
  @IsString()
  name!: string;

  @IsNumber()
  @Min(-180)
  @Max(180)
  coordinates_long!: number;

  @IsNumber()
  @Min(-90)
  @Max(90)
  coordinates_lat!: number;
}
