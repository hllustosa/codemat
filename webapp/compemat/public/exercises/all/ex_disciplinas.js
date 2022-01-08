import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Um curso preparatório oferece aulas de várias disciplinas distintas. O
      preço P, em reais, da mensalidade é calculado pela fórmula:
      <Eq s="P(n) = 980 - \frac{1680}{n}" block />
      Onde n é o número de disciplinas escolhidas pelo aluno. Alex deseja
      matricular seu filho Júlio e, consultando seu orçamento familiar mensal,
      avaliou que poderia pagar uma mensalidade de, no máximo, <b>R</b> reais.
      <p />
      Neste problema você deve criar um programa que receba como entrada o{" "}
      <b>R</b> com o valor limite da mensalidade que pode ser pago por Alex e
      produza como saída o número máximo de disciplinas que Júlio pode cursar.
      <p />
      Dica: utilize a função embutida <b>Math.floor</b> realizar o
      arrendodamento para baixo e produzir um número inteiro como saída.
      <h3>Entradas</h3>
      Um número <b>R</b> (<Eq s="0 < R < 980" />) contento o valor máximo que Alex pode pagar. <p />
      <h3>Saída</h3>
      Um número inteiro contendo o número máximo de disciplinas que Júlio pode
      cursar.
      <p />
    </div>
  );
}
