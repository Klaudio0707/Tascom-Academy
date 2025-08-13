import { Controller} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'getDate' })
  getCurrentDate(): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      timeZone: 'America/Recife', 
    };
 
    return new Intl.DateTimeFormat('pt-BR', options).format(new Date());
  }
}
