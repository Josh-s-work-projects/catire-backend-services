import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    full_name: string;
    
    @IsString()
    @IsNotEmpty()
    role_id:       number;

    @IsString()
    @IsNotEmpty()
    full_name:     String;

    @IsString()
    @IsNotEmpty()
    email:         String @unique;

    @IsString()
    @IsNotEmpty()
    dni:           number;

    @IsString()
    @IsNotEmpty()
    phone_1:       String

    @IsString()
    @IsNotEmpty()
    phone_2:       String?
    
    @IsString()
    @IsNotEmpty()
    password: string;
}