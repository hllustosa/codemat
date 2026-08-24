import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Uma pessoa aplicou certa quantia em ações. No primeiro mês, ela perdeu 30%
      do total do investimento e, no segundo mês, recuperou 20% do que havia
      perdido. Depois desses dois meses, resolveu tirar o montante de R${" "}
      <b>M</b> reais gerado pela aplicação.
      <p />
      Neste problema, você deve criar um programa que receba como entrada o valor <b>M</b>{" "}
      gerado pela aplicação descrita e produza como saída o valor inicial investido.
      <p />
      <h3>Entradas</h3>
      Um número <b>M</b> contendo o montante produzido pelo investimento.
      <p />
      <h3>Saída</h3>
      Um número contendo o valor inicial investido.
      <p />
    </div>
  );
}
