class Cardapio {
    id: number;
    prato: string;
    preco: number;
    status: "pendente" | "pronto" | "cancelado";
    concluido: boolean;

        public constructor( prato: string, preco: number) {
            this.id  =+1;
            this.prato = prato;
            this.preco = preco;
            this.status = "pendente";
            this.concluido = false;

        }

        public concluir(status:number): void{
            switch(status){
                case 1:
                    this.status = "pronto";
                    this.concluido = true;
                    break;
                case 2: 
                    this.status = "pendente";
                    this.concluido = false;
                    break;
                case 3:
                        this.status = "cancelado";
                        this.concluido = false;
                        break;
                default:
                    console.log("status Invalido");
                    break;
            }
        }

}

