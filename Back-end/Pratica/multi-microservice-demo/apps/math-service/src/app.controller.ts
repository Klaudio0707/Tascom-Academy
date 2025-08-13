// File: apps/math-service/src/app.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly httpService: HttpService) {}

  // --- MÉTODOS DE SOMA ---

  @MessagePattern({ cmd: 'sum' })
  accumulate(@Payload() data: number[]): number {
    return (data || []).reduce((a, b) => a + b, 0);
  }

  @MessagePattern({ cmd: 'sum_and_get_fact' })
  async getFactForSum(@Payload() data: number[]) {
    const sum = (data || []).reduce((a, b) => a + b, 0);
    const apiUrl = `http://numbersapi.com/${sum}`;

    const response = await firstValueFrom(this.httpService.get(apiUrl));

    return {
      result: sum,
      fact: response.data,
    };
  }

  // --- MÉTODOS DE SUBTRAÇÃO ---

  @MessagePattern({ cmd: 'sub' })
  calculateSub(@Payload() data: number[]): number {
    if (!data || data.length === 0) return 0;
    return data.slice(1).reduce((acc, val) => acc - val, data[0]);
  }

  @MessagePattern({ cmd: 'sub_and_get_fact' })
  async getFactForSub(@Payload() data: number[]) {
    if (!data || data.length === 0) return { result: 0, fact: 'No numbers provided' };

    const subResult = data.slice(1).reduce((acc, val) => acc - val, data[0]);
    const apiUrl = `http://numbersapi.com/${subResult}`;

    const response = await firstValueFrom(this.httpService.get(apiUrl));

    return {
      result: subResult,
      fact: response.data,
    };
  }
  
  // --- MÉTODOS DE MULTIPLICAÇÃO ---

  @MessagePattern({ cmd: 'mult' })
  calculateMult(@Payload() data: number[]): number {

    return (data || []).reduce((a, b) => a * b, 1);
  }
}