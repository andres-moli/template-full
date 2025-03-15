import { Repository } from 'typeorm';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
import { Country } from '../entities/country.entity';
import { FindCountriesArgs } from '../dto/args/find-countries.arg';
export declare class CountryService {
    private readonly countryRepository;
    constructor(countryRepository: Repository<Country>);
    country(context: IContext, id: string): Promise<Country>;
    countries(context: IContext, args: FindCountriesArgs): Promise<Country[]>;
    onCountry({ context, countryId, }: {
        context: IContext;
        countryId: string;
    }): Promise<Country>;
}
