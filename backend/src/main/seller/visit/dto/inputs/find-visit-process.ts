import { InputType, Field, Float } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsDecimal, IsEmail, IsOptional, IsString } from 'class-validator';
import { StatusVisitEnum } from '../../emun/visit.emun';

@InputType()
export class findOneVisitInProcessInput {
    @Field(() => String)
    @IsString()
    userId: string

}
