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

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query('role') role?: 'intern' | 'admin' | 'mod') {
    return [];
  }

  @Get('interns')
  findInterns() {
    return [];
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post()
  create(@Body() user: {}) {
    return user;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedUser: {}) {
    return { id, ...updatedUser };
  }
  @Delete(':id')
  deleteed(@Param('id') id: string) {
    return { id };
  }
}
