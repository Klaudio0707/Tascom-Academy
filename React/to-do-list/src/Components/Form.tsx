import React from 'react'

type Props = {}

export default function Form({}: Props) {
  return (
    <div>
        <form >
            <section>
                <label htmlFor="title">Título</label>
                    <input type="text" placeholder='Titulo da Atividade' />
            </section>
            <section>
                <label htmlFor="description">Descrição</label>
                    <input type="text" placeholder='Descrição' />
            </section>
            <button type='submit'>Adicionar</button>
        </form>
    </div>
  )
}