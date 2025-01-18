import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from '@nestjs/class-transformer';

@InputType()
export class SendDoubleVerificationInput {
  @Field(() => String)
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  @IsString()
  token:string;

  @Field(() => String, { nullable: true } )
  @Transform(({ value }) => value.trim())
  @IsOptional()
  @IsString()
  phoneNumber?:string;

  @Field(() => String, { nullable: true } )
  @Transform(({ value }) => value.trim())
  @IsOptional()
  @IsString()
  email?:string;
}