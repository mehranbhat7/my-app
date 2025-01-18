import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UsersService) {}
  @Get()
  findAll(@Query('role') role?: 'Admin' | 'Mod' | 'Intern') {
    return this.UserService.findAll(role);
  }
  @Get('interns')
  findInterns() {
    return [];
  }
  @Get(':id')
  finone(@Param('id') id: string) {
    return this.UserService.finone(+id);
  }
  @Post()
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'Intern' | 'Admin' | 'Mod';
    },
  ) {
    return this.UserService.create(user);
  }
  @Patch(':id')
  updateusers(
    @Param('id') id: string,
    @Body()
    updatedUserw: {
      name?: string;
      email?: string;
      role?: 'Intern' | 'Admin' | 'Mod';
    },
  ) {
    return this.UserService.updateusers(+id, updatedUserw);
  }
  @Delete(':id')
  del(@Param('id') id: string) {
    return { id };
  }
}
