import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { swaggerStart } from './documentation/swagger.docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerStart(app)
  await app.listen(3003);
}
bootstrap();
