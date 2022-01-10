import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      A fórmula da soma dos <Eq s="n" /> primeiros termos de uma progressão
      aritmética é:
      <p />
      <Eq s="S_n = \frac{n (a_1 + a_n)}{2}" block />
      <p />
      Onde <Eq s="a_1" /> é o primeiro termo e <Eq s="a_n" /> é o enésimo termo da
      PA.
      <p />
      Neste problema você deve produzir um programa que receba como entrada os
      valores <b>n</b>, <b>a1</b> e <b>an</b> e produza como saída o somatório
      dos termos da PA.
      <h3>Entradas</h3>
      Três números <b>n</b>, <b>a1</b> e <b>an</b> contendo os parâmetros para
      a fórmula do somatório dos termos de uma PA. <p />
      <h3>Saída</h3>
      Um número contendo a soma dos <b>n</b> termos da PA.
      <p />
    </div>
  );
}
