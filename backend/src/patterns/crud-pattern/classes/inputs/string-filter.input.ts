import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsOptional, IsString } from "class-validator";

@InputType()
export class StringFilter {

    @Field(() => String,{ nullable:true })
    @IsString()
    @IsOptional()
    _eq?:string

    @Field(() => String,{ nullable:true })
    @IsString()
    @IsOptional()
    _neq?:string

    @Field(() => [String],{ nullable:true })
    @IsArray()
    @IsOptional()
    _in?:string[]  

    @Field(() => String,{ nullable:true })
    @IsString()
    @IsOptional()
    _startswith?:string 

    @Field(() => String,{ nullable:true })
    @IsString()
    @IsOptional()
    _notstartswith?:string 

    @Field(() => String,{ nullable:true })
    @IsString()
    @IsOptional()
    _endswith?:string 

    @Field(() => String,{ nullable:true })
    @IsString()
    @IsOptional()
    _notendswith?:string 

    @Field(() => String,{ nullable:true })
    @IsString()
    @IsOptional()
    _contains?:string 

    @Field(() => String,{ nullable:true })
    @IsString()
    @IsOptional()
    _notcontains?:string 

    @Field(() => String,{ nullable:true })
    @IsString()
    @IsOptional()
    _like?:string

    @Field(() => String,{ nullable:true })
    @IsString()
    @IsOptional()
    _notlike?:string
}
