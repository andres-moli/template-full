import { Department } from '../entities/departament.entity';
import { DepartmentService } from '../services/department.service';
import { FindDepartmentsArgs } from '../dto/args/find-departments.arg';
export declare class DepartmentResolver {
    private readonly service;
    constructor(service: DepartmentService);
    findOne(id: string, countryId: string, context: any): Promise<Department>;
    findAll(args: FindDepartmentsArgs, context: any): Promise<Department[]>;
}
