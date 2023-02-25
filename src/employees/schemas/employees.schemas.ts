import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type EmployeesDocument = HydratedDocument<Employees>


// {
//     "_id": "61335a62f6c9d148a419fe36",
//     "name": "ก้อง",
//     "salary": 60000,
//     "address": "กรุงเทพมหานคร",
//     "general": {
//         "weight": 60,
//         "height": 170,
//         "gender": "ชาย"
//     },
//     "social": [
//         "facebook",
//         "line",
//         "twitter"
//     ],
//     "department": "ฝ่ายการตลาด"
// },


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
}

export const EmployeesSchema = SchemaFactory.createForClass(Employees)