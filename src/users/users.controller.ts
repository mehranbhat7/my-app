import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
  finone(@Param('id', ParseIntPipe) id: number) {
    return this.UserService.finone(id);
  }
  @Post()
  create(
    @Body(ValidationPipe)
    user: CreateUserDto,
  ) {
    return this.UserService.create(user);
  }
  @Patch(':id')
  updateusers(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    updatedUserw: UpdateUserDto,
  ) {
    return this.UserService.updateusers(id, updatedUserw);
  }
  @Delete(':id')
  del(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
