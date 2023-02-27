import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employees } from './schemas/employees.schemas';
import { ErrorService } from '../error.service';

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly EmployeesService: EmployeesService,
    private readonly ErrorService: ErrorService,
  ) {}

  @Get()
  async getEmployeesAll(@Query('name') name?: string): Promise<Employees[]> {
    try {
      if (name) return await this.EmployeesService.findByName(name);
      return await this.EmployeesService.findAll();
    } catch (err) {
      this.ErrorService.errorResponse(err);
    }
  }

  @Get(':id')
  async getEmployeeById(@Param('id') id: string): Promise<Employees> {
    try {
      return await this.EmployeesService.findById(id);
    } catch (err) {
      this.ErrorService.errorResponse(err);
    }
  }

  @Post()
  async createEmployee(@Body() employee: Employees): Promise<Employees> {
    try {
      return await this.EmployeesService.create(employee);
    } catch (err) {
      this.ErrorService.errorResponse(err);
    }
  }

  @Put(':id')
  async updateEmployee(
    @Param('id') id: string,
    @Body() employee: Employees,
  ): Promise<Employees> {
    try {
      return await this.EmployeesService.update(id, employee);
    } catch (err) {
      this.ErrorService.errorResponse(err);
    }
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: string): Promise<string> {
    try {
      return await this.EmployeesService.delete(id);
    } catch (err) {
      this.ErrorService.errorResponse(err);
    }
  }
}
