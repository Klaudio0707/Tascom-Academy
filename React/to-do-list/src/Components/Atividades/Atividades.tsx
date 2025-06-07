import  {  type JSX } from 'react';

interface Atividade {
    title: string;
    description: string;
  }
  
  type AtividadesProps = {
    atividades: Atividade[

    ];
  };
  
  export default function Atividades({ atividades }: AtividadesProps): JSX.Element {
    return (
      <div>
        <h2>Atividades</h2>
        <ul>
          {atividades.length > 0 ? (
            atividades.map((atividade, index) => (
              <li key={index}>
                <h3>{atividade.title}</h3>
                <p>{atividade.description}</p>
              </li>
            ))
          ) : (
            <p>Nenhuma atividade adicionada.</p>
          )}
        </ul>
      </div>
    );
  }