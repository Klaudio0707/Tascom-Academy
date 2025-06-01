import React, { useState, type JSX } from 'react';
import Form from './Components/Form';
import Atividades from './Components/Atividades';

interface Atividade {
  title: string;
  description: string;
}

export default function App(): JSX.Element {
  const [atividades, setAtividades] = useState<Atividade[]>([]);

  const handleAddAtividade = (novaAtividade: Atividade) => {
    setAtividades((prev) => [...prev, novaAtividade]);
  };

  return (
    <div>
      <Form onAddAtividade={handleAddAtividade} />
      <Atividades atividades={atividades} />
    </div>
  );
}
