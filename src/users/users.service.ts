import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignupUserDTO, User } from './dtos/users.dto';

@Injectable()
export class UsersService {
   constructor(
      @InjectRepository(User) private usersRepo: Repository<User>
   ) {}

   async findAll(): Promise<User[]> {
      return this.usersRepo.find();
   }
   
   async register(user: SignupUserDTO) {

      const returnVal = await this.usersRepo.save(user)
      .then((val) => { return { email: val.email, id: val.id, isActive: val.isActive } })
      .catch((err) => { throw err; })

      return returnVal;
   }
}
