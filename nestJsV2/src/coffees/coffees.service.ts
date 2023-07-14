import { Inject, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffe.entiti';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Flavor } from './entities/flavor.entiti';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Event } from 'src/events/entities/event.entiti';


@Injectable()
export class CoffeesService {


    constructor(
        @InjectRepository(Coffee)
        private readonly coffeeRepository: Repository<Coffee>,
        @InjectRepository(Flavor)
        private readonly flavorRepository: Repository<Flavor>,
        private readonly connecttion: Connection,
        @Inject('COFFEE_BRANDS') CoffeeNewBrand: string[]
    ) {
    }



    async findAll(paginationQuery: PaginationQueryDto) {
        const { limit, offset } = paginationQuery



        return await this.coffeeRepository.find({
            relations: ['flavors'],
            skip: offset,
            take: limit
        })
    }

    async findId(id: string) {

        const item = await this.coffeeRepository.findOne({ where: { id: +id }, relations: ['flavors'] })
        if (item)
            return item
        else
            return 'no cafee [id]'

    }

    async create(CreateCoffeeDto: CreateCoffeeDto) {
        try {

            const flavors = await Promise.all(
                CreateCoffeeDto.flavors.map(name => this.preloadFlavorByName(name))
            )


            const data = await this.coffeeRepository.create({
                ...CreateCoffeeDto,
                flavors
            })

            return this.coffeeRepository.save(data)

        } catch (err) {
            console.log(err)
            return err
        }
    }

    async update(id: string, UpdateCoffeeDto: UpdateCoffeeDto) {
        try {

            const flavors = await Promise.all(
                UpdateCoffeeDto.flavors
                &&
                (await Promise.all(UpdateCoffeeDto.flavors.map(name => this.preloadFlavorByName(name))))
            )


            const item = await this.coffeeRepository.preload({
                id: +id,
                ...UpdateCoffeeDto,
                flavors
            })
            return await this.coffeeRepository.save(item)

        } catch (err) {
            console.log(err)
            return err
        }


    }

    async remove(id: string) {
        try {
            const item = await this.coffeeRepository.findOne({ where: { id: +id } })
            return this.coffeeRepository.remove(item)

        } catch (err) {
            console.log(err)
            return err
        }

    }

    async recommendCoffee(coffe: Coffee) {
        const queryRunner = this.connecttion.createQueryRunner()
        await queryRunner.connect()
        await queryRunner.startTransaction()

        try {
            coffe.recommendations++
            const recommendEvent = new Event()
            recommendEvent.name = 'recommend_coffee'
            recommendEvent.type = 'coffee'
            recommendEvent.payload = { coffeId: coffe.id }

            await queryRunner.manager.save(coffe)
            await queryRunner.manager.save(recommendEvent)
            await queryRunner.commitTransaction()
        } catch (e) {
            await queryRunner.rollbackTransaction()
        } finally {
            await queryRunner.release()
        }
    }


    private async preloadFlavorByName(name: string): Promise<Flavor> {
        const existingFlavor = await this.flavorRepository.findOne({ where: { name: name } });
        if (existingFlavor) return existingFlavor;

        return this.flavorRepository.create({ name });
    }






}
