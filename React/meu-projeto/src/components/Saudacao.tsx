

type Props = {
    name: string;
    idade: number;
}

export default function Saudacao({name, idade}: Props) {
  return (
    <div>Bem vinde, {name} sua idade {idade}!</div>
  )
}