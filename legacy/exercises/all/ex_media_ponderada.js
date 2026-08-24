import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Um professor precisa calcular a média aritmética ponderada das notas de
      três avaliações aplicadas em seus alunos. A média aritmética ponderada é
      obtida como a razão entre a soma dos produtos das notas e dos pesos dessas
      notas sobre a soma dos pesos. <p />
      Para o cálculo da média, a primeira avaliação terá peso 2, a segunda terá
      peso 3 e a terceira terá peso 4. Portanto, o cálculo da média fica
      conforme a fórmula: <p />
      <Eq
        s="media = \frac{2\ nota_{1} + 3\ nota_{2} + 4\ nota_{3} }{9}"
        block
      />
      O valor 9 no denominador representa a soma dos pesos{" "}
      <Eq s="2 + 3 + 4 = 9" />. <p />
      Neste problema você deve produzir um programa que receba como entrada três
      números reais (nota1, nota2, nota3) contendo as três notas tiradas por um
      aluno nas avaliações aplicadas pelo professor. Na sequência, o programa
      deve produzir como saída a média ponderada dessas notas, considerando os
      pesos 2, 3 e 4 paras as notas nota1, nota2 e nota3 respectivamente.
      <p />
      <h3>Entradas</h3>
      Três números reais <b>nota1</b>, <b>nota2</b> e <b>nota3</b>. <p />
      <h3>Saída</h3>
      Um número real <b>media</b> contendo a média ponderada de <b>nota1</b>,{" "}
      <b>nota2</b> e <b>nota3</b>; <p />
    </div>
  );
}
