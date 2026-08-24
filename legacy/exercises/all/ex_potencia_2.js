import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Neste problema você deve criar um programa que receba como entrada um
      número inteiro <b>expoente</b> e que produza como saída o valor{" "}
      <Eq s="2^{expoente}" /> .<h3>Entradas</h3>
      Um número inteiro <b>expoente</b>. <p />
      <h3>Saída</h3>
      Um número inteiro contendo o valor de  <Eq s="2^{expoente}" />. <p />
    </div>
  );
}
