// File: apps/api-gateway/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 1. Usamos NestFactory.create() para uma aplicação web padrão que entende HTTP.
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
  console.log(`API Gateway está rodando em: http://localhost:3000`);
}
bootstrap();