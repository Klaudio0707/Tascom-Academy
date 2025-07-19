import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
        create(user: object) {
            return {
                message: 'Usuario criado com sucesso',
                date: user,
            }
        }
        getUser() {
            return `Seu nome é carlos`
                
            
        }
    }

