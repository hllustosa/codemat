import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Para decorar um cilindro circular reto será usada uma faixa retangular de
      papel transparente, na qual está desenhada em negrito uma diagonal que
      forma 30° com a borda inferior. O raio da base do cilindro mede{" "}
      <Eq s="\frac{n}{\pi}" /> cm, e ao enrolar a faixa obtém-se uma linha em
      formato de hélice, como na figura.
      <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/2018q170.svg"} width="50%" />
        <p />
      </div>
      <p />
      Deseja-se saber qual altura, em cm, do cilindro. Desta forma, neste
      problema, você deve criar um programa que receba como entrada o valor{" "}
      <b>n</b>, necessário para determinar o raio da base do cilindro. Seu
      programa deve produzir como saída um número contendo a altura do cilindro.
      <p />
      Dica: Utilize a função trigonométrica <b>Math.tan</b>. Lembrando que o
      ângulo de entrada dessas funções deve estar em radianos. Você também pode
      usar <b>Math.PI</b> para ter acesso ao valor de <Eq s="\pi" />.
      <p />
      <p />
      <h3>Entradas</h3>
      Um número <b>n</b> presente na fórmula <Eq s="\frac{n}{\pi}" /> que
      determina o raio da base do cilindro. <p />
      <h3>Saída</h3>
      Um número contendo a altura do cilindro.
      <p />
    </div>
  );
}
