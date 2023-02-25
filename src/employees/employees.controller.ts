import { Controller, Get, Post, Body } from '@nestjs/common';
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
  async postEmployee(@Body() employee: Employees ): Promise<Employees> {
    // const data = {
    //   "name": "ทดสอบ01",
    //   "salary": 60000,
    //   "address": "กรุงเทพมหานคร",
    //   "general": {
    //     "weight": 60,
    //     "height": 170,
    //     "gender": "ชาย"
    //   },
    //   "social": [
    //     "facebook",
    //     "line",
    //     "twitter"
    //   ],
    //   "department": "ฝ่ายการตลาด"
    // }
    
    return await this.EmployeesService.create(employee);
  }
}
