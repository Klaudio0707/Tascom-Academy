import  { useRef, type JSX } from 'react';

interface Atividade {
    title: string;
    description: string;
  }
  
  type FormProps = {
    onAddAtividade: (atividade: Atividade) => void;
  };
  
  export default function Form({ onAddAtividade }: FormProps): JSX.Element {
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      const title = titleRef.current?.value || '';
      const description = descriptionRef.current?.value || '';
  
      if (title && description) {
        onAddAtividade({ title, description });
  
        if (titleRef.current) titleRef.current.value = '';
        if (descriptionRef.current) descriptionRef.current.value = '';
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input ref={titleRef} type="text" placeholder="Título" />
        <input ref={descriptionRef} type="text" placeholder="Descrição" />
        <button type="submit">Adicionar</button>
      </form>
    );
  }