import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Bem-vindo à API da Concessionária!',
      version: '1.0.0',
      documentation: '/api', 
    };
  }
}