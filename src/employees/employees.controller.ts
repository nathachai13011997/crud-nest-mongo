import { Controller, Get, Post, Body, Put, Param, HttpException, HttpStatus } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employees } from './schemas/employees.schemas'

@Controller("employees")
export class EmployeesController {
  constructor(private readonly EmployeesService: EmployeesService) {}

  @Get()
  async getEmployeesAll(): Promise<Employees[]> {
    return await this.EmployeesService.findAll();
  }

  @Post()
  async createEmployee(@Body() employee: Employees ): Promise<Employees> {
    return await this.EmployeesService.create(employee);
  }

  @Put(":id")
  async updateEmployee(@Param() params: {id: string}, @Body() employee: Employees ): Promise<Employees> {
    try {
      return await this.EmployeesService.update(params?.id, employee);
    }catch(err){
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
