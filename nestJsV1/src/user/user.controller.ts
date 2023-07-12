import { Controller, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { UserService } from './user.services';
import { User } from './user.interfaces';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUser() {
        return this.userService.getUser();
    }

    @Post()
    postUser(@Body() data: User) {
        return this.userService.postUser(data);
    }

    @Delete()
    deleteUser(@Body() data) {
        const { id } = data
        return this.userService.deleteUser(id);
    }

    @Put()
    updateUser(@Body() data) {
        return this.userService.updateUser(data);
    }
}
