import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffe.entiti';
import e from 'express';

@Injectable()
export class CoffeesService {

    private coffess: Coffee[] = [
        { id: 1, name: 'Den', brand: 'TrungNguen', flavors: ['bitter', 'sweet'] }
    ]

    findAll() {
        if (this.coffess)
            return this.coffess
        else {
            return 'no list cafee'
        }
    }

    findId(id: string) {

        const item = this.coffess.find(item => item.id === +id)
        if (item)
            return item
        else
            return 'no cafee [id]'

    }

    create(caffe: any) {
        try {
            this.coffess.push(caffe)
            return caffe

        } catch (e) {
            console.log(e)
            return e
        }
    }

    update(id: string, caffe: any) {
        try {


            const item = this.coffess.find(item => item.id === +id)

            if (item) {

            }
            return 'success'
        } catch {
            console.log(e)
            return e
        }


    }

    remove(id: string) {
        try {
            const index = this.coffess.find(item => item.id === +id)
            //
            return 'success'
        } catch (e) {
            console.log(e)
            return e
        }

    }






}
