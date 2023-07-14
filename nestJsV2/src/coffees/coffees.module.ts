import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffe.entiti';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Flavor } from './entities/flavor.entiti';
import { Event } from 'src/events/entities/event.entiti';
import { ConfigModule } from '@nestjs/config';
import coffeeConfig from './config/coffee.config';



@Module({
    imports:
        [
            TypeOrmModule.forFeature([Coffee, Flavor, Event]),
            ConfigModule.forFeature(coffeeConfig)
        ],
    controllers: [CoffeesController],
    providers: [CoffeesService],
    exports: [CoffeesService]
})
export class CoffeesModule { }
