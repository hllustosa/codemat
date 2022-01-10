import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Uma torneira está gotejando água em um balde com capacidade de 18 litros.
      No instante atual, o balde se encontra com ocupação de 50% de sua
      capacidade. A cada segundo caem <b>x</b> gotas de água da torneira, e uma
      gota é formada, em média, por <Eq s="5 \times 10^{-2}" /> mL de água.
      <p />
      Neste problema, você deve produzir um programa que receba como entrada um
      inteiro <b>x</b> representando o número de gotas que caem da torneira por
      segundo. O seu programa deve produzir como saída o número de segundos 
      necessário parar que o balde fique completamente cheio.
      <p />
      <h3>Entradas</h3>
      Um número <b>x</b> contendo a quantidade de gotas que caem por segundo da
      torneira. <p />
      <h3>Saída</h3>
      A quantidade de segundos necessários para encher o balde a partir do estado
      atual.
      <p />
    </div>
  );
}
