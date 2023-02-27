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

@Controller('employees')
export class EmployeesController {
  constructor(private readonly EmployeesService: EmployeesService) {}

  @Get()
  async getEmployeesAll(): Promise<Employees[]> {
    try {
      return await this.EmployeesService.findAll();
    } catch (err) {
      throw new HttpException(err.message, err.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async getEmployeeById(@Param() params: EmployeeInput): Promise<Employees> {
    try {
      return await this.EmployeesService.findById(params?.id);
    } catch (err) {
      throw new HttpException(err.message, err.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async createEmployee(@Body() employee: Employees): Promise<Employees> {
    try {
      return await this.EmployeesService.create(employee);
    } catch (err) {
      throw new HttpException(err.message, err.status || HttpStatus.INTERNAL_SERVER_ERROR);
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
      throw new HttpException(err.message, err.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async deleteEmployee(@Param() params: EmployeeInput): Promise<string> {
    try {
      return await this.EmployeesService.delete(params?.id);
    } catch (err) {
      throw new HttpException(err.message, err.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
