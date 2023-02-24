import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller("employees")
export class EmployeesController {
  constructor(private readonly EmployeesService: EmployeesService) {}

  @Get()
  getHello(): string {
    return this.EmployeesService.getHello();
  }
}
