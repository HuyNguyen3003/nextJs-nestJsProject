import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interfaces';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly Users: Model<User>) { }

    getUser(): Promise<User[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const UsersData = await this.Users.find();
                resolve(UsersData);
            } catch (e) {
                reject(e);
            }
        });
    }

    postUser(data: User): string {
        const { name, password } = data;
        try {
            if (name && password) {
                this.Users.create(data);
                return 'done';
            } else return 'missing data';
        } catch (e) {
            console.log(e);
            return 'err';
        }
    }

    deleteUser(data: string) {
        return new Promise(async (resolve, reject) => {
            try {
                await this.Users.deleteOne({ _id: data });
                resolve('done');
            } catch (e) {
                reject(e);
            }
        });
    }
    updateUser(data) {
        return new Promise(async (resolve, reject) => {
            try {
                await this.Users.updateOne({ _id: data.id }, { name: data.name, password: data.password }, { upsert: true });
                resolve('done');
            } catch (e) {
                reject(e);
            }
        });
    }
}
