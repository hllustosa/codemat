import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      A famosa sequência de Fibonnaci, atribuída ao matemático italiano Leonardo
      Bonacci, é construída a partir de uma simples regra, em que o próximo
      número da sequência é obtido pela soma dos dois números anteriores.
      Considerando como os dois primeiros números da sequência os valores 0 e 1,
      temos: <p />

      <Eq s="0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89..." block />
      
      <p />
      Neste problema você deve criar um programa que produza como saída toda a
      sequência de Fibonnaci até um determinado número <b>n</b> dado como
      entrada.
      <h3>Entradas</h3>
      Um número <b>n</b>. <p />
      <h3>Saída</h3>A sequência de Fibonnaci contendo os <b>n</b> primeiros
      números. <p />
    </div>
  );
}
