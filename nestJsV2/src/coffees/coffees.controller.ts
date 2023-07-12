import { Controller, Param, Post, Body, Get, Patch, Delete, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';


@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesServices: CoffeesService) { }


    @Get()
    findALL(@Query() query) {
        //    const { limit, offset } = query

        return this.coffeesServices.findAll()
    }


    @Get(':id')
    findOne(@Param() param) {
        return this.coffeesServices.findId(param.id)
    }

    @Post()
    creat(@Body() createCoffeeDTO: CreateCoffeeDto) {

        return this.coffeesServices.create(createCoffeeDTO)

    }

    @Patch(':id')
    update(@Param() param, @Body() updateCoffeeDTO: UpdateCoffeeDto) {
        return this.coffeesServices.update(param.id, updateCoffeeDTO)

    }

    @Delete(':id')
    remove(@Param() param) {
        return this.coffeesServices.remove(param.id)

    }

}
