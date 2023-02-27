import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { ErrorService } from '../error.service';
import { Employees, EmployeesSchema } from './schemas/employees.schemas';
@Module({
  imports: [MongooseModule.forFeature([{ name: Employees.name, schema: EmployeesSchema }])],
  controllers: [EmployeesController],
  providers: [EmployeesService, ErrorService],
})
export class EmployeesModule {}
