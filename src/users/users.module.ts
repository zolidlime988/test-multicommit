import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { User } from './dtos/users.dto';
import { UsersService } from './users.service';

@Module({
  imports:[TypeOrmModule.forFeature([User])] ,
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
