export default function Exercise() {
  return (
    <div>
      Um professor necessita calcular a média aritmética simples das notas de
      duas avaliações aplicadas em seus alunos. A média aritmética é obtida como
      a razão entre a soma das notas sobre a quantidade de avaliações aplicadas.{" "}
      <p />
      Neste problema você deve produzir um programa que receba como entrada dois
      números reais (<b>nota1</b> e <b>nota2</b>) contendo as duas notas tiradas
      por um aluno nas avaliações aplicadas pelo professor. Em sequência, o
      programa deve produzir como saída a média aritmética dessas duas notas.{" "}
      <p />
      Além disso, caso o aluno tenha tido uma média maior ou igual 7.0, o
      programa deve produzir a cadeia de caracteres "aprovado" após a média.
      Caso a média do aluno tenha ficado abaixo de 7.0, o programa deve produzir
      a cadeia de caracteres "reprovado". <p />
      <h3>Entradas</h3>
      Dois números reais <b>nota1</b> e <b>nota2</b>. <p />
      <h3>Saída</h3>
      Um número real <b>media</b> contendo a média aritmética de <b>nota1</b> e{" "}
      <b>nota2</b> e uma segunda saída com uma cadeia de caracteres com os valores
      "aprovado" ou "reprovado" respectivamente. <p />
    </div>
  );
}
