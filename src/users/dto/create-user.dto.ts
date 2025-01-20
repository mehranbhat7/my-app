export class CreateUserDto {
  name: string;
  email: string;
  role: 'Intern' | 'Admin' | 'Mod';
}
