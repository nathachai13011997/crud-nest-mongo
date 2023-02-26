import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type EmployeesDocument = HydratedDocument<Employees>

@Schema()
export class General {
    @Prop({ required: true})
    weight: number

    @Prop({ required: true })
    height: number

    @Prop({ required: true })
    gender: string
}

@Schema()
export class Employees {
    @Prop({ required: true})
    name: string

    @Prop({ required: true })
    salary: number

    @Prop({ required: true })
    address: string

    @Prop({ required: true })
    general: General

    @Prop([String])
    social: string[]

    @Prop({ required: true })
    department: string
}

export const EmployeesSchema = SchemaFactory.createForClass(Employees)