import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffe.entiti';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Flavor } from './entities/flavor.entiti';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Event } from 'src/events/entities/event.entiti';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';



@Injectable()
export class CoffeesService {




    constructor(
        // @InjectRepository(Coffee)
        // private readonly coffeeRepository: Repository<Coffee>,
        // @InjectRepository(Flavor)
        // private readonly flavorRepository: Repository<Flavor>,
        // private readonly connecttion: Connection,
        // private readonly configServices: ConfigService,

        @InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>






    ) {


    }





    async findAll(paginationQuery: PaginationQueryDto) {

        const { limit, offset } = paginationQuery
        return await this.coffeeModel.find().skip(offset).limit(limit).exec()


    }

    async findId(id: string) {

        const item = await this.coffeeModel.findOne({ where: { _id: +id } }).exec()
        if (!item)
            throw new NotFoundException(`Coffee #${id} not found`);
        return item



    }

    async create(CreateCoffeeDto: CreateCoffeeDto) {

        // const flavors = await Promise.all(
        //     CreateCoffeeDto.flavors.map(name => this.preloadFlavorByName(name))
        // )

        const data = await this.coffeeModel.create(CreateCoffeeDto)
        if (!data)
            throw new NotFoundException(`Coffee not create`);
        return data


    }

    async update(id: string, UpdateCoffeeDto: UpdateCoffeeDto) {

        // const flavors = await Promise.all(
        //     UpdateCoffeeDto.flavors
        //     &&
        //     (await Promise.all(UpdateCoffeeDto.flavors.map(name => this.preloadFlavorByName(name))))
        // )


        // const item = await this.coffeeModel.preload({
        //     id: +id,
        //     ...UpdateCoffeeDto,
        //     flavors
        // })



        return await this.coffeeModel.findOneAndUpdate({ _id: id }, { $set: UpdateCoffeeDto }, { new: true }).exec()





    }

    async remove(id: string) {

        // const item = await this.coffeeRepository.findOne({ where: { id: +id } })
        // if (!item)
        //     throw new NotFoundException(`Coffee #${id} not found`);
        // return this.coffeeRepository.remove(item)

        return await this.coffeeModel.findByIdAndRemove({ _id: id }).exec()





    }

    // async recommendCoffee(coffe: Coffee) {
    //     const queryRunner = this.connecttion.createQueryRunner()
    //     await queryRunner.connect()
    //     await queryRunner.startTransaction()

    //     try {
    //         coffe.recommendations++
    //         const recommendEvent = new Event()
    //         recommendEvent.name = 'recommend_coffee'
    //         recommendEvent.type = 'coffee'
    //         recommendEvent.payload = { coffeId: coffe.id }

    //         await queryRunner.manager.save(coffe)
    //         await queryRunner.manager.save(recommendEvent)
    //         await queryRunner.commitTransaction()
    //     } catch (e) {
    //         await queryRunner.rollbackTransaction()
    //     } finally {
    //         await queryRunner.release()
    //     }
    // }


    // private async preloadFlavorByName(name: string): Promise<Flavor> {
    //     const existingFlavor = await this.flavorRepository.findOne({ where: { name: name } });
    //     if (existingFlavor) return existingFlavor;

    //     return this.flavorRepository.create({ name });
    // }






}
