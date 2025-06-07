import { type JSX } from 'react';
import Form from './Components/Form/Form';
interface Atividade {
  title: string;
  description: string;
}

export default function App(): JSX.Element {
  const atividades: Atividade[] = [];

  const handleAddAtividade = (atividade: Atividade) => {
    atividades.push(atividade);

    console.log(atividades);
  };

  return (
    <div>
      <h1>Lista de Atividades</h1>
      <Form onAddAtividade={handleAddAtividade} />
      
      {atividades.length > 0 ? (
            atividades.map((atividades, index) => (
              <li key={index}>
                <h3>{atividades.title}</h3>
                <p>{atividades.description}</p>
              </li>
            ))
          ) : (
            <p>Nenhuma atividade adicionada.</p>
          )}
    </div>
  );
}
