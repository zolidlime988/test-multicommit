import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsOptionalEmail } from "../decorators/email.decorator";

@Entity()
export class User {
   @PrimaryGeneratedColumn() 
   id: number;
   @Column() 
   email: string;
   @Column() 
   password: string;
   @Column({default: true})
   isActive: boolean;
}

@Entity()
export class UserResponse {
   email: string;
   isActive: boolean;
}

export class SignupUserDTO {

   @IsNotEmpty()
   @IsOptionalEmail()
   email: string;

   @IsNotEmpty()
   @IsString()
   password: string;

}

export class GetUsers {

   @IsOptionalEmail()
   email: string;

   @IsOptional()
   @IsInt()
   id: number;
   
}