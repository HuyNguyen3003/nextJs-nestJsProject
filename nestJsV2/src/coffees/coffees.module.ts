import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffe.entiti';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Flavor } from './entities/flavor.entiti';
import { Event } from 'src/events/entities/event.entiti';

@Module({
    imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
    controllers: [CoffeesController],
    providers: [CoffeesService]
})
export class CoffeesModule { }
