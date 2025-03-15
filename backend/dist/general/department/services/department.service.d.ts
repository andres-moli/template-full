import { Department } from '../entities/departament.entity';
import { Repository } from 'typeorm';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
import { FindDepartmentsArgs } from '../dto/args/find-departments.arg';
export declare class DepartmentService {
    private readonly departmentRepo;
    constructor(departmentRepo: Repository<Department>);
    department(context: IContext, id: string, countryId: string): Promise<Department>;
    departmentOne(context: IContext, id: string, orFaill?: boolean): Promise<Department>;
    departments(context: IContext, args: FindDepartmentsArgs): Promise<Department[]>;
    onDepartment({ context, departmentId, countryId, }: {
        context: IContext;
        departmentId: string;
        countryId: string;
    }): Promise<Department>;
}
