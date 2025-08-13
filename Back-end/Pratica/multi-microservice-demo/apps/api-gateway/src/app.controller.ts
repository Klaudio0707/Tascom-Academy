import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('sum')
  getSum(@Body() numbers: number[]): Promise<number> {
    return this.appService.getSum(numbers);
  }

  @Post('capitalize')
  getCapitalized(@Body() body: { text: string }): Promise<string> {
    return this.appService.getCapitalized(body.text);
  }
}
