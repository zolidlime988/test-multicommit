import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { GetUsers, SignupUserDTO, User } from './dtos/users.dto';
import { ResponseType } from './responses/http';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {

   constructor(
      private readonly usersService: UsersService,
   ) {}

   @Post('signup')
   async signup(@Body() user: SignupUserDTO){
      const response = await this.usersService.register(user);
      return ResponseType.SuccessWithData(response)
   }

   @Get(':id')
   async getUser(@Param('id') id: number) {
      return id;
   }

   @Get()
   async getAllUsers(@Query() query: GetUsers) {
      return this.usersService.findAll();
   }

   @Patch(':id')
   async updateUser(@Param('id') id: number, @Body() user: SignupUserDTO) {
      return {id, user};
   }

   @Delete(':id')
   async deleteUser(@Param('id') id: number) {
      return id;
   }
}
