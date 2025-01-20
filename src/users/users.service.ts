import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      role: 'Mod',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      role: 'Intern',
    },
    {
      id: 4,
      name: 'Diana Prince',
      email: 'diana.prince@example.com',
      role: 'Mod',
    },
    {
      id: 5,
      name: 'Ethan Hunt',
      email: 'ethan.hunt@example.com',
      role: 'Admin',
    },
    {
      id: 6,
      name: 'Fiona Gallagher',
      email: 'fiona.gallagher@example.com',
      role: 'Intern',
    },
  ];

  findAll(role?: 'Intern' | 'Admin' | 'Mod') {
    if (role) {
      return this.users.filter((ele) => ele.role === role);
    }
    return this.users;
  }

  finone(id: number) {
    const user = this.users.find((ele) => ele.id === id);
    return user;
  }

  create(user: CreateUserDto) {
    const newID = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = { id: newID[0].id + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }
  updateusers(id: number, updatedUser: UpdateUserDto) {
    this.users = this.users.map((ele) => {
      if (ele.id === id) {
        return { ...ele, ...updatedUser };
      }
      return ele;
    });
    return this.finone(id);
  }
}
