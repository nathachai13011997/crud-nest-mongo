import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employees, EmployeesDocument } from './schemas/employees.schemas';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employees.name)
    private employeesModel: Model<EmployeesDocument>,
  ) {}

  async findAll(): Promise<Employees[]> {
    return this.employeesModel.find().exec();
  }

  async findById(id: string): Promise<Employees> {
    const employee = await this.employeesModel.findOne({ _id: id });
    if (!employee?.name) throw new NotFoundException();

    return this.employeesModel.findOne({ _id: id }).exec();
  }

  async findByName(name: string): Promise<Employees[]> {
    const employee = await this.employeesModel.findOne({ name });
    if (!employee?.name) throw new NotFoundException();

    return this.employeesModel.find({ name }).exec();
  }

  async create(data: Employees): Promise<Employees> {
    const createEmployee = new this.employeesModel(data);
    return createEmployee.save();
  }

  async update(id: string, data: Employees): Promise<any> {
    const employee = await this.employeesModel.findOne({ _id: id });
    if (!employee?.name) throw new NotFoundException();

    await this.employeesModel.updateOne({ _id: id }, data);
    return data;
  }

  async delete(id: string): Promise<string> {
    const employee = await this.employeesModel.findOne({ _id: id });
    if (!employee?.name) throw new NotFoundException();

    await this.employeesModel.deleteOne({ _id: id });
    return id;
  }
}
