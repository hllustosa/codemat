import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Considere que um professor de arqueologia tenha obtido recursos para
      visitar 5 museus, sendo 3 deles no Brasil e 2 fora do país. Ele decidiu
      restringir sua escolha a um número <b>m_n</b> de museus nacionais e
      <b>m_i</b> museus internacionais que foram pré-selecionados.
      <p />
      Neste problema, você deve criar um programa que receba como entrada o
      número de museus nacionais e internacionais <b>m_n</b> e <b>m_i</b> e
      produza como saída um número indicando de quantas maneiras diferentes esse
      professor pode escolher os 5 museus para visitar a partir do grupo de
      museus pré-selecionados.
      <p />
      <h3>Entradas</h3>
      Dois números <b>m_n</b> e <b>m_i</b> com número de museus nacionais e
      internacionais pré-selecionados.
      <p />
      <h3>Saída</h3>
      Um número indicando de quantas maneiras diferentes esse professor pode
      escolher os 5 museus para visitar a partir do grupo de museus
      pré-selecionados.
      <p />
    </div>
  );
}
