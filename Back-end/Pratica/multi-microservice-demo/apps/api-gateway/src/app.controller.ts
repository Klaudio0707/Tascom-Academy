import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // --- Endpoints de Operações Básicas ---

  @Post('sum')
  getSum(@Body() numbers: number[]): Promise<number> {
    return this.appService.getSum(numbers);
  }

  @Post('sub')
  getSub(@Body() numbers: number[]): Promise<number> {
    return this.appService.getSub(numbers);
  }

  @Post('mult')
  getMult(@Body() numbers: number[]): Promise<number> {
    return this.appService.getMult(numbers);
  }

  @Post('capitalize')
  getCapitalized(@Body() body: { text: string }): Promise<string> {
    return this.appService.getCapitalized(body.text);
  }

  

  @Post('sum-fact')
  getSumAndFact(@Body() numbers: number[]) {
    return this.appService.getSumAndFact(numbers);
  }

  @Post('sub-fact')
  getSubAndFact(@Body() numbers: number[]) {
    return this.appService.getSubAndFact(numbers);
  }
}