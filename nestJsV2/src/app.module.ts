import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig]
    }),
    CoffeesModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.USERNAMEDB,
        password: process.env.PASSWORDDB,
        database: 'postgres',
        autoLoadEntities: true,
        synchronize: true
      })
    }), CoffeeRatingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
