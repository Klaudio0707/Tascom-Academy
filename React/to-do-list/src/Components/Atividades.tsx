import React, { type JSX } from 'react';

interface Atividade {
    title: string;
    description: string;
}

type AtividadesProps = {
    atividades: Atividade[];
};

export default function Atividades({ atividades }: AtividadesProps): JSX.Element {
    return (
        <section className="tarefas_Container">
            <h2>Lista de Atividades</h2>
            {atividades.length > 0 ? (
                <ul>
                    {atividades.map((atividade, index) => (
                        <li key={index}>
                            <h3>{atividade.title}</h3>
                            <p>{atividade.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhuma atividade adicionada.</p>
            )}
        </section>
    );
}
