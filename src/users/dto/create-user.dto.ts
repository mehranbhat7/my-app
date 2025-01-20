import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsEnum(['Intern', 'Admin', 'Mod'], {
    message: 'This role does"nt exist',
  })
  role: 'Intern' | 'Admin' | 'Mod';
}
