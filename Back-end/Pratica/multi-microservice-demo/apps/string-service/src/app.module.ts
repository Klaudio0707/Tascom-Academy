import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; // O AppService padrão não é usado, mas não há problema em deixá-lo aqui

@Module({
  imports: [],
  controllers: [AppController], // <-- A LINHA MAIS IMPORTANTE!
  providers: [AppService],
})
export class AppModule {}
