import { InputType, Field, Float } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsDecimal, IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { VisitComentStatusEnum, VisitComentTypeEnum } from '../../emun/visit-coment.emun';

@InputType()
export class CreateVisitComentInput {
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
    
    @Field(() => String)
    @IsString()
    visitId: string

    @Field(() => Date, {nullable: true})
    @IsOptional()
    @IsDate()
    date?: Date;

    
    @Field(() => Date, {nullable: true})
    @IsOptional()
    @IsDate()
    dateFull?: Date;

        
    @Field(() => Date, {nullable: true})
    @IsOptional()
    @IsDate()
    time?: Date;
    
  
    @Field(() => VisitComentStatusEnum, {nullable: true})
    @IsString()
    @IsOptional()
    status?: VisitComentStatusEnum

    @Field(() => VisitComentTypeEnum)
    @IsEnum(VisitComentTypeEnum)
    type: VisitComentTypeEnum
}
