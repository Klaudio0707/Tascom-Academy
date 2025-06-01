import React, { useState, type JSX } from 'react';

interface Atividade {
    title: string;
    description: string;
}

type FormProps = {
    onAddAtividade: (atividade: Atividade) => void; 
};

export default function Form({ onAddAtividade }: FormProps): JSX.Element {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAddAtividade({
            title,
            description,
        });


        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="title">Título</label>
                    <input
                        type="text"
                        placeholder="Título da Atividade"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor="description">Descrição</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </section>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}
