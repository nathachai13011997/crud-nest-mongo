import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employees, EmployeesDocument } from './schemas/employees.schemas'

@Injectable()
export class EmployeesService {
  constructor(@InjectModel(Employees.name) private employeesModel: Model<EmployeesDocument>) {}

  async findAll(): Promise<Employees[]> {
    return this.employeesModel.find().exec();
  }

  async create(data: Employees): Promise<Employees> {
    const createEmployee = new this.employeesModel(data)
    return createEmployee.save();
  }
}
