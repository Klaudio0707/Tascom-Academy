// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Concessionária')
    .setDescription('Documentação detalhada da API para gerenciamento de veículos, marcas e usuários.')
    .setVersion('1.0')
    .addTag('vehicles', 'Operações relacionadas a veículos')
    .addTag('carModel', 'Operações relacionadas a Modelo')
    .addTag('brands', 'Operações relacionadas a marcas')
    .addTag('users', 'Operações relacionadas a usuários')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 

  await app.listen(3000);
}
bootstrap();
