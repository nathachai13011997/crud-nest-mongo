import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type EmployeesDocument = HydratedDocument<Employees>

@Schema()
export class Employees {
    @Prop({ required: true})
    name: string

    @Prop({ required: true })
    age: number

    @Prop({ required: true })
    breed: string
}

export const EmployeesSchema = SchemaFactory.createForClass(Employees)