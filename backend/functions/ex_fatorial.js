import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      O fatorial de um número natural <Eq s="n" /> denotado por <Eq s="n!" /> é
      calculado com base na multiplicação desse número por seus antecessores com
      exceção do zero, isto é.
      <p />
      <Eq
        s="n! = n \times (n - 1)  \times  (n - 2) ... 3  \times  2  \times  1"
        block
      />
      <p />
      Neste problema, você deve criar um programa que receba como entrada o
      número <b>n</b> e produza como saída o seu fatorial.
      <p />
      <h3>Entradas</h3>
      Um número inteiro <b>n</b>.
      <p />
      <h3>Saída</h3>
      Um número contendo o fatorial de <b>n</b>.
      <p />
    </div>
  );
}
