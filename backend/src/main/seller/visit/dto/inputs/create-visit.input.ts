import { InputType, Field, Float } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsDecimal, IsEmail, IsOptional, IsString } from 'class-validator';
import { StatusVisitEnum } from '../../emun/visit.emun';

@InputType()
export class CreateVisitInput {
    @Field(() => String, {nullable: true})
    @IsString()
    @IsOptional()
    description?:string;

    @Field(() => String, {nullable: true})
    @IsString()
    @IsOptional()
    location?:string;

    @Field(() => String, {nullable: true})
    @IsString()
    @IsOptional()
    latitude?:string;

    @Field(() => String, {nullable: true})
    @IsString()
    @IsOptional()
    longitude?:string;


    @Field(() => Boolean, {nullable: true})
    @IsBoolean()
    @IsOptional()
    mocked: boolean

    @Field(() => Date)
    @IsDate()
    dateVisit: Date;


    @Field(() => String)
    @IsString()
    userId: string
    
    @Field(() => StatusVisitEnum)
    status: StatusVisitEnum;

}
