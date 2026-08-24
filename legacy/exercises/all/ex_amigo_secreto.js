import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Amigo secreto é uma brincadeira tradicional nas festas de fim de ano. Um
      grupo de amigos se reúne e cada um deles sorteia o nome da pessoa que irá
      presentear. No dia da troca de presentes, uma primeira pessoa presenteia
      seu amigo secreto. Em seguida, o presenteado revela seu amigo secreto e o
      presenteia.
      <p />A brincadeira continua até que todos sejam presenteados, mesmo no
      caso em que o ciclo se fecha. Este ano, <b>N</b> funcionários de uma
      empresa, entre eles um casal, participarão de um amigo secreto. A primeira
      pessoa a revelar será definida por sorteio.
      <p />
      Neste problema, você deve criar um programa que receba como entrada um
      número <b>N</b> de pessoas que irá participar do amigo secreto. O programa
      deve produzir como saída a probabilidade de que a primeira pessoa a
      revelar o seu amigo secreto e a última presenteada sejam as duas pessoas
      do casal.
      <p />
      <h3>Entrada</h3>
      Um número inteiro, <b>N</b> (<Eq s="5 \leq N \leq 10" />
      ), contendo o número de funcionários que vai participar do amigo
      <h3>Saída</h3>
      Um número real contendo a probabilidade da declaração de um contribuinte
      ser considerada inconsistente, dado que ela era fraudulenta.
      <p />
    </div>
  );
}
