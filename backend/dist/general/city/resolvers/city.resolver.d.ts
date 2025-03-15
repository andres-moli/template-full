import { CityService } from '../services/city.service';
import { City } from '../entities/city.entity';
import { FindCitiesArgs } from '../dto/args/find-cities.arg';
export declare class CityResolver {
    private readonly service;
    constructor(service: CityService);
    findOne(id: string, departmentId: string, context: any): Promise<City>;
    findAll(args: FindCitiesArgs, context: any): Promise<City[]>;
}
