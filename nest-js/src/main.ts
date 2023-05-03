import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {
    await app.listen(5001);
  } catch (e) {
    // console.log(e);
    await app.listen(5001);
    console.log('~~address already in use :::3002, beacaus hot readload')
  }
}
bootstrap();
