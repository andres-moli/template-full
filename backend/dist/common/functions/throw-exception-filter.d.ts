import { ArgumentsHost } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
export declare class ThrowExceptionFilter implements GqlExceptionFilter {
    catch(exception: any, host: ArgumentsHost): GraphQLError;
}
