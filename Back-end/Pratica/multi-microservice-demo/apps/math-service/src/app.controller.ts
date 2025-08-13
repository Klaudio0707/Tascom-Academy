import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'sum' })
  calculateSum(@Payload() data: number[]): number {
    return data.reduce((a, b) => a + b, 0);
  }
}
