// apps/string-service/src/app.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'capitalize' })
  capitalizeString(@Payload() data: string): string {
    return data.toUpperCase();
  }
}
