import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Considere um cruzamento entre uma estrada e uma linha férrea em que passam
      muitos veículos diariamente. A 100 metros de distância deste cruzamento,
      existe um pardal de sinalização que mede a velocidade e a aceleração dos
      veículos que passam. O objetivo deste pardal não é aplicar multas, mas sim
      avisar aos motoristas que eles devem acelerar ou reduzir a velocidade em
      que estão, para não colidir com o trem, quando este está há poucos
      momentos de passar pelo cruzamento. <p />
      Suponha que faltam 5 segundos para que o primeiro vagão do trem chegue ao
      cruzamento, e queremos estimar, com base na velocidade e na aceleração dos
      veículos, em qual posição eles estarão em 5 segundos. Desta forma,
      saberemos se eles estarão antes, depois, ou exatamente no cruzamento no
      momento em que o primeiro vagão estiver passando. Tal estimativa pode ser
      obtida pela fórmula:
      <p />
      <Eq s="E_{f} = V_{0}t + \frac{a t^{2}}{2}" block />
      Onde <Eq s="V_{0}" /> é a velocidade do veículo ao cruzar o pardal (em
      m/s), <Eq s="a" /> é a aceleração (em m/s²) do veículo ao cruzar o pardal
      e
      <Eq s="E_{f}" /> é a posição final em metros do veículo, ou seja a
      distância em que o veículo deverá estar após <Eq s=" t = 5" /> segundos
      terem se passado. <p />
      Neste exercício você deve desenvolver um programa que, dado a velocidade
      inicial <Eq s="V_{0}" /> e a aceleração <Eq s="a" /> de um veículo,
      produza a posição em que este veículo irá estar em relação ao pardal após
      5 segundos.
      <h3>Entradas</h3>
      Dois números reais <b>v0</b> contendo a velocidade inicial do veículo e{" "}
      <b>a</b> contendo a aceleração. <p />
      <h3>Saída</h3>
      Uma número real contendo o valor <b>Ef</b>, isto é, a posição do veículo
      após 5 segundos. <p />
    </div>
  );
}
