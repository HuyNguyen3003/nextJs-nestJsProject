import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  try {
    await app.listen(5000);
    console.log('~~address already in use :::5000, beacaus hot readload')

  } catch (e) {
    // console.log(e);
    await app.listen(5001);
    console.log('~~address already in use :::5001, beacaus hot readload')
  }
}
bootstrap();
