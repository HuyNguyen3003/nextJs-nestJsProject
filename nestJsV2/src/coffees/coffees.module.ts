import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee, CoffeeSchema } from './entities/coffe.entiti';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Flavor } from './entities/flavor.entiti';
import { Event } from 'src/events/entities/event.entiti';
import { ConfigModule } from '@nestjs/config';
import coffeeConfig from './config/coffee.config';
import { MongooseModule } from "@nestjs/mongoose"



@Module({
    imports:
        [
            // TypeOrmModule.forFeature([Coffee, Flavor, Event]),
            MongooseModule.forFeature([{
                name: Coffee.name,
                schema: CoffeeSchema
            }]),
            ConfigModule.forFeature(coffeeConfig)
        ],
    controllers: [CoffeesController],
    providers: [CoffeesService],
    exports: [CoffeesService]
})
export class CoffeesModule { }
