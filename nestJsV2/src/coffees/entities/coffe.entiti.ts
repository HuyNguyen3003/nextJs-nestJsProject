// import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
// import { Flavor } from "./flavor.entiti"


// @Entity()
// export class Coffee {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     name: string;

//     @Column()
//     brand: string;

//     @Column({ default: 0 })
//     recommendations: number

//     @JoinTable()
//     @ManyToMany(type => Flavor, flavor => flavor.coffee, {
//         cascade: true
//     })
//     flavors: Flavor[];
// }


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Coffee extends Document {

    @Prop()
    name: string

    @Prop()
    brand: string

    @Prop([String])
    flavors: string[]

}

export const CoffeeSchema = SchemaFactory.createForClass(Coffee)