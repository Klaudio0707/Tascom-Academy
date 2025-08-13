import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('MATH_SERVICE') private readonly mathClient: ClientProxy,
    @Inject('STRING_SERVICE') private readonly stringClient: ClientProxy,
  ) {}

  // Envia uma mensagem para o math-service e espera a resposta
  async getSum(numbers: number[]): Promise<number> {
    return await firstValueFrom(this.mathClient.send({ cmd: 'sum' }, numbers));
  }

  // Envia uma mensagem para o string-service e espera a resposta
  async getCapitalized(text: string): Promise<string> {
    return await firstValueFrom(
      this.stringClient.send({ cmd: 'capitalize' }, text),
    );
  }
}
