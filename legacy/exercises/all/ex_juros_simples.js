import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Uma aplicação financeira tem seu rendimento com base em juros simples
      de 0,5% ao mês. Suponha que um investimento de <b>C</b> reais tenha sido
      realizado nessa aplicação, e que a posição tenha sido mantida por <b>t</b>{" "}
      meses. Deseja-se saber o montante que o investidor terá após o período.
      <p />
      Neste problema, você deve produzir um programa que receba como entrada um
      um valor inicial <b>C</b> em reais e uma quantidade de meses <b>t</b>. O
      programa deve produzir como saída o montante obtido com a aplicação.
      <p />
      <h3>Entradas</h3>
      Dois números, um valor inicial <b>C</b> em reais e uma quantidade de meses{" "}
      <b>t</b>.
      <p />
      <h3>Saída</h3>
      Um número contendo o montante obtido com a aplicação.
      <p />
    </div>
  );
}
