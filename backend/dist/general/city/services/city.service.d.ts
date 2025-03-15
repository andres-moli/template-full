import { Repository } from 'typeorm';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
import { City } from '../entities/city.entity';
import { FindCitiesArgs } from '../dto/args/find-cities.arg';
export declare class CityService {
    private readonly cityRepo;
    constructor(cityRepo: Repository<City>);
    city(context: IContext, id: string, departmentId: string): Promise<City>;
    cityOne(context: IContext, id: string, orFaill?: boolean): Promise<City>;
    cities(context: IContext, args: FindCitiesArgs): Promise<City[]>;
    onCountry({ context, cityId, departmentId, }: {
        context: IContext;
        cityId: string;
        departmentId: string;
    }): Promise<City>;
}
