import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


const config = new DocumentBuilder()
    .setTitle('API Concessionária')
    .setDescription('Documentação detalhada da API para gerenciamento de veículos, marcas e usuários.')
    .setVersion('1.0')
    .addTag('vehicles', 'Operações relacionadas a veículos')
    .addTag('carModel', 'Operações relacionadas a Modelo')
    .addTag('brands', 'Operações relacionadas a marcas')
    .addTag('users', 'Operações relacionadas a usuários')
    .build();
export function swaggerStart(app:INestApplication){
    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('api/', app, document)
}