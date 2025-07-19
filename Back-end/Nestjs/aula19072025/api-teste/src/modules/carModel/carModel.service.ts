import { Injectable } from '@nestjs/common';

@Injectable()
export class CarModelService {
    create(cars: object) {
        return {
            message: 'Carro salvo com sucesso',
            name: cars,
            model: cars,
            color: cars,
            price: cars,
        }
    }
    getUser() {
        return(
            "Carro Preto, Siena, Valor R$ 15.000,00"
        )
            
        
    }

}
