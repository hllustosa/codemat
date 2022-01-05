import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      O índice de massa corporal (IMC) é um parâmetro calculado para saber se o
      peso de uma pessoa corresponde com a sua altura, isto é, se a pessoa está
      em seu peso ideal, abaixo ou acima dele. A fórmula para o cálculo do IMC
      é: <p />
      <Eq s="imc = \frac{peso}{altura^{2}}" block />
      Neste problema, você deve produzir um programa que receba como entrada o
      peso e a altura de uma pessoa e produza como saída o IMC. <p />
      <h3>Entradas</h3>
      Dois números reais <b>peso</b> e <b>altura</b>. <p />
      <h3>Saída</h3>
      Um número real <b>imc</b> contendo o índice de massa corporal calculado
      com base na entrada. <p />
    </div>
  );
}
