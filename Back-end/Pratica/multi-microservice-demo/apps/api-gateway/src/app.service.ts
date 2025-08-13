import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('MATH_SERVICE') private readonly mathClient: ClientProxy,
    @Inject('STRING_SERVICE') private readonly stringClient: ClientProxy,
  ) {}



  async getSum(numbers: number[]): Promise<number> {
    return await firstValueFrom(this.mathClient.send({ cmd: 'sum' }, numbers));
  }

  async getSub(numbers: number[]): Promise<number> {
    return await firstValueFrom(this.mathClient.send({ cmd: 'sub' }, numbers));
  }

  async getMult(numbers: number[]): Promise<number> {
    return await firstValueFrom(this.mathClient.send({ cmd: 'mult' }, numbers));
  }



  async getSumAndFact(numbers: number[]) {
    return await firstValueFrom(
      this.mathClient.send({ cmd: 'sum_and_get_fact' }, numbers),
    );
  }

  async getSubAndFact(numbers: number[]) {
    return await firstValueFrom(
      this.mathClient.send({ cmd: 'sub_and_get_fact' }, numbers),
    );
  }



  async getCapitalized(text: string): Promise<string> {
    return await firstValueFrom(
      this.stringClient.send({ cmd: 'capitalize' }, text),
    );
  }
}