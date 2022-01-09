import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      O Estatuto do Idoso, no Brasil, prevê certos direitos às pessoas com idade
      avançada, concedendo a estas, entre outros benefícios, a restituição de
      imposto de renda antes dos demais contribuintes. <p />
      Considere que, entre os idosos, a restituição seja concedida em ordem
      decrescente de idade e que, em subgrupos de pessoas com a mesma idade, a
      ordem seja decidida por sorteio.
      <p />
      Suponha que João está na fila para receber sua restituição. Nessa fila
      existe um número
      <b>L</b> de idosos mais velhos que João, e um número <b>E</b> de idosos
      que têm a mesma idade de João. Queremos determinar a probabilidade de João
      ser o enésimo sorteado, isto é, aquele que está na posição <b>N</b> da
      fila.
      <p />
      Neste problema você deve criar um programa que receba como entrada os
      valores
      <b>L</b> com o número de idosos mais velhos que João, um valor <b>E</b>{" "}
      com o número de idosos que têm a mesma idade de João, e um número <b>N</b>{" "}
      (<Eq s="L < N \leq L+E" />) que representa uma posição na fila. Seu
      programa deve emitir como saída um único número real contendo a
      probabilidade de João estar na enésima posição (a posição denotada por{" "}
      <b>N</b>) da fila.
      <p />
      <h3>Entrada</h3>
      Três números, <b>L</b>, <b>E</b> contendo o número de idosos mais velhos e
      de mesma idade que João respectivamente e <b>N</b> (
      <Eq s="L < N \leq L+E" />) uma posição a fila.
      <h3>Saída</h3>
      Um único número real contendo a probabilidade de João estar na enésima
      posição (a posição denotada por <b>N</b>) da fila
      <p />
    </div>
  );
}
