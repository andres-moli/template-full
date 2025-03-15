import { Country } from '../entities/country.entity';
import { CountryService } from '../services/country.service';
import { FindCountriesArgs } from '../dto/args/find-countries.arg';
export declare class CountryResolver {
    private readonly service;
    constructor(service: CountryService);
    findOne(id: string, context: any): Promise<Country>;
    findAll(args: FindCountriesArgs, context: any): Promise<Country[]>;
}
