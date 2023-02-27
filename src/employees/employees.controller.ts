import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  HttpException,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employees } from './schemas/employees.schemas';
import { EmployeeInput } from './interfaces/employee.interface';
import { ErrorService } from '../error.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly EmployeesService: EmployeesService, private readonly ErrorService: ErrorService) {}

  @Get()
  async getEmployeesAll(): Promise<Employees[]> {
    try {
      return await this.EmployeesService.findAll();
    } catch (err) {
      this.ErrorService.errorResponse(err)
    }
  }

  @Get(':id')
  async getEmployeeById(@Param() params: EmployeeInput): Promise<Employees> {
    try {
      return await this.EmployeesService.findById(params?.id);
    } catch (err) {
      this.ErrorService.errorResponse(err)
    }
  }

  @Post()
  async createEmployee(@Body() employee: Employees): Promise<Employees> {
    try {
      return await this.EmployeesService.create(employee);
    } catch (err) {
      this.ErrorService.errorResponse(err)
    }
  }

  @Put(':id')
  async updateEmployee(
    @Param() params: EmployeeInput,
    @Body() employee: Employees,
  ): Promise<Employees> {
    try {
      return await this.EmployeesService.update(params?.id, employee);
    } catch (err) {
      this.ErrorService.errorResponse(err)
    }
  }

  @Delete(':id')
  async deleteEmployee(@Param() params: EmployeeInput): Promise<string> {
    try {
      return await this.EmployeesService.delete(params?.id);
    } catch (err) {
      this.ErrorService.errorResponse(err)
    }
  }
}
